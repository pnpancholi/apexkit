export const magicLinkEmail = (url: string) => `

  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f8f9fa; padding: 30px; border-radius: 10px;">
          <h2 style="color: #1a1a1a; margin-top: 0;">Sign in to Your App</h2>
          <p style="font-size: 16px; color: #666;">Click the button below to sign in to your account:</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${url}" style="
              display: inline-block;
              padding: 14px 28px;
              background-color: #0070f3;
              color: white;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              font-size: 16px;
            ">Sign In</a>
          </div>

          <p style="font-size: 14px; color: #666;">Or copy and paste this link into your browser:</p>
          <p style="
            background-color: #fff;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #e1e4e8;
            word-break: break-all;
            font-size: 13px;
            color: #0070f3;
          ">${url}</p>

          <hr style="border: none; border-top: 1px solid #e1e4e8; margin: 30px 0;">

          <p style="font-size: 13px; color: #999; margin: 0;">
            <strong>This link will expire in 5 minutes.</strong><br>
            If you didn't request this email, you can safely ignore it.
          </p>
        </div>
      </body>
    </html>
  `;
