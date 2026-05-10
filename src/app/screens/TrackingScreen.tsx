import { getAirtableLink } from '../../lib/links'

type ActionItem = {
  title: string
  subtitle: string
  action: 'trackOrders' | 'trackLab' | 'receivedPackage'
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

function IconBoxes(props: { className?: string }) {
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
      <path d="M3 13h18" />
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
          item.action === 'trackOrders'
            ? getAirtableLink('trackOrders', branch)
            : item.action === 'trackLab'
              ? getAirtableLink('trackLab', branch)
              : getAirtableLink('receivedPackage', branch)
        if (!href) {
          onUnavailable('הפעולה אינה זמינה עבור הסניף שלך')
          return
        }
        window.open(href, '_blank', 'noopener,noreferrer')
      }}
      className="w-full rounded-[24px] border border-[#233667]/15 bg-white px-5 py-5 text-start shadow-[0_2px_8px_rgba(35,54,103,0.08)] transition-transform duration-100 hover:border-[#233667]/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#233667]/15"
    >
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

        <div className="flex-none text-[#233667]" aria-hidden="true">
          <IconArrowRight className="h-5 w-5" />
        </div>
      </div>
    </button>
  )
}

const ITEMS: ActionItem[] = [
  {
    title: 'מעקב אחר הזמנות',
    subtitle: 'ראה סטטוס הזמנות',
    action: 'trackOrders',
  },
  {
    title: 'מעקב בדיקת מעבדה',
    subtitle: 'ראה סטטוס תיקונים',
    action: 'trackLab',
  },
  {
    title: 'קבלת חבילה מכץ',
    subtitle: 'אשר קבלת חבילה',
    action: 'receivedPackage',
  },
]

function getActionIconTone(action: ActionItem['action']) {
  switch (action) {
    case 'trackLab':
      return 'bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-600/25 ring-purple-300'
    case 'receivedPackage':
      return 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/25 ring-emerald-300'
    case 'trackOrders':
      return 'bg-gradient-to-br from-[#233667] to-[#1b2a50] text-white shadow-lg shadow-[#233667]/25 ring-[#233667]/30'
  }
}

type TrackingScreenProps = {
  branch: string
  onUnavailable: (message: string | null) => void
}

export default function TrackingScreen({
  branch,
  onUnavailable,
}: TrackingScreenProps) {
  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-[#233667]">מעקב</h2>

      <div className="mt-4 space-y-3">
        <ActionCard
          item={ITEMS[0]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={<IconBoxes className="h-6 w-6" />}
        />
        <ActionCard
          item={ITEMS[1]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={<IconWrench className="h-6 w-6" />}
        />
        <ActionCard
          item={ITEMS[2]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={<IconBoxes className="h-6 w-6" />}
        />
      </div>
    </main>
  )
}

