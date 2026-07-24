"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getMembershipPlans } from "@/services/membership.service";

export default function MembershipPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlans();
  }, []);

  async function loadPlans() {
    try {
      const data = await getMembershipPlans();
      setPlans(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100">
        <h2 className="text-xl font-semibold">
          Memuat Paket Membership...
        </h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-cyan-700 to-sky-600 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-black">
            Membership TERAVIA
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-100">
            Pilih paket yang sesuai dengan kebutuhan bisnis properti Anda.
            Semakin tinggi paket, semakin besar kuota listing,
            AI Description, promosi, dan fitur premium lainnya.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 lg:grid-cols-4">

          {plans.map((plan) => (

            <div
              key={plan.id}
              className={`rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl ${
                plan.slug === "residence"
                  ? "border-4 border-cyan-600"
                  : ""
              }`}
            >

              {plan.slug === "residence" && (
                <div className="mb-5 rounded-full bg-cyan-600 px-4 py-2 text-center text-sm font-bold text-white">
                  PALING POPULER
                </div>
              )}

              <h2 className="text-3xl font-black text-slate-900">
                {plan.name}
              </h2>

              <p className="mt-5 text-5xl font-black text-cyan-600">
                Rp {Number(plan.price).toLocaleString("id-ID")}
              </p>

              <p className="mt-2 text-slate-500">
                / bulan
              </p>

              <div className="mt-8 space-y-4 text-slate-700">

                <div>
                  ✅ {plan.listing_limit >= 999999
                    ? "Unlimited Listing"
                    : `${plan.listing_limit} Listing`}
                </div>

                <div>
                  ✅ {plan.ai_limit >= 999999
                    ? "Unlimited AI Description"
                    : `${plan.ai_limit} AI Description`}
                </div>

                <div>
                  {plan.featured_listing ? "✅" : "❌"} Featured Listing
                </div>

                <div>
                  {plan.social_slot > 0
                    ? `✅ ${plan.social_slot} Slot Promosi`
                    : "❌ Promosi Sosial Media"}
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

              <Link
                href={`/checkout?plan=${plan.slug}`}
                className="mt-10 block rounded-2xl bg-cyan-600 py-4 text-center text-lg font-bold text-white transition hover:bg-cyan-700"
              >
                Pilih Paket
              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
              }
