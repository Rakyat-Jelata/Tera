import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound, redirect } from "next/navigation";

export default async function PaymentDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {

  // Cek user login
  const {
    data: {
      session,
    },
  } = await supabase.auth.getSession();


  if (!session) {
    redirect("/login");
  }


  // Ambil transaksi milik user tersebut
  const { data: payment, error } = await supabase
    .from("payments")
    .select(`
      *,
      membership_plans (
        name,
        price,
        duration
      )
    `)
    .eq("id", params.id)
    .eq("user_id", session.user.id)
    .single();


  // Jika transaksi bukan milik user atau tidak ditemukan
  if (error || !payment) {
    notFound();
  }


  function badge(status: string) {

    switch (status) {

      case "paid":
        return "bg-green-100 text-green-700";

      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "expire":
        return "bg-gray-200 text-gray-700";

      case "cancel":
      case "deny":
        return "bg-red-100 text-red-700";

      default:
        return "bg-slate-100 text-slate-700";

    }

  }


  return (

    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-4xl px-6 py-16">


        <h1 className="text-4xl font-black">
          Detail Pembayaran
        </h1>


        <p className="mt-2 text-slate-600">
          Informasi transaksi membership TERAVIA.
        </p>



        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">


          <div className="flex items-center justify-between">


            <h2 className="text-2xl font-bold">
              {payment.membership_plans?.name}
            </h2>


            <span
              className={`rounded-full px-4 py-2 text-sm font-bold ${badge(
                payment.status
              )}`}
            >
              {payment.status.toUpperCase()}
            </span>


          </div>



          <div className="mt-8 space-y-5">


            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Order ID
              </span>

              <span className="font-semibold">
                {payment.order_id}
              </span>

            </div>



            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Membership
              </span>

              <span className="font-semibold">
                {payment.membership_plans?.name}
              </span>

            </div>



            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Nominal
              </span>

              <span className="font-bold">
                Rp{" "}
                {Number(
                  payment.gross_amount
                ).toLocaleString("id-ID")}
              </span>

            </div>



            <div className="flex justify-between border-b pb-3">

              <span className="text-slate-500">
                Status
              </span>

              <span className="font-bold">
                {payment.status.toUpperCase()}
              </span>

            </div>



            <div className="flex justify-between">

              <span className="text-slate-500">
                Tanggal
              </span>

              <span>
                {new Date(
                  payment.created_at
                ).toLocaleDateString("id-ID")}
              </span>

            </div>


          </div>



          {payment.status === "pending" && (

            <div className="mt-8 rounded-2xl bg-yellow-50 p-5">

              <h3 className="font-bold text-yellow-700">
                Menunggu Pembayaran
              </h3>


              <p className="mt-2 text-sm text-yellow-700">
                Silakan selesaikan pembayaran untuk mengaktifkan membership.
              </p>


              <Link
                href={`/payment/pending?id=${payment.id}`}
                className="mt-4 inline-block rounded-xl bg-yellow-500 px-6 py-3 font-bold text-white"
              >
                Bayar Sekarang
              </Link>


            </div>

          )}



        </div>



        <Link
          href="/payment/history"
          className="mt-8 inline-block rounded-xl bg-slate-900 px-6 py-3 font-bold text-white"
        >
          ← Kembali
        </Link>


      </div>


    </main>

  );

}
