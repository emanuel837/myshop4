import { useState } from 'react'
import InfoScreen from './InfoScreen'

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

type TabKey = 'home' | 'report' | 'tracking' | 'info'

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

function IconReport(props: { className?: string }) {
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
      <path d="M7 2h10a2 2 0 0 1 2 2v16l-4-2-3 2-3-2-4 2V4a2 2 0 0 1 2-2Z" />
      <path d="M9 6h6" />
      <path d="M9 10h6" />
    </svg>
  )
}

function IconTracking(props: { className?: string }) {
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
      <path d="M12 22a2 2 0 0 0 2-2c0-1.5-2-3-2-3s-2 1.5-2 3a2 2 0 0 0 2 2Z" />
      <path d="M12 17V3" />
      <path d="M7 8l5-5 5 5" />
    </svg>
  )
}

function IconInfo(props: { className?: string }) {
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
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M12 10v6" />
      <path d="M12 7h.01" />
    </svg>
  )
}

export default function HomeScreen({ onLogout }: HomeScreenProps) {
  const [employeeName] = useState(() => {
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
  const [tab, setTab] = useState<TabKey>('home')
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
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold">
                  היי {firstName || 'עובד'}
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

              <div className="mt-1 text-sm text-white/85">
                <span>סניף: </span>
                <button
                  type="button"
                  onClick={() => setIsBranchModalOpen(true)}
                  className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {branch || 'בחרו סניף'}
                </button>
              </div>
            </div>

            <div className="text-end">
              <h1 className="text-2xl font-semibold tracking-tight">myShop 4</h1>
            </div>
          </div>
        </div>
      </header>

      {tab === 'home' ? (
        <main className="mx-auto max-w-md px-4 pb-24 pt-6">
          <div className="space-y-4">
            <button
              type="button"
              className="w-full rounded-2xl bg-white/10 px-5 py-6 text-lg font-semibold shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              הזמנת פריט
            </button>
            <button
              type="button"
              className="w-full rounded-2xl bg-white/10 px-5 py-6 text-lg font-semibold shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              שליחה למעבדה
            </button>
            <button
              type="button"
              className="w-full rounded-2xl bg-white/10 px-5 py-6 text-lg font-semibold shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              קיבלתי חבילה מכץ
            </button>
          </div>
        </main>
      ) : tab === 'report' ? (
        <InfoScreen title="דיווח" />
      ) : tab === 'tracking' ? (
        <InfoScreen title="מעקב" />
      ) : (
        <InfoScreen title="מידע" />
      )}

      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-blue-950/95 backdrop-blur">
        <div className="mx-auto grid max-w-md grid-cols-4 px-2 py-2">
          <button
            type="button"
            onClick={() => setTab('home')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
              tab === 'home' ? 'text-white' : 'text-white/75 hover:text-white',
            ].join(' ')}
            aria-current={tab === 'home' ? 'page' : undefined}
          >
            <IconHome className="h-5 w-5" />
            <span className="text-xs font-semibold">בית</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('report')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
              tab === 'report' ? 'text-white' : 'text-white/75 hover:text-white',
            ].join(' ')}
            aria-current={tab === 'report' ? 'page' : undefined}
          >
            <IconReport className="h-5 w-5" />
            <span className="text-xs font-semibold">דיווח</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('tracking')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
              tab === 'tracking' ? 'text-white' : 'text-white/75 hover:text-white',
            ].join(' ')}
            aria-current={tab === 'tracking' ? 'page' : undefined}
          >
            <IconTracking className="h-5 w-5" />
            <span className="text-xs font-semibold">מעקב</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('info')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
              tab === 'info' ? 'text-white' : 'text-white/75 hover:text-white',
            ].join(' ')}
            aria-current={tab === 'info' ? 'page' : undefined}
          >
            <IconInfo className="h-5 w-5" />
            <span className="text-xs font-semibold">מידע</span>
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

