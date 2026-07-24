"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


export default function PendingPaymentPage() {

  const searchParams = useSearchParams();

  const paymentId = searchParams.get("id");


  const [payment, setPayment] = useState<any>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    if (paymentId) {
      loadPayment();
    }

  }, [paymentId]);



  async function loadPayment() {


    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();



    if (!session) {
      return;
    }



    const { data, error } = await supabase
      .from("payments")
      .select("*")
      .eq("id", paymentId)
      .eq("user_id", session.user.id)
      .single();



    if (!error) {

      setPayment(data);

    }


    setLoading(false);

  }





  if (loading) {

    return (

      <main className="min-h-screen flex items-center justify-center">
        Memuat pembayaran...
      </main>

    );

  }




  if (!payment) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <div>
          Transaksi tidak ditemukan.
        </div>

      </main>

    );

  }




  return (

    <main className="min-h-screen bg-slate-100">


      <div className="mx-auto max-w-xl px-6 py-16">


        <div className="rounded-3xl bg-white p-8 shadow-xl">


          <h1 className="text-3xl font-black">
            Menunggu Pembayaran
          </h1>


          <p className="mt-3 text-slate-600">
            Silakan selesaikan pembayaran melalui metode berikut.
          </p>



          <div className="mt-8 rounded-2xl bg-yellow-50 p-5">


            <p className="text-sm text-yellow-700">
              Status
            </p>


            <h2 className="mt-1 text-xl font-bold text-yellow-700">
              {payment.status.toUpperCase()}
            </h2>


          </div>





          {payment.payment_type === "bank_transfer" && (

            <div className="mt-6 rounded-2xl border p-5">


              <h3 className="font-bold">
                Virtual Account
              </h3>


              <p className="mt-3 text-2xl font-black">
                {payment.va_number ?? "-"}
              </p>


            </div>

          )}






          {payment.payment_type === "qris" && (

            <div className="mt-6 rounded-2xl border p-5">


              <h3 className="font-bold">
                QRIS
              </h3>


              {payment.qris_url ? (

                <img
                  src={payment.qris_url}
                  alt="QRIS"
                  className="mt-4 rounded-xl"
                />

              ) : (

                <p className="mt-3 text-slate-500">
                  QRIS belum tersedia.
                </p>

              )}


            </div>

          )}






          <div className="mt-8 text-sm text-slate-500">


            Order ID:

            <span className="ml-2 font-semibold">
              {payment.order_id}
            </span>


          </div>





          <Link
            href="/payment/history"
            className="mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white"
          >
            Kembali ke Riwayat
          </Link>



        </div>


      </div>


    </main>

  );

}
