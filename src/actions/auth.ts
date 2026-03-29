import { redirect } from "next/navigation";
import { authClient } from "@/auth/client";

type ActionResponse = { success: boolean; message: string };

export async function signUp(
  _: any,
  formData: FormData,
): Promise<ActionResponse> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });
    if (error) {
      return { success: false, message: "Failed to create an account!" };
    }

  } catch (error) {
    console.error("[signUp]: Unexpected error", error)
    return { success: false, message: "Something went wrong, Please try again later" }
  }

  redirect("/sign-in")
}


export async function signInWithPassword(
  _: any,
  formData: FormData,
): Promise<ActionResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    const { error } = await authClient.signIn.email({ email, password });
    if (error) {
      return { success: false, message: "Invalid email or password" };
    }
  } catch (error) {
    console.error("[signInWithPassword]: Unexpected error", error)
    return { success: false, message: "Something went wrong, Please try again later" }
  }
  redirect("/profile");
}

export async function sendMagicLink(
  _: any,
  formData: FormData,
): Promise<ActionResponse> {
  const email = formData.get("email") as string;

  try {
    const { error } = await authClient.signIn.magicLink({
      email,
      callbackURL: "/",
      newUserCallbackURL: "/",
      errorCallbackURL: "/",
    });
    if (error) {
      return { success: false, message: "Sorry, we don't recognise that email" };
    } else {
      return { success: true, message: "Magic link is on its way" };
    }
  } catch (error) {
    console.error("[sendMagicLink]: Unexpected error", error)
    return { success: false, message: "Something went wrong, Please try again later" }
  }
}

export async function requestPasswordReset(_: any, formData: FormData): Promise<ActionResponse> {
  const email = formData.get("email") as string
  try {
    const { error } = await authClient.requestPasswordReset({
      email,
      redirectTo: "/reset-password"
    })
    if (error) {
      return { success: false, message: "We do not recognise that email" }
    }

    return { success: true, message: "Check your inbox" }
  } catch (error) {
    console.error("[requestPasswordReset]: Unexpected error", error)
    return { success: false, message: "Something went wrong, Please try again later" }
  }
}

export async function resetPassword(newPassword: string, token: string): Promise<ActionResponse> {
  if (!newPassword || newPassword.length < 8) {
    return { success: false, message: "Password must be at least 8 characters" }
  }

  try {
    const { error } = await authClient.resetPassword({
      newPassword,
      token
    })
    if (error) {
      return { success: false, message: "Failed to reset password, Try again" }
    }
    return { success: true, message: "Password reset successfully !" }
  } catch (error) {
    console.error("auth.ts [resetPassword]: Unexpected error while resetting password", error)
    return { success: false, message: "Something went wrong, Please try again later" }
  }
}
export async function updateEmail(newEmail: string): Promise<ActionResponse> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!newEmail || !emailRegex.test(newEmail)) {
    return { success: false, message: "Invalid email address" }
  }
  try {
    const { error } = await authClient.changeEmail({ newEmail })
    if (error) {
      return { success: false, message: "This email is invalid" }
    }
    return { success: true, message: "Verification email sent to the new email address" }
  } catch (error) {
    console.error("[updateEmail]: Unexpected error", error)
    return { success: false, message: "Something went wrong, Please try again later" }
  }

}

export async function signInWithGoogle() {
  try {
    const data = await authClient.signIn.social({ provider: "google", callbackURL: "/profile" })
    console.log("social login", data)
    return { success: true, message: "success" }

  } catch (error) {
    console.error("[signInWithGoogle]: Unexpected error", error)
    return { success: false, message: "Something went wrong, Please try again later" }
  }
}
