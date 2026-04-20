import { Resend } from "resend";

const EMAIL_API_KEY = process.env.EMAIL_API_KEY?.trim();
const EMAIL_FROM = "onboarding@resend.dev";
if (!EMAIL_API_KEY) {
	console.error("[emailProvider]: Can not read email api key");
}
const resendClient = EMAIL_API_KEY ? new Resend(EMAIL_API_KEY) : null;

export type EmailTemplate = {
	subject: string;
	html: string;
};
export const emailProvider = {
	async send(email: string, template: EmailTemplate) {
		if (!resendClient) {
			console.error("[emailProvider]: unable to create a email instance");
			return;
		}
		try {
			const res = await resendClient.emails.send({
				from: EMAIL_FROM,
				to: email,
				subject: template.subject,
				html: template.html,
			});
			if (res.error) {
				console.error("[emailProvider]: Failed to send email", res.error);
				throw res.error;
			}
			console.log("[emailProvider]: Email sent successfully");
			return res;
		} catch (error) {
			console.error("[emailProvider]: Unexpected errot", error);
			throw error;
		}
	},
};
