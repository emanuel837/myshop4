import { useState } from 'react'
import BranchesScreen from './BranchesScreen'
import InfoScreen from './InfoScreen'
import ReportScreen from './ReportScreen'
import TrackingScreen from './TrackingScreen'
import { getAirtableLink, getLabFormUrl } from '../../lib/links'

type HomeScreenProps = {
  onLogout: () => void
}

const LS_EMPLOYEE_NAME = 'myshop4.employee.name'
const LS_EMPLOYEE_BRANCH = 'myshop4.employee.branch'

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

type TabKey = 'home' | 'report' | 'tracking' | 'branches' | 'info'

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

function IconShoppingBag(props: { className?: string }) {
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
      <path d="M6.5 8.5h11L17 21H7L6.5 8.5Z" />
      <path d="M9 10V8.8a3 3 0 0 1 6 0V10" />
      <path d="M6.8 8.5 8.8 5.7A2 2 0 0 1 10.4 5h3.2a2 2 0 0 1 1.6.7l2 2.8" />
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

function IconBranches(props: { className?: string }) {
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
      <path d="M8 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" />
      <path d="M4 21h16" />
      <path d="M9 7h1" />
      <path d="M14 7h1" />
      <path d="M9 11h1" />
      <path d="M14 11h1" />
      <path d="M9 15h1" />
      <path d="M14 15h1" />
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
  const [unavailableMessage, setUnavailableMessage] = useState<string | null>(
    null,
  )
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/70 to-white text-slate-950">
      <header className="sticky top-0 z-10 border-b border-blue-100 bg-white/95 shadow-sm shadow-blue-950/5 backdrop-blur">
        <div className="mx-auto max-w-md px-4 py-3">
          <div className="flex items-start justify-between">
            <div className="text-start">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold">
                  היי {firstName || 'עובד'}
                </span>
                <button
                  type="button"
                  onClick={onLogout}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-50 p-2 text-blue-700 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                  aria-label="התנתקות"
                  title="התנתקות"
                >
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-1 text-xs text-slate-500">
                <span>סניף: </span>
                <button
                  type="button"
                  onClick={() => setIsBranchModalOpen(true)}
                  className="font-normal text-slate-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-700 hover:decoration-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                >
                  {branch || 'בחרו סניף'}
                </button>
              </div>
            </div>

            <div className="text-end">
              <h1 className="text-xl font-semibold tracking-tight">myShop 4</h1>
            </div>
          </div>
        </div>
      </header>

      {tab === 'home' ? (
        <main className="mx-auto max-w-md px-4 pb-24 pt-4">
          <div className="space-y-3">
            {unavailableMessage ? (
              <p
                role="alert"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 ring-1 ring-blue-100"
              >
                {unavailableMessage}
              </p>
            ) : null}
            <button
              type="button"
              onClick={() => {
                const href = getAirtableLink('orderItem', branch)
                if (!href) {
                  setUnavailableMessage('הפעולה אינה זמינה עבור הסניף שלך')
                  return
                }
                setUnavailableMessage(null)
                window.open(href, '_blank', 'noopener,noreferrer')
              }}
              className="w-full rounded-[28px] border border-blue-100 bg-white px-5 py-5 text-blue-950 shadow-[0_14px_35px_rgba(15,23,42,0.08)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/15"
            >
              <div className="flex flex-col items-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-700 shadow-lg shadow-blue-600/10 ring-1 ring-blue-100">
                  <IconShoppingBag className="h-7 w-7" />
                </span>
                <span className="mt-3 text-xl font-extrabold">הזמנת פריט</span>
                <span className="mt-1.5 text-sm font-medium text-blue-950/80">
                  להזמין פריט עבור לקוח במהירות ובקלות
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                const href = getLabFormUrl(branch)
                if (!href) {
                  setUnavailableMessage('הפעולה אינה זמינה עבור הסניף שלך')
                  return
                }
                setUnavailableMessage(null)
                window.open(href, '_blank', 'noopener,noreferrer')
              }}
              className="w-full rounded-[28px] border border-purple-100 bg-white px-5 py-5 text-blue-950 shadow-[0_14px_35px_rgba(15,23,42,0.08)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/15"
            >
              <div className="flex flex-col items-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-50 text-purple-600 shadow-lg shadow-purple-600/10 ring-1 ring-purple-100">
                  <IconWrench className="h-7 w-7" />
                </span>
                <span className="mt-3 text-xl font-extrabold">שליחה למעבדה</span>
                <span className="mt-1.5 text-sm font-medium text-blue-950/80">
                  לפתוח פנייה ולשלוח פריט לתיקון / בדיקה
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                const href = getAirtableLink('receivedPackage', branch)
                if (!href) {
                  setUnavailableMessage('הפעולה אינה זמינה עבור הסניף שלך')
                  return
                }
                setUnavailableMessage(null)
                window.open(href, '_blank', 'noopener,noreferrer')
              }}
              className="w-full rounded-[28px] border border-blue-100 bg-white px-5 py-5 text-blue-950 shadow-[0_14px_35px_rgba(15,23,42,0.08)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/15"
            >
              <div className="flex flex-col items-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/25">
                  <IconPackage className="h-7 w-7" />
                </span>
                <span className="mt-3 text-xl font-extrabold">
                  קיבלתי חבילה מכץ
                </span>
                <span className="mt-1.5 text-sm font-medium text-blue-950/80">
                  לעדכן שהחבילה הגיעה ולסיים את הטיפול
                </span>
              </div>
            </button>
          </div>
        </main>
      ) : tab === 'report' ? (
        <ReportScreen branch={branch} onUnavailable={setUnavailableMessage} />
      ) : tab === 'tracking' ? (
        <TrackingScreen branch={branch} onUnavailable={setUnavailableMessage} />
      ) : tab === 'branches' ? (
        <BranchesScreen />
      ) : (
        <InfoScreen
          employeeName={employeeName}
          branch={branch}
          onChangeBranch={() => setIsBranchModalOpen(true)}
        />
      )}

      <nav className="fixed bottom-0 left-0 right-0 border-t border-blue-100 bg-white/95 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mx-auto grid max-w-md grid-cols-5 px-2 py-2">
          <button
            type="button"
            onClick={() => setTab('home')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30',
              tab === 'home'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'text-slate-500 hover:text-blue-700',
            ].join(' ')}
            aria-current={tab === 'home' ? 'page' : undefined}
          >
            <IconHome className="h-6 w-6" />
            <span className="text-xs font-semibold">בית</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('report')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30',
              tab === 'report'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'text-slate-500 hover:text-blue-700',
            ].join(' ')}
            aria-current={tab === 'report' ? 'page' : undefined}
          >
            <IconReport className="h-6 w-6" />
            <span className="text-xs font-semibold">דיווח</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('tracking')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30',
              tab === 'tracking'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'text-slate-500 hover:text-blue-700',
            ].join(' ')}
            aria-current={tab === 'tracking' ? 'page' : undefined}
          >
            <IconTracking className="h-6 w-6" />
            <span className="text-xs font-semibold">מעקב</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('info')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30',
              tab === 'info'
                ? 'bg-slate-700 text-white shadow-lg shadow-slate-700/20'
                : 'text-slate-500 hover:text-slate-700',
            ].join(' ')}
            aria-current={tab === 'info' ? 'page' : undefined}
          >
            <IconInfo className="h-6 w-6" />
            <span className="text-xs font-semibold">מידע</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('branches')}
            className={[
              'flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30',
              tab === 'branches'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'text-slate-500 hover:text-blue-700',
            ].join(' ')}
            aria-current={tab === 'branches' ? 'page' : undefined}
          >
            <IconBranches className="h-6 w-6" />
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
            className="absolute inset-0 bg-slate-950/40"
            onClick={() => setIsBranchModalOpen(false)}
            aria-label="סגירה"
          />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-[28px] bg-white p-4 text-slate-950 shadow-2xl ring-1 ring-blue-100">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-blue-100" />
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">בחירת סניף</h3>
              <button
                type="button"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
                onClick={() => setIsBranchModalOpen(false)}
              >
                סגור
              </button>
            </div>

            <div className="mt-3 max-h-[55vh] overflow-auto rounded-2xl bg-slate-50 ring-1 ring-blue-100">
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
                      'flex w-full items-center justify-between px-4 py-4 text-start hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30',
                      active ? 'bg-blue-50 text-blue-700' : '',
                    ].join(' ')}
                  >
                    <span className="text-sm font-semibold">{b}</span>
                    {active ? (
                        <span className="text-xs font-semibold text-blue-700">
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

