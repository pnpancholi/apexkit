"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function updateProfile(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
}
