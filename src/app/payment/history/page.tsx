"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function PaymentPage() {
const [payments, setPayments] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
loadPayments();
}, []);

async function loadPayments() {
const {
data: { session },
} = await supabase.auth.getSession();

if (!session) {  
  setLoading(false);  
  return;  
}  

const { data, error } = await supabase  
  .from("payments")  
  .select(`  
    *,  
    membership_plans (  
      name  
    )  
  `)  
  .eq("user_id", session.user.id)  
  .order("created_at", {  
    ascending: false,  
  });  

if (!error && data) {  
  setPayments(data);  
}  

setLoading(false);

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
    return "bg-red-100 text-red-700";  

  case "deny":  
    return "bg-red-100 text-red-700";  

  default:  
    return "bg-slate-100 text-slate-700";  
}

}

return (
<main className="min-h-screen bg-slate-100">

<div className="mx-auto max-w-7xl px-6 py-16">  

    <div className="mb-10">  

      <h1 className="text-4xl font-black">  
        Riwayat Pembayaran  
      </h1>  

      <p className="mt-2 text-slate-600">  
        Seluruh transaksi membership TERAVIA.  
      </p>  

    </div>  

    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">  

      <table className="w-full">  

        <thead className="bg-slate-900 text-white">  

          <tr>  

            <th className="px-6 py-4 text-left">  
              Order ID  
            </th>  

            <th className="px-6 py-4 text-left">  
              Membership  
            </th>  

            <th className="px-6 py-4 text-left">  
              Nominal  
            </th>  

            <th className="px-6 py-4 text-left">  
              Status  
            </th>  

            <th className="px-6 py-4 text-left">  
              Tanggal  
            </th>  

          </tr>  

        </thead>  

        <tbody>  

          {loading && (  

            <tr>  

              <td  
                colSpan={5}  
                className="py-16 text-center"  
              >  
                Memuat...  
              </td>  

            </tr>  

          )}  

          {!loading &&  
            payments.length === 0 && (  

              <tr>  

                <td  
                  colSpan={5}  
                  className="py-20 text-center text-slate-500"  
                >  
                  Belum ada transaksi.  
                </td>  

              </tr>  

            )}  

          {payments.map((item) => (  

            <tr  
              key={item.id}  
              className="border-t"  
            >  

              <td className="px-6 py-5 font-medium">

  <Link
    href={`/payment/history/${item.id}`}
    className="text-cyan-600 hover:underline"
  >
    {item.order_id}
  </Link>

</td>

              <td className="px-6 py-5">  
                {item.membership_plans?.name}  
              </td>  

              <td className="px-6 py-5">  
                Rp{" "}  
                {Number(  
                  item.gross_amount  
                ).toLocaleString("id-ID")}  
              </td>  

              <td className="px-6 py-5">  

                <span  
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${badge(  
                    item.status  
                  )}`}  
                >  
                  {item.status.toUpperCase()}  
                </span>  

              </td>  

              <td className="px-6 py-5">  
                {new Date(  
                  item.created_at  
                ).toLocaleDateString("id-ID")}  
              </td>  

            </tr>  

          ))}  

        </tbody>  

      </table>  

    </div>  

    <div className="mt-10">  

      <Link  
        href="/membership"  
        className="rounded-2xl bg-cyan-600 px-8 py-4 font-bold text-white hover:bg-cyan-700"  
      >  
        Upgrade Membership  
      </Link>  

    </div>  

  </div>  

</main>

);
}


