type HomeActionCardProps = {
  title: string
  subtitle: string
  icon: React.ReactNode
  iconContainerClassName: string
  buttonClassName?: string
  onClick: () => void
}

export function HomeActionCard({
  title,
  subtitle,
  icon,
  iconContainerClassName,
  buttonClassName = 'border-[#233667]/15 focus-visible:ring-[#233667]/15',
  onClick,
}: HomeActionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'w-full rounded-[28px] border bg-white px-5 py-5 text-[#233667] shadow-[0_14px_35px_rgba(15,23,42,0.08)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4',
        buttonClassName,
      ].join(' ')}
    >
      <div className="flex flex-col items-center text-center">
        <span
          className={[
            'grid h-14 w-14 place-items-center rounded-2xl',
            iconContainerClassName,
          ].join(' ')}
        >
          {icon}
        </span>
        <span className="mt-3 text-xl font-extrabold">{title}</span>
        <span className="mt-1.5 text-sm font-medium text-[#233667]/80">{subtitle}</span>
      </div>
    </button>
  )
}
