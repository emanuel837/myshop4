type HomeScreenProps = {
  onLogout: () => void
}

export default function HomeScreen({ onLogout }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-blue-950 text-white">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-semibold tracking-tight">myShop 4</h1>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            יציאה
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg font-medium text-slate-900">דף הבית</p>
          <p className="mt-2 text-base text-slate-600">
            ריק כרגע — נבנה בהמשך.
          </p>
        </div>
      </main>
    </div>
  )
}

