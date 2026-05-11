import { useMemo, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { getBranchDisplayName } from '../i18n/branchNames'

type EmployeeDetailsScreenProps = {
  onSubmitSuccess: () => void
}

const BRANCHES = [
  'ביאליק 4 - רמת גן',
  'שטיינר - אבן גבירול 46 תל אביב',
  'קניון הזהב - ראשון לציון',
  'רוטשילד 61 - כפר סבא',
  'קניון התחנה המרכזית - ירושלים',
  'קניון הקריון - קריית ביאליק',
  'אסף סנטר - באר יעקב',
  'קניון אורות - אור עקיבא',
  'קניון מרום - רמת גן',
  'עופר סנטר - נוף הגליל',
  'חוצות המפרץ - חיפה אאוטלט',
  'קניון ביג פאשן - בת ים',
  'קניותר - נס ציונה',
  'קניון השרון - נתניה',
] as const

const LS_EMPLOYEE_NAME = 'myshop4.employee.name'
const LS_EMPLOYEE_BRANCH = 'myshop4.employee.branch'

export default function EmployeeDetailsScreen({
  onSubmitSuccess,
}: EmployeeDetailsScreenProps) {
  const { t, lang } = useI18n()
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
      setError(t('employeeDetails.errorFillAll'))
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
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f4f8]">
      <header className="border-b border-[#233667]/15 bg-white/95 text-[#233667] shadow-sm shadow-[#233667]/5">
        <div className="mx-auto max-w-md px-4 py-6">
          <h1 className="text-3xl font-semibold tracking-tight">myShop 4</h1>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-8">
        <section className="rounded-[28px] border border-[#233667]/15 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl font-extrabold text-[#233667]">
            {t('employeeDetails.title')}
          </h2>

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
                {t('employeeDetails.fullName')}
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
                className="w-full rounded-2xl border border-[#233667]/15 bg-white px-4 py-4 text-xl text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-[#233667] focus:ring-4 focus:ring-[#233667]/10"
                placeholder={t('employeeDetails.namePlaceholder')}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="branch"
                className="block text-lg font-medium text-slate-900"
              >
                {t('employeeDetails.myBranch')}
              </label>
              <select
                id="branch"
                name="branch"
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value)
                  setError(null)
                }}
                className="w-full appearance-none rounded-2xl border border-[#233667]/15 bg-white px-4 py-4 text-xl text-slate-900 shadow-sm outline-none focus:border-[#233667] focus:ring-4 focus:ring-[#233667]/10"
              >
                <option value="" disabled>
                  {t('employeeDetails.branchPlaceholder')}
                </option>
                {BRANCHES.map((b) => (
                  <option key={b} value={b}>
                    {getBranchDisplayName(b, lang)}
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
              className="w-full rounded-2xl bg-[#233667] px-4 py-4 text-xl font-extrabold text-white shadow-lg shadow-[#233667]/20 hover:bg-[#1b2a50] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#233667]/20"
            >
              {t('employeeDetails.enterSystem')}
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

