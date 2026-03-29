import { describe, expect, it, vi, beforeEach } from "vitest"

//---------------------------------------------// 
//------------Mocks----------------------------// 
//---------------------------------------------//
vi.mock("next/navigation", () => ({
  redirect: vi.fn()
}))

vi.mock("@/auth/client", () => ({
  authClient: {
    signUp: { email: vi.fn() },
    signIn: {
      email: vi.fn(),
      magicLink: vi.fn(),
      social: vi.fn()
    },
    requestPasswordReset: vi.fn(),
    resetPassword: vi.fn(),
    changeEmail: vi.fn(),
  }
}))

beforeEach(() => {
  vi.clearAllMocks()
})

//-------------Imports---------------------//
import { redirect } from "next/navigation"
import { authClient } from "@/auth/client"
import { requestPasswordReset, resetPassword, sendMagicLink, signInWithPassword, signUp } from "@/actions/auth"
import { warn } from "console"

describe("Sign-Up", () => {
  const formData = new FormData()
  formData.append("name", "Test User")
  formData.append("email", "test01@email.com")
  formData.append("password", "mystrongpassword")

  it("redirects to /sign-in on success", async () => {
    vi.mocked(authClient.signUp.email).mockResolvedValue({ error: null, data: null })
    await signUp(null, formData)

    expect(redirect).toHaveBeenCalledWith("/sign-in")
  })

  it("catches error on signUp failure", async () => {
    vi.mocked(authClient.signUp.email).mockResolvedValue({ error: { message: "Email already in use" }, data: null })
    const res = await signUp(null, formData)

    expect(res).toEqual({ success: false, message: "Failed to create an account!" })
    expect(redirect).not.toHaveBeenCalled()
  })
  it("handles unexpected error on signUp", async () => {
    vi.mocked(authClient.signUp.email).mockRejectedValue(new Error("Network Error"))

    const res = await signUp(null, formData)

    expect(res).toEqual({ success: false, message: "Something went wrong, Please try again later" })
  })
})

describe("Sign-In With Email", () => {
  const formData = new FormData()
  formData.append("email", "test01@email.com")
  formData.append("password", "mystrongpassword")

  it("redirects to /profile on success", async () => {
    vi.mocked(authClient.signIn.email).mockResolvedValue({ error: null, data: null })
    await signInWithPassword(null, formData)

    expect(redirect).toHaveBeenCalledWith("/profile")
  })
  it("catched error on signIn error", async () => {
    vi.mocked(authClient.signIn.email).mockResolvedValue({ error: { message: "Invalid email or password" }, data: null })
    const res = await signInWithPassword(null, formData)

    expect(res).toEqual({ success: false, message: "Invalid email or password" })
    expect(redirect).not.toHaveBeenCalled()

  })
  it("handles unexpected error on signIn", async () => {
    vi.mocked(authClient.signIn.email).mockRejectedValue(new Error("Network Error"))
    const res = await signInWithPassword(null, formData)

    expect(res).toEqual({ success: false, message: "Something went wrong, Please try again later" })
  })
})

describe("Magic Link Sign-In", () => {
  const formData = new FormData()
  formData.append("email", "test01@email.com")

  it("sends a magic link on success", async () => {
    vi.mocked(authClient.signIn.magicLink).mockResolvedValue({ error: null, data: null })
    const res = await sendMagicLink(null, formData)

    expect(authClient.signIn.magicLink).toHaveBeenCalledWith({
      email: "test01@email.com",
      callbackURL: "/",
      newUserCallbackURL: "/",
      errorCallbackURL: "/",
    })
    expect(res).toEqual({ success: true, message: "Magic link is on its way" })
  })

  it("catches error when email is not recognized", async () => {
    vi.mocked(authClient.signIn.magicLink).mockResolvedValue({ error: { message: "Sorry, we don't recognise that email" }, data: null })
    const res = await sendMagicLink(null, formData)

    expect(authClient.signIn.magicLink).toHaveBeenCalledWith({
      email: "test01@email.com",
      callbackURL: "/",
      newUserCallbackURL: "/",
      errorCallbackURL: "/",
    })
    expect(res).toEqual({ success: false, message: "Sorry, we don't recognise that email" })
  })

  it("handles unexpected error on sending magic link", async () => {
    vi.mocked(authClient.signIn.magicLink).mockRejectedValue(new Error("Network Error"))
    const res = await sendMagicLink(null, formData)

    expect(authClient.signIn.magicLink).toHaveBeenCalledWith({
      email: "test01@email.com",
      callbackURL: "/",
      newUserCallbackURL: "/",
      errorCallbackURL: "/",
    })
    expect(res).toEqual({ success: false, message: "Something went wrong, Please try again later" })
  })
})

describe("Request Password Reset", () => {
  const formData = new FormData()
  formData.append("email", "test01@email.com")

  it("Redirects to /reset-password on success", async () => {
    vi.mocked(authClient.requestPasswordReset).mockResolvedValue({ error: null, data: null })
    const res = await requestPasswordReset(null, formData)

    expect(res).toEqual({ success: true, message: "Check your inbox" })
  })

  it("catches error when email is not recognized", async () => {
    vi.mocked(authClient.requestPasswordReset).mockResolvedValue({ error: { message: "We do not recognise that email" }, data: null })
    const res = await requestPasswordReset(null, formData)

    expect(authClient.requestPasswordReset).toHaveBeenCalledWith({
      email: "test01@email.com",
      redirectTo: "/reset-password",
    })
    expect(res).toEqual({ success: false, message: "We do not recognise that email" })
  })

  it("handles unexpected error on request password reset", async () => {
    vi.mocked(authClient.requestPasswordReset).mockRejectedValue(new Error("Network Error"))
    const res = await requestPasswordReset(null, formData)

    expect(authClient.requestPasswordReset).toHaveBeenCalledWith({
      email: "test01@email.com",
      redirectTo: "/reset-password",
    })
    expect(res).toEqual({ success: false, message: "Something went wrong, Please try again later" })
  })
})

describe("Reset Password", () => {
  const newPassword = "newpassword123"
  const token = "mysafetoken"

  it("resets password successfully", async () => {
    vi.mocked(authClient.resetPassword).mockResolvedValue({ error: null, data: null })
    const res = await resetPassword(newPassword, token)

    expect(authClient.resetPassword).toHaveBeenCalledWith({
      newPassword,
      token,
    })
    expect(res).toEqual({ success: true, message: "Password reset successfully !" })
  })

  it("returns error if password is too short", async () => {
    const shortPassword = "short"
    const res = await resetPassword(shortPassword, token)

    expect(authClient.resetPassword).not.toHaveBeenCalled()
    expect(res).toEqual({ success: false, message: "Password must be at least 8 characters" })
  })

  it("returns error on reset password failure", async () => {
    vi.mocked(authClient.resetPassword).mockResolvedValue({ error: { message: "Failed to reset password, Try again" }, data: null })
    const res = await resetPassword(newPassword, token)

    expect(authClient.resetPassword).toHaveBeenCalledWith({
      newPassword,
      token,
    })
    expect(res).toEqual({ success: false, message: "Failed to reset password, Try again" })
  })

  it("handles unexpected error on reset password", async () => {
    vi.mocked(authClient.resetPassword).mockRejectedValue(new Error("Network Error"))
    const res = await resetPassword(newPassword, token)

    expect(authClient.resetPassword).toHaveBeenCalledWith({
      newPassword,
      token,
    })
    expect(res).toEqual({ success: false, message: "Something went wrong, Please try again later" })
  })
})
