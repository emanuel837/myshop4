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
    <div className="min-h-screen bg-slate-50">
      <header className="bg-blue-950 text-white">
        <div className="mx-auto max-w-md px-4 py-6">
          <h1 className="text-3xl font-semibold tracking-tight">myShop 4</h1>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-8">
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{greeting}</h2>
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
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-3xl tracking-[0.35em] text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/15"
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
              className="w-full rounded-xl bg-blue-950 px-4 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-900/25"
            >
              כניסה
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

