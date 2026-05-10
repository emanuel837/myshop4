import { useState } from 'react'
import { getAirtableLink, getLabFormUrl } from '../../lib/links'

type ActionItem = {
  title: string
  subtitle: string
  action:
    | 'orderItem'
    | 'orderEquipment'
    | 'insoleProductionForm'
    | 'branchVisibilityPhoto'
    | 'homeDelivery'
    | 'checkPhoto'
    | 'branchIssue'
    | 'hotModel'
    | 'receivedPackage'
    | 'pickupOrder'
    | 'sendLab'
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

function IconChevronDown(props: { className?: string }) {
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
      <path d="m6 9 6 6 6-6" />
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
      <path d="M6 8h12l-1 13H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  )
}

function IconShoppingCart(props: { className?: string }) {
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
      <path d="M6 6h15l-2 8H8L6 6Z" />
      <path d="M6 6 5.3 3H3" />
      <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  )
}

function IconCreditCard(props: { className?: string }) {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </svg>
  )
}

function IconAlert(props: { className?: string }) {
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
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </svg>
  )
}

function IconFire(props: { className?: string }) {
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
      <path d="M12 22c4 0 7-3 7-7 0-3-2-5.5-4-7 .2 2-1 3.5-2.2 4.2C13.2 8.7 11.2 5.3 8 3c.4 4-3 6.2-3 11 0 4.5 3 8 7 8Z" />
      <path d="M10 18c0-1.7 1.3-2.7 2.6-3.7.1 1.3.8 2.1 1.4 2.7 0 1.7-1.2 3-2.7 3A2.8 2.8 0 0 1 10 18Z" />
    </svg>
  )
}

function IconCamera(props: { className?: string }) {
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
      <path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3h5Z" />
      <path d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
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
      <path d="M9 21v-7h6v7" />
    </svg>
  )
}

function IconFileText(props: { className?: string }) {
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
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
      <path d="M9 9h1" />
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

function ActionCard({
  item,
  icon,
  branch,
  onUnavailable,
}: {
  item: ActionItem
  icon: React.ReactNode
  branch: string
  onUnavailable: (message: string) => void
}) {
  const iconTone = getActionIconTone(item.action)

  return (
    <button
      type="button"
      onClick={() => {
        const href =
          item.action === 'sendLab'
            ? getLabFormUrl(branch)
            : getAirtableLink(item.action, branch)
        if (!href) {
          onUnavailable('הפעולה אינה זמינה עבור הסניף שלך')
          return
        }
        window.open(href, '_blank', 'noopener,noreferrer')
      }}
      className="w-full rounded-[24px] border border-blue-100 bg-white px-5 py-5 text-start shadow-[0_12px_28px_rgba(15,23,42,0.07)] hover:border-blue-200 hover:shadow-[0_16px_34px_rgba(37,99,235,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/15"
    >
      {/* Force LTR row so "left" is visually left even in RTL UI */}
      <div className="flex flex-row items-center gap-4">
        <div className={`grid h-12 w-12 flex-none place-items-center rounded-2xl ring-1 ${iconTone}`}>
          {icon}
        </div>

        <div className="min-w-0 flex-1 text-right">
          <div className="text-lg font-extrabold text-slate-950">{item.title}</div>
          <div className="mt-1 text-sm font-medium text-slate-500">
            {item.subtitle}
          </div>
        </div>

        <div className="flex-none text-blue-500" aria-hidden="true">
          <IconArrowRight className="h-5 w-5" />
        </div>
      </div>
    </button>
  )
}

function MissingReportCard({
  branch,
  onUnavailable,
}: {
  branch: string
  onUnavailable: (message: string) => void
}) {
  return (
    <section className="rounded-[24px] border border-amber-200 bg-[#FFF9C4] px-5 py-5 shadow-[0_14px_32px_rgba(217,119,6,0.14)]">
      <div className="flex flex-row items-center gap-3">
        <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/25 ring-1 ring-amber-300">
          <IconAlert className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-extrabold text-slate-950">דיווח על חוסר</h3>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            const href = getAirtableLink('reportMissingOnline', branch)
            if (!href) {
              onUnavailable('הפעולה אינה זמינה עבור הסניף שלך')
              return
            }
            window.open(href, '_blank', 'noopener,noreferrer')
          }}
          className="min-h-20 rounded-2xl bg-white px-3 py-4 text-center text-base font-extrabold text-amber-900 shadow-sm ring-1 ring-amber-200 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/15"
        >
          הזמנות אתר
        </button>

        <button
          type="button"
          onClick={() => {
            const href = getAirtableLink('reportMissingOffline', branch)
            if (!href) {
              onUnavailable('הפעולה אינה זמינה עבור הסניף שלך')
              return
            }
            window.open(href, '_blank', 'noopener,noreferrer')
          }}
          className="grid min-h-20 place-items-center rounded-2xl bg-white px-3 py-4 text-center text-base font-extrabold text-amber-900 shadow-sm ring-1 ring-amber-200 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/15"
        >
          הזמנות סניפים
        </button>
      </div>
    </section>
  )
}

const MAIN_ITEMS: ActionItem[] = [
  {
    title: 'הזמנת פריט',
    subtitle: 'הזמן פריט מהמחסן או מסניף',
    action: 'orderItem',
  },
  {
    title: 'קבלת חבילה מכץ',
    subtitle: 'תעד קבלת משלוח',
    action: 'receivedPackage',
  },
  {
    title: 'הזמנת איסוף',
    subtitle: 'בקש איסוף חבילה',
    action: 'pickupOrder',
  },
  {
    title: 'שליחה למעבדה',
    subtitle: 'שלח פריט לבדיקה או תיקון',
    action: 'sendLab',
  },
  {
    title: 'דגם חם 🔥',
    subtitle: 'דווח על מוצר עם ביקוש גבוה',
    action: 'hotModel',
  },
]

const ADDITIONAL_ITEMS: ActionItem[] = [
  {
    title: "צילום צ'ק",
    subtitle: "שלח צילום של צ'ק",
    action: 'checkPhoto',
  },
  {
    title: 'צילום נראות הסניף',
    subtitle: 'כל יום ראשון עד 12:00',
    action: 'branchVisibilityPhoto',
  },
  {
    title: 'הזנת טופס ייצור מדרסים',
    subtitle: 'הזן טופס ייצור מדרסים ללקוח',
    action: 'insoleProductionForm',
  },
  {
    title: 'הזמנת ציוד',
    subtitle: 'הזמן ציוד לסניף',
    action: 'orderEquipment',
  },
  {
    title: 'משלוח עד הבית',
    subtitle: 'שלח הזמנה עד הבית של הלקוח',
    action: 'homeDelivery',
  },
  {
    title: 'דיווח על תקלה',
    subtitle: 'דווח על תקלה בסניף',
    action: 'branchIssue',
  },
]

function getActionIconTone(action: ActionItem['action']) {
  switch (action) {
    case 'receivedPackage':
      return 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/25 ring-emerald-300'
    case 'pickupOrder':
      return 'bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg shadow-orange-500/25 ring-orange-300'
    case 'homeDelivery':
      return 'bg-emerald-50 text-emerald-600 ring-emerald-100'
    case 'sendLab':
      return 'bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-600/25 ring-purple-300'
    case 'branchIssue':
      return 'bg-rose-50 text-rose-900 ring-rose-100'
    case 'orderEquipment':
    case 'insoleProductionForm':
    case 'branchVisibilityPhoto':
    case 'checkPhoto':
      return 'bg-slate-100 text-slate-600 ring-slate-200'
    case 'orderItem':
      return 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25 ring-blue-300'
    case 'hotModel':
      return 'bg-blue-50 text-blue-700 ring-blue-100'
  }
}

function getActionIcon(action: ActionItem['action']) {
  switch (action) {
    case 'orderItem':
      return <IconShoppingBag className="h-6 w-6" />
    case 'receivedPackage':
      return <IconPackage className="h-6 w-6" />
    case 'pickupOrder':
      return <IconTruck className="h-6 w-6" />
    case 'sendLab':
      return <IconWrench className="h-6 w-6" />
    case 'orderEquipment':
      return <IconShoppingCart className="h-6 w-6" />
    case 'insoleProductionForm':
      return <IconFileText className="h-6 w-6" />
    case 'branchVisibilityPhoto':
      return <IconCamera className="h-6 w-6" />
    case 'homeDelivery':
      return <IconHome className="h-6 w-6" />
    case 'checkPhoto':
      return <IconCreditCard className="h-6 w-6" />
    case 'branchIssue':
      return <IconAlert className="h-6 w-6" />
    case 'hotModel':
      return <IconFire className="h-6 w-6" />
  }
}

function AdditionalReportsModal({
  branch,
  onClose,
  onUnavailable,
}: {
  branch: string
  onClose: () => void
  onUnavailable: (message: string) => void
}) {
  return (
    <div
      className="fixed inset-0 z-20"
      role="dialog"
      aria-modal="true"
      aria-label="דיווחים נוספים"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/40"
        onClick={onClose}
        aria-label="סגירה"
      />
      <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-[28px] bg-white p-4 text-slate-950 shadow-2xl ring-1 ring-blue-100">
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-blue-100" />
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">דיווחים נוספים</h3>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xl font-semibold leading-none text-slate-600 hover:bg-slate-200 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/30"
            onClick={onClose}
            aria-label="סגירת דיווחים נוספים"
          >
            ×
          </button>
        </div>

        <div className="mt-3 max-h-[65vh] space-y-3 overflow-auto pb-2">
          {ADDITIONAL_ITEMS.map((item) => (
            <ActionCard
              key={item.action}
              item={item}
              branch={branch}
              onUnavailable={(message) => {
                onClose()
                onUnavailable(message)
              }}
              icon={getActionIcon(item.action)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

type ReportScreenProps = {
  branch: string
  onUnavailable: (message: string | null) => void
}

export default function ReportScreen({ branch, onUnavailable }: ReportScreenProps) {
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false)

  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-blue-950">דיווח</h2>

      <div className="mt-4 space-y-3">
        <MissingReportCard
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
        />
        <ActionCard
          item={MAIN_ITEMS[0]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[0].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[1]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[1].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[2]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[2].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[3]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[3].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[4]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[4].action)}
        />
        <button
          type="button"
          onClick={() => setIsAdditionalOpen(true)}
          className="w-full rounded-[24px] border border-blue-100 bg-white px-5 py-5 text-start shadow-[0_12px_28px_rgba(15,23,42,0.07)] hover:border-blue-200 hover:shadow-[0_16px_34px_rgba(37,99,235,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/15"
        >
          <div className="flex flex-row items-center gap-4">
            <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-700/20 ring-1 ring-slate-400">
              <IconFileText className="h-6 w-6" />
            </div>

            <div className="min-w-0 flex-1 text-right">
              <div className="text-lg font-extrabold text-slate-950">
                דיווחים נוספים
              </div>
              <div className="mt-1 text-sm font-medium text-slate-500">
                פתיחת פעולות נוספות
              </div>
            </div>

            <div className="flex-none text-slate-500" aria-hidden="true">
              <IconChevronDown className="h-5 w-5" />
            </div>
          </div>
        </button>
      </div>

      {isAdditionalOpen ? (
        <AdditionalReportsModal
          branch={branch}
          onClose={() => setIsAdditionalOpen(false)}
          onUnavailable={(m) => onUnavailable(m)}
        />
      ) : null}
    </main>
  )
}

