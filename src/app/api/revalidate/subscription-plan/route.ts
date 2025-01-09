import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("subscriptionPlans");
  return NextResponse.json({
    success: true,
    message: "Subscription plan revalidated successfully!",
  });
}
