type ActionItem = {
  title: string
  subtitle: string
  href: string
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

function IconArrows(props: { className?: string }) {
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

function openExternal(href: string) {
  window.open(href, '_blank', 'noopener,noreferrer')
}

function ActionCard({
  item,
  icon,
}: {
  item: ActionItem
  icon: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={() => openExternal(item.href)}
      className="w-full rounded-3xl bg-white/10 px-5 py-5 text-start shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
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

const ITEMS: ActionItem[] = [
  {
    title: 'מעקב הזמנות מהמחסן',
    subtitle: 'ראה סטטוס הזמנות',
    href: '#',
  },
  {
    title: 'מעקב בדיקת מעבדה',
    subtitle: 'ראה סטטוס תיקונים',
    href: '#',
  },
  {
    title: 'מעקב הזמנות סניף מסניף',
    subtitle: 'ראה סטטוס העברות',
    href: '#',
  },
]

export default function TrackingScreen() {
  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-white">מעקב</h2>

      <div className="mt-4 space-y-3">
        <ActionCard item={ITEMS[0]} icon={<IconBoxes className="h-6 w-6" />} />
        <ActionCard item={ITEMS[1]} icon={<IconWrench className="h-6 w-6" />} />
        <ActionCard item={ITEMS[2]} icon={<IconArrows className="h-6 w-6" />} />
      </div>
    </main>
  )
}

