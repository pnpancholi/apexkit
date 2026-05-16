export default function Hero() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Traditional Setup */}
        <div className="bg-gradient-to-br from-error/10 to-base-200 rounded-2xl p-8 shadow-xl">
          <div className="mb-6">
            <div className="badge badge-error mb-2">Traditional Setup</div>
            <h3 className="text-3xl font-bold text-error mb-2">10+ Hours</h3>
            <p className="text-sm text-base-content/70">Building yet another set of form, configuring authentication, and email providers.</p>
          </div>

          <div className="bg-base-300 rounded-lg p-4 max-h-96 overflow-y-auto font-mono text-sm">
            <div className="flex items-center gap-2 py-1">
              <span className="text-warning">📁</span>
              <span className="text-warning">src/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">auth/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>auth-config.js</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>session-handler.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>jwt-utils.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>password-hash.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">providers/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>email-provider.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>smtp-config.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>oauth-google.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>oauth-github.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">components/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>SignupForm.tsx</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>LoginForm.tsx</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>PasswordReset.tsx</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>EmailVerification.tsx</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">middleware/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>auth-middleware.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>rate-limit.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">database/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>user-model.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>session-model.ts</span>
              <span className="text-error text-xs">❌</span>
            </div>
          </div>
        </div>

        {/* Right Side: Apex Kit */}
        <div className="bg-gradient-to-bl from-success/10 to-base-200 rounded-2xl p-8 shadow-xl">
          <div className="mb-6">
            <div className="badge badge-success mb-2">With Apex Kit</div>
            <h3 className="text-3xl font-bold text-success mb-2">Under 30 Minutes</h3>
            <p className="text-sm text-base-content/70">
              Configure your API keys, and get up and running in minutes. Hack it to your liking easily when you need to.
            </p>
          </div>

          <div className="bg-base-300 rounded-lg p-4 max-h-96 overflow-y-auto font-mono text-sm">
            <div className="flex items-center gap-2 py-1">
              <span className="text-warning">📁</span>
              <span className="text-warning">actions</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-info">📄</span>
              <span>auth.ts</span>
              <span className="text-success text-xs">✓</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <span className="text-warning">📁</span>
              <span className="text-warning">auth/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-info">📄</span>
              <span>index.ts</span>
              <span className="text-success text-xs">✓</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-info">📄</span>
              <span>client.ts</span>
              <span className="text-success text-xs">✓</span>
            </div>

            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-info">📄</span>
              <span>utils.ts</span>
              <span className="text-success text-xs">✓</span>
            </div>
            <div className="flex items-center gap-2 py-1">
              <span className="text-warning">📁</span>
              <span className="text-warning">app/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span>migrations</span>
              <span className="text-success text-xs">✓</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span>schema</span>
              <span className="text-success text-xs">✓</span>
            </div>

            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-info">📄</span>
              <span>index.ts</span>
              <span className="text-success text-xs">✓</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-info">📄</span>
              <span>forgot-password.tsx</span>
              <span className="text-success text-xs">✓</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-info">📄</span>
              <span>reset-password.tsx</span>
              <span className="text-success text-xs">✓</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <span className="text-warning">📁</span>
              <span className="text-warning">app/</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">sign-up</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>page.tsx</span>
              <span className="text-success text-xs">✓</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">sign-in</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>page.tsx</span>
              <span className="text-success text-xs">✓</span>
            </div>

            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">reset-password</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>page.tsx</span>
              <span className="text-success text-xs">✓</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-4">
              <span className="text-warning">📁</span>
              <span className="text-warning">forgot-password</span>
            </div>
            <div className="flex items-center gap-2 py-1 ml-8">
              <span className="text-info">📄</span>
              <span>page.tsx</span>
              <span className="text-success text-xs">✓</span>
            </div>
            {/*------------------------------------------------------------------------------------------------------------------*/}
            <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/30">
              <div className="text-success text-sm font-bold mb-3">✓ Ready to Use:</div>
              <div className="text-sm space-y-2 text-base-content/80">
                <div className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Email/Password Auth</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Magic Links</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Social Login</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Password Reset</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Session Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span>Protected Routes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
