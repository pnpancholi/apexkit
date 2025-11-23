import { auth } from "@/lib/auth";

export async function resetPassword(formdata: FormData) {
  const password = formdata.get("password") as string;
  try {
    const data = await auth.api.resetPassword({
      body: { newPassword: password, token: token },
    });
  } catch (error) {
    console.error("Server Actions (Reset Password): ", error);
    return;
  }
}
