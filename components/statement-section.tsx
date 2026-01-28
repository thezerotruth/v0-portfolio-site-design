"use client"

import { Card } from "@/components/ui/card"

export function StatementSection() {
  return (
    <Card 
      className="relative overflow-hidden border-0 p-[2px] rounded-xl"
      style={{ background: "linear-gradient(to right, oklch(0.6 0.2 300), oklch(0.65 0.12 175), oklch(0.8 0.15 85))" }}
    >
      <div className="relative rounded-[10px] bg-card/95 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10">
        <div 
          className="absolute inset-0 rounded-[10px] opacity-10"
          style={{ background: "linear-gradient(to right, oklch(0.6 0.2 300), oklch(0.65 0.12 175), oklch(0.8 0.15 85))" }}
        />
        <blockquote className="relative">
          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-foreground text-center text-balance">
            <span className="text-primary font-semibold">I bridge the gap</span> between 20 years of Enterprise Sales leadership and Applied Generative AI. I don&apos;t just manage remote teams; I build the{" "}
            <span className="font-semibold" style={{ color: "oklch(0.6 0.2 300)" }}>RAG systems</span> and{" "}
            <span className="font-semibold" style={{ color: "oklch(0.8 0.15 85)" }}>autonomous agents</span> that make them{" "}
            <span 
              className="font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, oklch(0.65 0.12 175), oklch(0.6 0.2 300), oklch(0.8 0.15 85))" }}
            >10x more efficient</span>.
          </p>
        </blockquote>
      </div>
    </Card>
  )
}
