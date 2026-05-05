import { useMemo, useState } from 'react'

type EmployeeDetailsScreenProps = {
  onSubmitSuccess: () => void
}

const BRANCHES = [
  'טיב טוב',
  'שטינר אורתופדיקה',
  'קניון הזהב',
  'כפר סבא',
  'ירושלים',
  'קריון',
  'אסף סנטר',
  'קניון אורות',
  'קניון מרום',
  "דודג' סנטר",
  'חוצות המפרץ',
  'קניון בת ים',
  'קניון נס ציונה',
  'השרון נתניה',
] as const

const LS_EMPLOYEE_NAME = 'myshop4.employee.fullName'
const LS_EMPLOYEE_BRANCH = 'myshop4.employee.branch'

export default function EmployeeDetailsScreen({
  onSubmitSuccess,
}: EmployeeDetailsScreenProps) {
  const initialName = useMemo(() => {
    try {
      return localStorage.getItem(LS_EMPLOYEE_NAME) ?? ''
    } catch {
      return ''
    }
  }, [])

  const initialBranch = useMemo(() => {
    try {
      const saved = localStorage.getItem(LS_EMPLOYEE_BRANCH)
      return saved && BRANCHES.includes(saved as (typeof BRANCHES)[number])
        ? saved
        : ''
    } catch {
      return ''
    }
  }, [])

  const [fullName, setFullName] = useState(initialName)
  const [branch, setBranch] = useState(initialBranch)
  const [error, setError] = useState<string | null>(null)

  const canSubmit = fullName.trim().length >= 2 && branch.length > 0

  function onSubmit() {
    if (!canSubmit) {
      setError('נא למלא שם מלא ולבחור סניף.')
      return
    }

    try {
      localStorage.setItem(LS_EMPLOYEE_NAME, fullName.trim())
      localStorage.setItem(LS_EMPLOYEE_BRANCH, branch)
    } catch {
      // If storage is blocked, still allow continuing.
    }

    setError(null)
    onSubmitSuccess()
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
          <h2 className="text-2xl font-semibold text-slate-900">פרטי העובד</h2>

          <form
            className="mt-6 space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit()
            }}
          >
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-lg font-medium text-slate-900"
              >
                שם מלא
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  setError(null)
                }}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-xl text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/15"
                placeholder="לדוגמה: ישראל ישראלי"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="branch"
                className="block text-lg font-medium text-slate-900"
              >
                אני מסניף
              </label>
              <select
                id="branch"
                name="branch"
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value)
                  setError(null)
                }}
                className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-4 text-xl text-slate-900 shadow-sm outline-none focus:border-blue-700 focus:ring-4 focus:ring-blue-700/15"
              >
                <option value="" disabled>
                  בחרו סניף…
                </option>
                {BRANCHES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {error ? (
              <p
                className="rounded-xl bg-red-50 px-4 py-3 text-base font-medium text-red-800 ring-1 ring-red-200"
                role="alert"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-xl bg-blue-950 px-4 py-4 text-xl font-semibold text-white shadow-sm hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-900/25"
            >
              כניסה למערכת
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

