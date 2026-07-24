"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { supabase } from "@/lib/supabase";
import { getMembershipPlans } from "@/services/membership.service";

declare global {
  interface Window {
    snap: any;
  }
}

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const slug = searchParams.get("plan");

  const [plan, setPlan] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPlan();
    loadUser();

    const script = document.createElement("script");

    script.src =
      "https://app.sandbox.midtrans.com/snap/snap.js";

    script.setAttribute(
      "data-client-key",
      process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!
    );

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  async function loadUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      setUser(session.user);
    }
  }

  async function loadPlan() {
    const plans = await getMembershipPlans();

    const selected = plans.find(
      (item: any) => item.slug === slug
    );

    setPlan(selected);
  }

  async function handlePayment() {
    if (!user || !plan) return;

    setLoading(true);

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          email: user.email,
          name:
            user.user_metadata?.full_name ||
            "Member TERAVIA",
          plan,
          price: plan.price,
        }),
      });

      const data = await response.json();

      if (!data.token) {
        alert("Token pembayaran gagal dibuat.");
        return;
      }

      window.snap.pay(data.token, {
        onSuccess() {
          window.location.href =
            "/payment/success";
        },

        onPending() {
          alert(
            "Pembayaran sedang menunggu penyelesaian."
          );
        },

        onError() {
          alert("Pembayaran gagal.");
        },

        onClose() {
          alert(
            "Anda menutup popup pembayaran."
          );
        },
      });
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }

  if (!plan) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Memuat...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-3xl px-6 py-16">

        <div className="rounded-3xl bg-white p-10 shadow-xl">

          <h1 className="text-4xl font-black text-slate-900">
            Checkout Membership
          </h1>

          <p className="mt-3 text-slate-600">
            Pastikan paket yang dipilih sudah sesuai.
          </p>

          <div className="mt-10 rounded-2xl border bg-slate-50 p-6">

            <h2 className="text-3xl font-bold">
              {plan.name}
            </h2>

            <p className="mt-4 text-5xl font-black text-cyan-600">
              Rp {Number(plan.price).toLocaleString("id-ID")}
            </p>

            <div className="mt-8 space-y-3 text-lg">

              <div>
                ✅ Listing :
                {" "}
                {plan.listing_limit >= 999999
                  ? "Unlimited"
                  : plan.listing_limit}
              </div>

              <div>
                ✅ AI Description :
                {" "}
                {plan.ai_limit >= 999999
                  ? "Unlimited"
                  : plan.ai_limit}
              </div>

              <div>
                {plan.featured_listing ? "✅" : "❌"} Featured Listing
              </div>

              <div>
                {plan.social_slot > 0
                  ? `✅ ${plan.social_slot} Slot Promosi`
                  : "❌ Slot Promosi"}
              </div>

              <div>
                {plan.multi_agent
                  ? "✅ Multi Agen"
                  : "❌ Multi Agen"}
              </div>

              <div>
                {plan.priority_support
                  ? "✅ Priority Support"
                  : "❌ Priority Support"}
              </div>

            </div>

          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-10 w-full rounded-2xl bg-cyan-600 py-4 text-lg font-bold text-white transition hover:bg-cyan-700 disabled:opacity-50"
          >
            {loading
              ? "Memproses..."
              : "Bayar Sekarang"}
          </button>

          <Link
            href="/membership"
            className="mt-5 block text-center text-cyan-600"
          >
            ← Kembali ke Membership
          </Link>

        </div>

      </div>

    </main>
  );
                }
