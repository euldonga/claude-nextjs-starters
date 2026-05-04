type SectionProps = {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 border-b border-border pb-2 text-lg font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  )
}
