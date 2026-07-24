import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function POST(
  req: Request
) {

  try {


    const body = await req.json();


    const {
      payment_id
    } = body;



    // cek user login

    const {
      data:{
        session
      }
    } = await supabase.auth.getSession();



    if(!session){

      return NextResponse.json(
        {
          success:false,
          message:"Unauthorized"
        },
        {
          status:401
        }
      );

    }





    // ambil transaksi milik user

    const {
      data:payment,
      error:findError
    } = await supabase
      .from("payments")
      .select("*")
      .eq("id",payment_id)
      .eq(
        "user_id",
        session.user.id
      )
      .single();




    if(findError || !payment){

      return NextResponse.json(
        {
          success:false,
          message:"Payment tidak ditemukan"
        },
        {
          status:404
        }
      );

    }





    // hanya pending yang boleh simulasi

    if(payment.status !== "pending"){

      return NextResponse.json(
        {
          success:false,
          message:
          "Transaksi sudah diproses"
        },
        {
          status:400
        }
      );

    }





    // update pembayaran

    const {
      data,
      error
    } = await supabase
      .from("payments")
      .update({

        status:"paid",

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

      throw error;

    }





    return NextResponse.json({

      success:true,

      payment:data

    });




  } catch(error:any){


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
