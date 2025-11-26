import { redirect } from "next/navigation";
import { signIn } from "../auth-client";

export async function signInWithPassword(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const { data, error } = await signIn.email({ email, password });
  if (error) {
    return { error: "Invalid email or password" };
  } else {
    redirect("/profile");
  }
}

export async function sendMagicLink(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const { data, error } = await signIn.magicLink({
    email,
    callbackURL: "/",
    newUserCallbackURL: "/",
    errorCallbackURL: "/",
  });
  if (error) {
    return { error: "Sorry, we don't recognise that email" };
  } else {
    return { message: "Magic link is on its way" };
  }
}
