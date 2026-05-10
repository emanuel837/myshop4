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

function BranchDisplayName({ name }: { name: string }) {
  const separator = ' - '
  const separatorIndex = name.indexOf(separator)

  if (separatorIndex === -1) return <span className="font-extrabold">{name}</span>

  const branchName = name.slice(0, separatorIndex)
  const cityName = name.slice(separatorIndex + separator.length)

  return (
    <>
      <span className="font-extrabold">{branchName}</span>
      <span className="font-normal"> - {cityName}</span>
    </>
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
      <h2 className="text-xl font-extrabold text-blue-950">סניפים</h2>

      <div className="mt-4">
        <label className="sr-only" htmlFor="branch-search">
          חיפוש סניף
        </label>
        <input
          id="branch-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 text-base font-semibold text-slate-950 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          placeholder="חיפוש לפי שם סניף"
        />
      </div>

      <div className="mt-4 space-y-3">
        {filteredBranches.length > 0 ? (
          filteredBranches.map((branch) => (
            <div
              key={branch.name}
              className="block rounded-[24px] border border-blue-100 bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.07)] hover:border-blue-200 hover:shadow-[0_16px_34px_rgba(37,99,235,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/15"
            >
              <div className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <IconPhone className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1 text-right">
                  <div className="text-lg text-blue-950">
                    <BranchDisplayName name={branch.name} />
                  </div>
                  {branch.phone ? (
                    <a
                      href={getTelHref(branch.phone)}
                      className="mt-1 inline-block text-sm font-medium text-slate-500 underline decoration-blue-200 underline-offset-4 hover:text-blue-700 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
                    >
                      {branch.phone}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm font-medium text-slate-400">
                      אין מספר זמין
                    </div>
                  )}
                </div>

                {branch.phone ? (
                  <a
                    href={getTelHref(branch.phone)}
                    className="flex-none rounded-xl bg-blue-600 px-3 py-2 text-sm font-extrabold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
                    aria-label={`התקשר אל ${branch.name}`}
                  >
                    התקשר
                  </a>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <p className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-500 ring-1 ring-blue-100">
            לא נמצאו סניפים
          </p>
        )}
      </div>
    </main>
  )
}
