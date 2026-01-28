"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

export function NewsletterCard() {
  return (
    <Card 
      className="relative overflow-hidden border-0"
      style={{ background: "linear-gradient(to bottom right, oklch(0.6 0.2 300), oklch(0.5 0.18 300))" }}
    >
      {/* Content */}
      <div className="relative flex h-full flex-col justify-between p-6">
        {/* Title with icon */}
        <div>
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold italic text-white md:text-2xl">
              The Remote
              <br />
              Revenue Leader
            </h2>
            <div 
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: "oklch(0.8 0.15 85)" }}
            >
              <DollarSign className="h-5 w-5" style={{ color: "oklch(0.2 0.05 85)" }} />
            </div>
          </div>
        </div>

        {/* Subscribe Button */}
        <Button
          className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => window.open("https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7415716154607968256", "_blank")}
        >
          Subscribe
        </Button>
      </div>
    
    
    </Card>
  )
}
