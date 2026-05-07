import { useMemo, useState } from 'react'

const BRANCHES = [
  'טיב טוב',
  'שטינר אורתופדיקה',
  'קניון הזהב',
  'כפר סבא',
  'ירושלים',
  'קריון',
  'אסף סנטר',
  'קניון אורות',
  'קניון מרום',
  "דודג' סנטר",
  'חוצות המפרץ',
  'קניון בת ים',
  'קניון נס ציונה',
  'השרון נתניה',
] as const

const PHONE_PLACEHOLDER = '000-0000000'
const PHONE_PLACEHOLDER_TEL = '0000000000'

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
    return BRANCHES.filter((branch) => branch.includes(query))
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
            <a
              key={branch}
              href={`tel:${PHONE_PLACEHOLDER_TEL}`}
              className="block rounded-3xl bg-white/10 px-5 py-4 shadow-sm ring-1 ring-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <div className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-white/10 text-white">
                  <IconPhone className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1 text-right">
                  <div className="text-lg font-extrabold text-white">
                    {branch}
                  </div>
                  <div className="mt-1 text-sm font-medium text-white/75">
                    {PHONE_PLACEHOLDER}
                  </div>
                </div>

                <div className="flex-none text-sm font-extrabold text-white/85">
                  התקשר
                </div>
              </div>
            </a>
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
