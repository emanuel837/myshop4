import { useMemo, useState } from 'react'

const BRANCHES: { name: string; phone: string | null }[] = [
  { name: 'ביאליק 4 - רמת גן', phone: '03-6728725' },
  { name: 'שטיינר - אבן גבירול 46 תל אביב', phone: '03-6955883' },
  { name: 'קניון הזהב - ראשון לציון', phone: '03-9413437' },
  { name: 'רוטשילד 61 - כפר סבא', phone: '09-7657635' },
  { name: 'קניון התחנה המרכזית - ירושלים', phone: '02-5370040' },
  { name: 'קניון הקריון - קריית ביאליק', phone: '04-8744020' },
  { name: 'אסף סנטר - באר יעקב', phone: '08-9201565' },
  { name: 'קניון אורות - אור עקיבא', phone: '04-8322523' },
  { name: 'קניון מרום - רמת גן', phone: '03-5477991' },
  { name: "דודג' סנטר - נוף הגליל", phone: '04-6568166' },
  { name: 'חוצות המפרץ - חיפה אאוטלט', phone: '04-8403441' },
  { name: 'קניון ביג פאשן - בת ים', phone: '074-7580208' },
  { name: 'קניותר - נס ציונה', phone: '08-9229810' },
  { name: 'קניון השרון - נתניה', phone: '072-2044901' },
] as const

function getTelHref(phone: string) {
  return `tel:${phone.replace(/\D/g, '')}`
}

function IconPhone(props: { className?: string }) {
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
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  )
}

export default function BranchesScreen() {
  const [search, setSearch] = useState('')

  const filteredBranches = useMemo(() => {
    const query = search.trim()
    if (!query) return BRANCHES
    return BRANCHES.filter((branch) => branch.name.includes(query))
  }, [search])

  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-white">סניפים</h2>

      <div className="mt-4">
        <label className="sr-only" htmlFor="branch-search">
          חיפוש סניף
        </label>
        <input
          id="branch-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base font-semibold text-white outline-none placeholder:text-white/55 focus:border-white/40 focus:ring-4 focus:ring-white/10"
          placeholder="חיפוש לפי שם סניף"
        />
      </div>

      <div className="mt-4 space-y-3">
        {filteredBranches.length > 0 ? (
          filteredBranches.map((branch) => (
            <div
              key={branch.name}
              className="block rounded-3xl bg-white/10 px-5 py-4 shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <div className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-white/10 text-white">
                  <IconPhone className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1 text-right">
                  <div className="text-lg font-extrabold text-white">
                    {branch.name}
                  </div>
                  {branch.phone ? (
                    <a
                      href={getTelHref(branch.phone)}
                      className="mt-1 inline-block text-sm font-medium text-white/75 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                      {branch.phone}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm font-medium text-white/50">
                      אין מספר זמין
                    </div>
                  )}
                </div>

                {branch.phone ? (
                  <a
                    href={getTelHref(branch.phone)}
                    className="flex-none rounded-xl bg-white/10 px-3 py-2 text-sm font-extrabold text-white/85 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label={`התקשר אל ${branch.name}`}
                  >
                    התקשר
                  </a>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <p className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/10">
            לא נמצאו סניפים
          </p>
        )}
      </div>
    </main>
  )
}
