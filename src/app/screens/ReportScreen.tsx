import { getAirtableLink } from '../../lib/links'

type ActionItem = {
  title: string
  subtitle: string
  action:
    | 'orderItem'
    | 'orderEquipment'
    | 'receivedPackage'
    | 'pickupOrder'
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
  return (
    <button
      type="button"
      onClick={() => {
        const href = getAirtableLink(item.action, branch)
        if (!href) {
          onUnavailable('הפעולה אינה זמינה עבור הסניף שלך')
          return
        }
        window.open(href, '_blank', 'noopener,noreferrer')
      }}
      className="w-full rounded-3xl bg-white/10 px-5 py-5 text-start shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {/* Force LTR row so "left" is visually left even in RTL UI */}
      <div className="flex flex-row items-center gap-4">
        <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-white/10 text-white">
          {icon}
        </div>

        <div className="min-w-0 flex-1 text-right">
          <div className="text-lg font-extrabold text-white">{item.title}</div>
          <div className="mt-1 text-sm font-medium text-white/75">
            {item.subtitle}
          </div>
        </div>

        <div className="flex-none text-white/85" aria-hidden="true">
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
    <section className="rounded-3xl bg-white/10 px-5 py-5 shadow-sm ring-1 ring-white/10">
      <h3 className="text-lg font-extrabold text-white">דיווח על חוסר</h3>

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
          className="min-h-20 rounded-2xl bg-white px-3 py-4 text-center text-base font-extrabold text-blue-950 shadow-sm ring-1 ring-white/30 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
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
          className="grid min-h-20 place-items-center rounded-2xl bg-white px-3 py-4 text-center text-base font-extrabold text-blue-950 shadow-sm ring-1 ring-white/30 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        >
          הזמנות סניפים
        </button>
      </div>
    </section>
  )
}

const ITEMS: ActionItem[] = [
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
    title: 'הזמנת ציוד',
    subtitle: 'הזמן ציוד לסניף',
    action: 'orderEquipment',
  },
]

type ReportScreenProps = {
  branch: string
  onUnavailable: (message: string | null) => void
}

export default function ReportScreen({ branch, onUnavailable }: ReportScreenProps) {
  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-white">דיווח</h2>

      <div className="mt-4 space-y-3">
        <MissingReportCard
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
        />
        <ActionCard
          item={ITEMS[0]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={<IconShoppingBag className="h-6 w-6" />}
        />
        <ActionCard
          item={ITEMS[1]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={<IconPackage className="h-6 w-6" />}
        />
        <ActionCard
          item={ITEMS[2]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={<IconTruck className="h-6 w-6" />}
        />
        <ActionCard
          item={ITEMS[3]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={<IconShoppingCart className="h-6 w-6" />}
        />
      </div>
    </main>
  )
}

