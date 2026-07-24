import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function POST(req: Request) {

  const body = await req.json();

  const {
    payment_id
  } = body;


  const { data, error } =
    await supabase
      .from("payments")
      .update({

        status: "paid",

        transaction_id:
          "SIM-" + Date.now(),

        updated_at:
          new Date().toISOString()

      })
      .eq(
        "id",
        payment_id
      )
      .select()
      .single();



  if(error){

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


  return NextResponse.json({

    success:true,

    payment:data

  });


}
