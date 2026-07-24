import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";

import { supabase } from "@/lib/supabase";

const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
  clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      userId,
      email,
      name,
      plan,
      price,
    } = body;

    const orderId = `TRV-${Date.now()}`;

    const transaction = {
      transaction_details: {
        order_id: orderId,
        gross_amount: Number(price),
      },

      customer_details: {
        first_name: name,
        email,
      },

      item_details: [
        {
          id: plan.slug,
          name: `Membership ${plan.name}`,
          quantity: 1,
          price: Number(price),
        },
      ],

      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
      },

      custom_field1: userId,
      custom_field2: plan.id,
    };

    const snapResponse =
      await snap.createTransaction(transaction);

    await supabase
      .from("payments")
      .insert({
        user_id: userId,

        plan_id: plan.id,

        order_id: orderId,

        gross_amount: Number(price),

        status: "pending",

        transaction_status: "pending",

        snap_token: snapResponse.token,

        snap_redirect_url:
          snapResponse.redirect_url,
      });

    return NextResponse.json({
      token: snapResponse.token,
      redirect_url:
        snapResponse.redirect_url,
      order_id: orderId,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Payment Error",
      },
      {
        status: 500,
      }
    );
  }
}
