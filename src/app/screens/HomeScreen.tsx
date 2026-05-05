import { useState } from 'react'

type HomeScreenProps = {
  onLogout: () => void
}

const LS_EMPLOYEE_NAME = 'myshop4.employee.name'
const LS_EMPLOYEE_BRANCH = 'myshop4.employee.branch'

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

function getFirstName(fullName: string) {
  return fullName.trim().split(/\s+/).filter(Boolean)[0] ?? ''
}

function IconArrowRight(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  )
}

function IconHome(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  )
}

function IconTag(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.6 13.3 13.3 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
      <path d="M7.5 7.5h.01" />
    </svg>
  )
}

function IconTruck(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h2" />
      <path d="M14 17h1a3 3 0 1 0 0-6h-1" />
      <path d="M18 17h2v-5l-3-3h-3" />
      <path d="M6.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M17.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  )
}

function IconHeadphones(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v6a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Z" />
      <path d="M20 12v6a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z" />
    </svg>
  )
}

function IconUsers(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconTransfer(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h14l-4-4" />
      <path d="M17 17H3l4 4" />
      <path d="M21 7v6" />
      <path d="M3 17v-6" />
    </svg>
  )
}

function IconBox(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8V21H3V8" />
      <path d="M3 8l9-5 9 5" />
      <path d="M12 3v18" />
    </svg>
  )
}

function IconPackage(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.5 9.4 7.5 4.2" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="M3.3 7.7 12 12.8l8.7-5.1" />
      <path d="M12 22V12.8" />
    </svg>
  )
}

function IconWrench(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-3-3 2.7-2.7Z" />
    </svg>
  )
}

export default function HomeScreen({ onLogout }: HomeScreenProps) {
  const [employeeName, setEmployeeName] = useState(() => {
    try {
      return localStorage.getItem(LS_EMPLOYEE_NAME) ?? ''
    } catch {
      return ''
    }
  })

  const [branch, setBranch] = useState(() => {
    try {
      const saved = localStorage.getItem(LS_EMPLOYEE_BRANCH) ?? ''
      return saved && BRANCHES.includes(saved as (typeof BRANCHES)[number])
        ? saved
        : saved
    } catch {
      return ''
    }
  })

  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false)
  const firstName = getFirstName(employeeName)

  function persistBranch(nextBranch: string) {
    setBranch(nextBranch)
    try {
      localStorage.setItem(LS_EMPLOYEE_BRANCH, nextBranch)
    } catch {
      // ignore
    }
  }

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <header className="sticky top-0 z-10 bg-blue-950">
        <div className="mx-auto max-w-md px-4 py-4">
          <div className="flex items-start justify-between">
            <div className="text-start">
              <button
                type="button"
                onClick={() => setIsBranchModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg px-1 py-1 text-sm font-medium text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <span className="truncate">{branch || 'בחרו סניף'}</span>
              </button>
            </div>

            <div className="text-end">
              <h1 className="text-2xl font-semibold tracking-tight">myShop 4</h1>
              <div className="mt-2 flex items-center justify-end gap-2">
                <span className="text-sm font-semibold text-white/90">
                  {firstName || 'עובד'}
                </span>
                <button
                  type="button"
                  onClick={onLogout}
                  className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  aria-label="התנתקות"
                  title="התנתקות"
                >
                  <IconArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 pb-24 pt-5">
        <section>
          <h2 className="text-lg font-semibold text-white">פעולות מהירות</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-2xl bg-white/10 p-4 text-start shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">
                  הזמנה מסניף אחר
                </span>
                <IconTransfer className="h-6 w-6 text-white/90" />
              </div>
            </button>

            <button
              type="button"
              className="rounded-2xl bg-white/10 p-4 text-start shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">הזמנה מהמחסן</span>
                <IconBox className="h-6 w-6 text-white/90" />
              </div>
            </button>

            <button
              type="button"
              className="rounded-2xl bg-white/10 p-4 text-start shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">קבלת חבילה מכץ</span>
                <IconPackage className="h-6 w-6 text-white/90" />
              </div>
            </button>

            <button
              type="button"
              className="rounded-2xl bg-white/10 p-4 text-start shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">טופס מעבדה</span>
                <IconWrench className="h-6 w-6 text-white/90" />
              </div>
            </button>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-white">טבלאות ונתונים</h2>
          <div className="mt-4 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
            {[
              'קמפיינים פעילים',
              'הזמנות מהמחסנים',
              'סטטוס מעבדה',
            ].map((label, idx, arr) => (
              <button
                key={label}
                type="button"
                className={[
                  'flex w-full items-center justify-between px-4 py-4 text-start hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
                  idx !== arr.length - 1 ? 'border-b border-white/10' : '',
                ].join(' ')}
              >
                <span className="text-base font-semibold">{label}</span>
                <span className="text-white/70" aria-hidden="true">
                  ›
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-blue-950/95 backdrop-blur">
        <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-current="page"
          >
            <IconHome className="h-5 w-5" />
            <span className="text-xs font-semibold">בית</span>
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <IconTag className="h-5 w-5" />
            <span className="text-xs font-semibold">שיווק</span>
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <IconTruck className="h-5 w-5" />
            <span className="text-xs font-semibold">תפעול</span>
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <IconHeadphones className="h-5 w-5" />
            <span className="text-xs font-semibold">שירות</span>
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <IconUsers className="h-5 w-5" />
            <span className="text-xs font-semibold">סניפים</span>
          </button>
        </div>
      </nav>

      {isBranchModalOpen ? (
        <div
          className="fixed inset-0 z-20"
          role="dialog"
          aria-modal="true"
          aria-label="בחירת סניף"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsBranchModalOpen(false)}
            aria-label="סגירה"
          />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-3xl bg-blue-950 p-4 shadow-2xl ring-1 ring-white/10">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/20" />
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">בחירת סניף</h3>
              <button
                type="button"
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                onClick={() => setIsBranchModalOpen(false)}
              >
                סגור
              </button>
            </div>

            <div className="mt-3 max-h-[55vh] overflow-auto rounded-2xl bg-white/10 ring-1 ring-white/10">
              {BRANCHES.map((b) => {
                const active = b === branch
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => {
                      persistBranch(b)
                      setIsBranchModalOpen(false)
                    }}
                    className={[
                      'flex w-full items-center justify-between px-4 py-4 text-start hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
                      active ? 'bg-white/10' : '',
                    ].join(' ')}
                  >
                    <span className="text-sm font-semibold">{b}</span>
                    {active ? (
                      <span className="text-xs font-semibold text-white/80">
                        נבחר
                      </span>
                    ) : null}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

