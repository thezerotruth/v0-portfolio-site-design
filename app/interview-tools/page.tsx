import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, ArrowLeft } from "lucide-react"

export default function InterviewToolsPage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Interview Tools</h1>
        <p className="text-muted-foreground mb-8">
          Interactive tools and calculators for sales discovery and presentations.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "oklch(0.65 0.12 175)" }}
              >
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-foreground">Parking Calculator</CardTitle>
              <CardDescription>
                Spot Parking ROI audit tool for analyzing revenue, efficiency, and enforcement opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" style={{ backgroundColor: "oklch(0.65 0.12 175)" }}>
                <Link href="/interview-tools/parking-calculator">
                  Open Calculator
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
