import { useMemo, useState } from 'react'

type LoginScreenProps = {
  onSuccess: () => void
}

function getHebrewGreeting(date: Date) {
  const hour = date.getHours()
  if (hour >= 5 && hour <= 11) return 'בוקר טוב'
  if (hour >= 12 && hour <= 16) return 'צהריים טובים'
  return 'ערב טוב'
}

const ACCESS_CODE = '1010'

export default function LoginScreen({ onSuccess }: LoginScreenProps) {
  const greeting = useMemo(() => getHebrewGreeting(new Date()), [])
  const [pin, setPin] = useState('')
  const [error, setError] = useState<string | null>(null)

  function submit(nextPin: string) {
    if (nextPin.length !== 4) return
    if (nextPin === ACCESS_CODE) {
      setError(null)
      onSuccess()
      return
    }
    setError('קוד גישה שגוי. נסו שוב.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-[#233667]/5 to-white">
      <header className="border-b border-[#233667]/15 bg-white/95 text-[#233667] shadow-sm shadow-[#233667]/5">
        <div className="mx-auto max-w-md px-4 py-6">
          <h1 className="text-3xl font-semibold tracking-tight">myShop 4</h1>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-8">
        <section className="rounded-[28px] border border-[#233667]/15 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
          <div className="mb-5 flex justify-center">
            <img
              src="/logo_halev_hakachol__1_.png"
              alt="הלב הכחול"
              className="h-9 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-[#233667]">{greeting}</h2>
          <p className="mt-2 text-base text-slate-600">
            הזינו קוד גישה בן 4 ספרות
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              submit(pin)
            }}
          >
            <div className="space-y-2">
              <label
                htmlFor="pin"
                className="block text-lg font-medium text-slate-900"
              >
                קוד גישה
              </label>
              <input
                id="pin"
                name="pin"
                type="password"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\\d{4}"
                maxLength={4}
                value={pin}
                onChange={(e) => {
                  const next = e.target.value.replace(/\D/g, '').slice(0, 4)
                  setPin(next)
                  setError(null)
                  if (next.length === 4) submit(next)
                }}
                className="w-full rounded-2xl border border-[#233667]/15 bg-white px-4 py-4 text-3xl tracking-[0.35em] text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-[#233667] focus:ring-4 focus:ring-[#233667]/10"
                placeholder="••••"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'pin-error' : undefined}
              />
            </div>

            {error ? (
              <p
                id="pin-error"
                className="rounded-xl bg-red-50 px-4 py-3 text-base font-medium text-red-800 ring-1 ring-red-200"
                role="alert"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={pin.length !== 4}
              className="w-full rounded-2xl bg-[#233667] px-4 py-4 text-xl font-extrabold text-white shadow-lg shadow-[#233667]/20 hover:bg-[#1b2a50] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#233667]/20"
            >
              כניסה
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

