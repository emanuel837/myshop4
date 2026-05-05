type InfoScreenProps = {
  title: string
}

export default function InfoScreen({ title }: InfoScreenProps) {
  return (
    <div className="mx-auto max-w-md px-4 pb-24 pt-5">
      <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="mt-2 text-base text-white/75">ריק כרגע — נבנה בהמשך.</p>
      </div>
    </div>
  )
}

