import { NextResponse } from "next/server";
import crypto from "crypto";

import { supabase } from "@/lib/supabase";


export async function POST(
  req: Request
) {

  try {


    const body = await req.json();



    const {
      order_id,
      status_code,
      gross_amount,
      signature_key,
      transaction_status,
      fraud_status,
    } = body;



    /*
      Validasi signature Midtrans
    */

    const serverKey =
      process.env.MIDTRANS_SERVER_KEY;



    const signatureString =
      order_id +
      status_code +
      gross_amount +
      serverKey;



    const calculatedSignature =
      crypto
        .createHash("sha512")
        .update(signatureString)
        .digest("hex");



    if (
      calculatedSignature !== signature_key
    ) {

      return NextResponse.json(
        {
          message: "Invalid signature"
        },
        {
          status: 401
        }
      );

    }





    let paymentStatus =
      "pending";



    /*
      Mapping status Midtrans
    */


    if (
      transaction_status === "capture" &&
      fraud_status === "accept"
    ) {

      paymentStatus = "paid";

    }


    else if (
      transaction_status === "settlement"
    ) {

      paymentStatus = "paid";

    }


    else if (
      transaction_status === "expire"
    ) {

      paymentStatus = "expire";

    }


    else if (
      transaction_status === "deny"
    ) {

      paymentStatus = "deny";

    }


    else if (
      transaction_status === "cancel"
    ) {

      paymentStatus = "cancel";

    }





    /*
      Update database
    */


    const { error } =
      await supabase
        .from("payments")
        .update({

          status: paymentStatus,

          transaction_id:
            body.transaction_id,

          payment_type:
            body.payment_type,

          updated_at:
            new Date()
              .toISOString()

        })

        .eq(
          "order_id",
          order_id
        );





    if (error) {

      throw error;

    }





    return NextResponse.json({

      success: true,

      status: paymentStatus

    });





  }

  catch(error:any) {


    return NextResponse.json(

      {
        success:false,
        message:error.message
      },

      {
        status:500
      }

    );


  }


      }
