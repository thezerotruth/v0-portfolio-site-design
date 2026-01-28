"use client"

import { Button } from "@/components/ui/button"
export function FooterSection() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <Button
        size="lg"
        className="h-12 bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => window.open("https://linkedin.com/in/jamesedington", "_blank")}
      >
        LinkedIn Profile
      </Button>

      <Button
        size="lg"
        className="h-12 text-white hover:opacity-90"
        style={{ backgroundColor: "oklch(0.6 0.2 300)" }}
        onClick={() => window.open("https://github.com/thezerotruth", "_blank")}
      >
        GitHub Repo
      </Button>

      <Button
        size="lg"
        className="h-12 hover:opacity-90"
        style={{ backgroundColor: "oklch(0.8 0.15 85)", color: "oklch(0.2 0.05 85)" }}
        asChild
      >
        <a 
          href="https://blobs.vusercontent.net/blob/James_Edington_Resume_VP-idftXfs1bKSaMWkbLdRQ8XE4b3neCR.pdf" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </Button>
    </div>
  )
}
