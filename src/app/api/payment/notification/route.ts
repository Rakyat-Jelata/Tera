import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";
import { supabase } from "@/lib/supabase";

const core = new Midtrans.CoreApi({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const statusResponse = await core.transaction.notification(
      body
    );

    const orderId = statusResponse.order_id;
    const transactionStatus =
      statusResponse.transaction_status;
    const fraudStatus =
      statusResponse.fraud_status;

    if (
      transactionStatus === "capture" ||
      transactionStatus === "settlement"
    ) {
      if (
        transactionStatus === "capture" &&
        fraudStatus !== "accept"
      ) {
        return NextResponse.json({
          success: true,
        });
      }

      const { data: payment } = await supabase
        .from("payments")
        .select("*")
        .eq("order_id", orderId)
        .single();

      if (!payment) {
        return NextResponse.json({
          success: false,
        });
      }

      await supabase
        .from("payments")
        .update({
          status: "paid",
          paid_at: new Date().toISOString(),
        })
        .eq("order_id", orderId);

      await supabase
        .from("user_memberships")
        .delete()
        .eq("user_id", payment.user_id);

      const expired = new Date();

      expired.setMonth(expired.getMonth() + 1);

      await supabase
        .from("user_memberships")
        .insert({
          user_id: payment.user_id,
          plan_id: payment.plan_id,
          status: "active",
          started_at: new Date().toISOString(),
          expired_at: expired.toISOString(),
        });
    }

    if (
      transactionStatus === "expire" ||
      transactionStatus === "cancel" ||
      transactionStatus === "deny"
    ) {
      await supabase
        .from("payments")
        .update({
          status: transactionStatus,
        })
        .eq("order_id", orderId);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
