export default function FrameworkCard({ 
  title, 
  goal, 
  description 
}: { 
  title: string
  goal: string
  description: string 
}) {
  return (
    <div className="p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm font-medium mb-2" style={{ color: "oklch(0.65 0.12 175)" }}>
        The Goal: {goal}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        <span className="font-semibold">The Framework:</span> {description}
      </p>
    </div>
  )
}
