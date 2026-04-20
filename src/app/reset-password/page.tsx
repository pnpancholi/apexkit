"use client";
import { useState } from "react";
import { resetPassword } from "@/actions/auth";
import { RectangleEllipsis } from "lucide-react";

const RESPONSE_STYLES = {
	success: "bg-success/10 p-4 rounded-lg border-success text-success",
	error: "bg-error/10 p-4 rounded-lg border-error text-error",
};

export default function ResetPasswordPage() {
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [feedback, setFeedback] = useState<{
		success: boolean;
		message: string;
	} | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleResetPassword = async () => {
		const params = new URLSearchParams(window.location.search);
		const token = params.get("token") as string;
		setIsLoading(true);
		if (newPassword !== confirmPassword) {
			setFeedback({ success: false, message: "Passwords do not match" });
			setIsLoading(false);
			return;
		}
		if (newPassword.length < 8) {
			setFeedback({
				success: false,
				message: "Password must be at least 8 character",
			});
			setIsLoading(false);
			return;
		}
		try {
			const res = await resetPassword(newPassword, token);

			if (res.success && res.success === true) {
				setFeedback({
					success: true,
					message: "Password reset successfully, Redirecting...",
				});
				setTimeout(() => {
					window.location.href = "/sign-in";
				}, 3000);
			} else {
				setFeedback({
					success: false,
					message: "Failed to reset password, Try again",
				});
			}
		} catch (error) {
			console.error("Unexpected Error: ", error);
			setFeedback({
				success: false,
				message: "Something went wrong, Please try again later!",
			});
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="flex min-h-screen bg-base-200 justify-center px-4 py-12">
			<div className="w-full max-w-md">
				<div className="card bg-base-100 shadow-2xl">
					<div className="card-body text-center">
						<form>
							{/* Profile Avatar */}
							<div className="flex  justify-center mb-4">
								<div className="avatar placeholder">
									<div className="flex items-center justify-center bg-primary text-primary-content rounded-full w-20">
										<RectangleEllipsis />
									</div>
								</div>
							</div>
							{/*Header Text */}
							<h2 className="text-3xl font-bold mb-2">Reset Your Password</h2>

							{/* User Info Cards */}
							<div className="space-y-4">
								<div className="flex flex-col items-center space-y-4 p-2  rounded-lg">
									<input
										className="input input-ghost w-full p-2 font-medium bg-base-200  focus:outline-none"
										type="password"
										value={newPassword}
										onChange={(e) => setNewPassword(e.target.value)}
										placeholder="Type Your New Password"
									/>

									<input
										className="input input-ghost w-full p-2 font-medium bg-base-200 focus:outline-none"
										type="password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										placeholder="Confirm Your New Password"
									/>
								</div>
							</div>
							{feedback && (
								<p
									className={`${RESPONSE_STYLES[feedback.success ? "success" : "error"]}`}
								>
									{feedback.message}
								</p>
							)}
							{/* Action Button */}
							<div className="my-5">
								<button
									className="btn btn-primary w-full mt-4"
									type="button"
									disabled={isLoading}
									onClick={handleResetPassword}
								>
									{isLoading ? "Resetting Password..." : "Reset Password"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
