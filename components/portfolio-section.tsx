import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, FileEdit, Eye, Mic, RefreshCw } from "lucide-react"

const projects = [
  {
    title: "RAG Deal Desk Bot",
    icon: MessageSquare,
    color: "primary" as const,
    href: "https://thezerotruth-rap-portfolio-app-aklp9k.streamlit.app/",
  },
  {
    title: "AI Ghostwriter",
    icon: FileEdit,
    color: "gold" as const,
    href: "https://thezerotruth-ghostwriter-portfolio-app-odunf2.streamlit.app/",
  },
  {
    title: "Contract Vision Analyzer",
    icon: Eye,
    color: "purple" as const,
  },
  {
    title: "Context-Aware Sales Coach",
    icon: Mic,
    color: "primary" as const,
  },
  {
    title: "CRM Updater",
    icon: RefreshCw,
    color: "gold" as const,
  },
]

const colorStyles = {
  primary: {
    bg: "bg-primary",
    text: "text-primary-foreground",
    border: "border-primary/50",
    hoverBorder: "hover:border-primary",
    dotBg: undefined,
  },
  gold: {
    bg: undefined,
    bgStyle: { backgroundColor: "oklch(0.8 0.15 85)" },
    text: undefined,
    textStyle: { color: "oklch(0.2 0.05 85)" },
    border: "border-amber-500/50",
    hoverBorder: "hover:border-amber-500",
    dotBg: { backgroundColor: "oklch(0.8 0.15 85)" },
  },
  purple: {
    bg: undefined,
    bgStyle: { backgroundColor: "oklch(0.6 0.2 300)" },
    text: "text-white",
    textStyle: undefined,
    border: "border-violet-500/50",
    hoverBorder: "hover:border-violet-500",
    dotBg: { backgroundColor: "oklch(0.6 0.2 300)" },
  },
}

export function PortfolioSection() {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-6">
        {/* Section Header */}
        <h2 className="mb-5 text-lg font-semibold text-foreground">
          {"Applied AI Portfolio 🚧 In Development: RAG Desk and AI Ghostwriter Active, CRM Updater Coming Soon."}
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  icon: Icon,
  color,
  href,
}: {
  title: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: "primary" | "gold" | "purple"
  href?: string
}) {
  const styles = colorStyles[color]
  
  const cardContent = (
    <>
      {/* Icon */}
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${styles.bg || ""} ${styles.text || ""}`}
        style={styles.bgStyle}
      >
        <Icon className="h-5 w-5" style={styles.textStyle} />
      </div>

      {/* Title */}
      <h3 className="text-xs font-medium text-foreground leading-tight">{title}</h3>

      {/* Tech Icons - using colored dots */}
      <div className="mt-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "oklch(0.8 0.15 85)" }} />
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center rounded-xl border p-4 text-center transition-all bg-secondary/50 ${styles.border} ${styles.hoverBorder} cursor-pointer`}
      >
        {cardContent}
      </a>
    )
  }

  return (
    <div
      className={`flex flex-col items-center rounded-xl border p-4 text-center transition-all bg-secondary/50 ${styles.border} ${styles.hoverBorder}`}
    >
      {cardContent}
    </div>
  )
}
