"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function PaymentSuccessPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    activateMembership();
  }, []);

  async function activateMembership() {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      const user = session.user;

      const planSlug =
        localStorage.getItem("selected_plan");

      if (!planSlug) {
        router.replace("/membership");
        return;
      }

      const { data: plan } = await supabase
        .from("membership_plans")
        .select("*")
        .eq("slug", planSlug)
        .single();

      if (!plan) {
        router.replace("/membership");
        return;
      }

      await supabase
        .from("user_memberships")
        .delete()
        .eq("user_id", user.id);

      const expired = new Date();

      expired.setMonth(expired.getMonth() + 1);

      await supabase
        .from("user_memberships")
        .insert({
          user_id: user.id,
          plan_id: plan.id,
          status: "active",
          started_at: new Date().toISOString(),
          expired_at: expired.toISOString(),
        });

      localStorage.removeItem("selected_plan");

      setTimeout(() => {
        router.replace("/dashboard");
      }, 3000);
    } catch (err) {
      console.error(err);
      router.replace("/membership");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
          ✅
        </div>

        <h1 className="mt-6 text-4xl font-black text-slate-900">
          Pembayaran Berhasil
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Membership TERAVIA Anda sedang diaktifkan.
        </p>

        <div className="mt-10">

          <div className="mx-auto h-3 w-64 overflow-hidden rounded-full bg-slate-200">

            <div className="h-full w-full animate-pulse rounded-full bg-cyan-600"></div>

          </div>

        </div>

        <p className="mt-6 text-sm text-slate-500">
          Anda akan diarahkan ke Dashboard dalam beberapa detik...
        </p>

      </div>

    </main>
  );
          }
