import { supabase } from "@/lib/supabase";

export async function getCurrentMembership(userId: string) {
  const { data, error } = await supabase
    .from("user_memberships")
    .select(
      `
      *,
      membership_plans (*)
      `
    )
    .eq("user_id", userId)
    .eq("status", "active")
    .single();

  if (error) return null;

  return data;
}

export async function getMembershipPlans() {
  const { data, error } = await supabase
    .from("membership_plans")
    .select("*")
    .eq("active", true)
    .order("price");

  if (error) throw error;

  return data;
}

export async function assignMembership(
  userId: string,
  planId: string,
  expiredAt: string
) {
  const { error } = await supabase
    .from("user_memberships")
    .insert({
      user_id: userId,
      plan_id: planId,
      status: "active",
      started_at: new Date().toISOString(),
      expired_at: expiredAt,
    });

  if (error) throw error;
}

export async function getListingLimit(userId: string) {
  const membership = await getCurrentMembership(userId);

  if (!membership) return 0;

  return membership.membership_plans.listing_limit;
}

export async function getAILimit(userId: string) {
  const membership = await getCurrentMembership(userId);

  if (!membership) return 0;

  return membership.membership_plans.ai_limit;
}
