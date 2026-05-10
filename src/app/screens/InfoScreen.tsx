type InfoScreenProps = {
  employeeName: string
  branch: string
  onChangeBranch: () => void
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

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.07)]">
      <h3 className="text-lg font-extrabold text-blue-950">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-blue-100">
      <span className="text-sm font-medium text-slate-500">{label}</span>
      <span className="min-w-0 text-left text-base font-extrabold text-blue-950">
        {value || 'לא הוגדר'}
      </span>
    </div>
  )
}

function LinkRow({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target={href === '#' ? undefined : '_blank'}
      rel={href === '#' ? undefined : 'noopener noreferrer'}
      className="flex w-full flex-row items-center gap-4 rounded-2xl bg-slate-50 px-4 py-4 text-start ring-1 ring-blue-100 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
    >
      <span className="min-w-0 flex-1 text-base font-extrabold text-blue-950">
        {label}
      </span>
      <span className="flex-none text-blue-500" aria-hidden="true">
        <IconArrowRight className="h-5 w-5" />
      </span>
    </a>
  )
}

export default function InfoScreen({
  employeeName,
  branch,
  onChangeBranch,
}: InfoScreenProps) {
  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-blue-950">מידע</h2>

      <div className="mt-4 space-y-3">
        <SectionCard title="פרטי העובד שלי">
          <div className="space-y-3">
            <DetailRow label="שם העובד" value={employeeName} />
            <DetailRow label="סניף נוכחי" value={branch} />
            <button
              type="button"
              onClick={onChangeBranch}
              className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-base font-extrabold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
            >
              החלפת סניף
            </button>
          </div>
        </SectionCard>

        <SectionCard title="קישורים שימושיים">
          <div className="space-y-3">
            <LinkRow
              label="אתר הלב הכחול"
              href="https://www.blueheart.co.il"
            />
          </div>
        </SectionCard>

        <SectionCard title="גרסה">
          <div className="rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-blue-100">
            <p className="text-base font-extrabold text-blue-950">
              myShop 4 | גרסה 4.0
            </p>
            <p className="mt-1 text-sm font-medium text-slate-500">
              פותח עבור רשת הלב הכחול
            </p>
          </div>
        </SectionCard>
      </div>
    </main>
  )
}

