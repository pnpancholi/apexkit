import ResetPasswordForm from './ResetPasswordForm'

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<{ token: string }> }) {
  const { token } = await searchParams
  return (
    <div className="w-full max-w-md">
      <ResetPasswordForm token={token} />
    </div>
  )
}
