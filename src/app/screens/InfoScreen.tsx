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
    <section className="rounded-3xl bg-white/10 p-5 shadow-sm ring-1 ring-white/10">
      <h3 className="text-lg font-extrabold text-white">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3">
      <span className="text-sm font-medium text-white/75">{label}</span>
      <span className="min-w-0 text-left text-base font-extrabold text-white">
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
      className="flex w-full flex-row items-center gap-4 rounded-2xl bg-white/10 px-4 py-4 text-start hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      <span className="min-w-0 flex-1 text-base font-extrabold text-white">
        {label}
      </span>
      <span className="flex-none text-white/85" aria-hidden="true">
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
      <h2 className="text-xl font-extrabold text-white">מידע</h2>

      <div className="mt-4 space-y-3">
        <SectionCard title="פרטי העובד שלי">
          <div className="space-y-3">
            <DetailRow label="שם העובד" value={employeeName} />
            <DetailRow label="סניף נוכחי" value={branch} />
            <button
              type="button"
              onClick={onChangeBranch}
              className="w-full rounded-2xl bg-white px-4 py-3 text-base font-extrabold text-blue-950 shadow-sm ring-1 ring-white/30 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
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
          <div className="rounded-2xl bg-white/10 px-4 py-4">
            <p className="text-base font-extrabold text-white">
              myShop 4 | גרסה 4.0
            </p>
            <p className="mt-1 text-sm font-medium text-white/70">
              פותח עבור רשת הלב הכחול
            </p>
          </div>
        </SectionCard>
      </div>
    </main>
  )
}

