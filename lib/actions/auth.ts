import { redirect } from "next/navigation";
import { signIn } from "../auth-client";
import { authClient } from "../auth-client";

type ActionResponse = { success: boolean; message: string };

export async function signInWithPassword(
  _: any,
  formData: FormData,
): Promise<ActionResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await signIn.email({ email, password });
  if (error) {
    return { success: false, message: "Invalid email or password" };
  } else {
    redirect("/profile");
  }
}

export async function sendMagicLink(
  _: any,
  formData: FormData,
): Promise<ActionResponse> {
  const email = formData.get("email") as string;
  const { data, error } = await signIn.magicLink({
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
}

export async function signUp(
  _: any,
  formData: FormData,
): Promise<ActionResponse> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await authClient.signUp.email({
    name,
    email,
    password,
  });
  if (error) {
    return { success: false, message: "Failed to create an account!" };
  } else {
    redirect("/sign-in");
  }
}

export async function requestPasswordReset(_: any, formData: FormData): Promise<ActionResponse> {
  const email = formData.get("email") as string
  try {
    await authClient.requestPasswordReset({
      email,
    })
  } catch (error) {
    return { success: false, message: "We do not recognise that email" }
  }
  return { success: true, message: "Check your inbox" }
}

export async function updateEmail(newEmail: string) {
  console.log("new email", newEmail)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!newEmail || !emailRegex.test(newEmail)) {
    return { success: false, message: "Invalid email address" }
  }
  console.log("new email passed regex")
  try {
    await authClient.changeEmail({ newEmail })
    return { success: true, message: "Verification email sent to the new email address" }
  } catch (error) {
    return { success: false, message: "Something went wrong" }
  }
}
// export async function signOut(): Promise<ActionResponse> {
//   const { data, error } = await authClient.signOut();
//   if (error) {
//     return { success: false, message: "Something went wrong" };
//   } else {
//     redirect("/");
//   }
// }
