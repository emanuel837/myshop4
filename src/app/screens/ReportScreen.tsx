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

function IconClipboard(props: { className?: string }) {
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
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" />
      <path d="M9 3h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V3Z" />
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

const ITEMS: ActionItem[] = [
  {
    title: 'דיווח על חוסר',
    subtitle: 'דווח על פריט חסר במלאי',
    href: '#',
  },
  {
    title: 'הזמנת פריט',
    subtitle: 'הזמן פריט מהמחסן או מסניף',
    href: '#',
  },
  {
    title: 'קבלת חבילה מכץ',
    subtitle: 'תעד קבלת משלוח',
    href: '#',
  },
  {
    title: 'הזמנת איסוף',
    subtitle: 'בקש איסוף חבילה',
    href: '#',
  },
]

export default function ReportScreen() {
  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-white">דיווח</h2>

      <div className="mt-4 space-y-3">
        <ActionCard item={ITEMS[0]} icon={<IconClipboard className="h-6 w-6" />} />
        <ActionCard item={ITEMS[1]} icon={<IconShoppingBag className="h-6 w-6" />} />
        <ActionCard item={ITEMS[2]} icon={<IconPackage className="h-6 w-6" />} />
        <ActionCard item={ITEMS[3]} icon={<IconTruck className="h-6 w-6" />} />
      </div>
    </main>
  )
}

