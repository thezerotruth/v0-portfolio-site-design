import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">The Remote Revenue Tech Stack</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            A Scalability Framework
          </p>
          <p className="text-sm text-muted-foreground mb-6">By James Henry Edington</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Optimized for Remote Sales Management & B2B Lead Gen
          </p>
          <Button
            size="lg"
            className="h-12 px-6 font-semibold hover:opacity-90"
            style={{ backgroundColor: "oklch(0.6 0.2 300)", color: "white" }}
            asChild
          >
            <a
              href="https://blobs.vusercontent.net/blob/The%20Remote%20Revenue%20Tech%20Stack_%20A%20Scalability%20Framework-WdOc5PpIrexHdnEEzIbf6Ax1DFwBV6.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Get The PDF
            </a>
          </Button>
        </header>

        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            In a remote sales environment, your tech stack is your office. Choosing the wrong tools leads to
            {'"Revenue Leak,"'} while the right stack creates an automated growth engine. This guide breaks
            down the essential AI Sales Tools required to scale from a founding team to a global enterprise.
          </p>
        </div>

        {/* ROI Transition Matrix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span style={{ color: "oklch(0.65 0.12 175)" }}>The Sales Tech ROI Transition Matrix</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Use this framework to identify when your current stack is costing you more in manual friction than the price of an upgrade.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-border" style={{ backgroundColor: "oklch(0.65 0.12 175)" }}>
                  <th className="p-4 text-left text-white font-semibold">Metric / Stage</th>
                  <th className="p-4 text-left text-white font-semibold">Tier 1: Lean Starter</th>
                  <th className="p-4 text-left text-white font-semibold">Tier 2: Mid-Market</th>
                  <th className="p-4 text-left text-white font-semibold">Tier 3: Enterprise Titan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">Primary Driver</td>
                  <td className="p-4">High Volume Outreach</td>
                  <td className="p-4">Process & Coaching</td>
                  <td className="p-4">Forecast & Compliance</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">Core CRM Goal</td>
                  <td className="p-4">{'"Don\'t lose leads"'}</td>
                  <td className="p-4">{'"Scale winning plays"'}</td>
                  <td className="p-4">{'"Global data integrity"'}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">Typical Rep Count</td>
                  <td className="p-4">1 - 10 Reps</td>
                  <td className="p-4">11 - 100 Reps</td>
                  <td className="p-4">100+ Reps / Global</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Upgrade Signal</td>
                  <td className="p-4">{'Reps spend >5hrs/wk prospecting.'}</td>
                  <td className="p-4">No visibility into mid-funnel stalls.</td>
                  <td className="p-4">Conflicting data across departments.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tier 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "oklch(0.65 0.12 175)" }}>
            Tier 1: The Lean Sales Starter
          </h2>
          <p className="text-muted-foreground mb-6">
            Focus: High-volume outbound and rapid lead identification for startups.
          </p>
          <div className="grid gap-4">
            <ToolCard
              name="Apollo.io"
              category="B2B Lead Gen"
              description='The Best All-in-One. Replaces three separate tools by combining database, dialer, and sequencer.'
              cost="$49 - $99/mo"
              url="https://www.apollo.io"
            />
            <ToolCard
              name="Clay"
              category="AI Sales Tools"
              description="The Automation King. Uses AI to write personalized openers at 10x the speed of manual research."
              cost="$149/mo"
              url="https://www.clay.com"
            />
            <ToolCard
              name="Close CRM"
              category="CRM"
              description="Best for Velocity. Built for speed with integrated calling/SMS. Ideal for teams living on the phone."
              cost="$49/user/mo"
              url="https://www.close.com"
            />
            <ToolCard
              name="Loom"
              category="Video Sales"
              description="Humanizing Remote Sales. 30-second videos increase response rates by 25% over text-only emails."
              cost="Free / $12/mo"
              url="https://www.loom.com"
            />
          </div>
        </section>

        {/* Tier 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "oklch(0.8 0.15 85)" }}>
            Tier 2: The Mid-Market Optimizer
          </h2>
          <p className="text-muted-foreground mb-6">
            Focus: Pipeline coaching, CRM hygiene, and advanced sales enablement for Directors.
          </p>
          <div className="grid gap-4">
            <ToolCard
              name="HubSpot Sales Hub"
              category="CRM"
              description="The Best for Visibility. Superior reporting and ease of adoption compared to complex enterprise alternatives."
              cost="$450+/mo"
              url="https://www.hubspot.com"
              color="gold"
            />
            <ToolCard
              name="Gong"
              category="Revenue Intel"
              description='The Best for Coaching. Uses AI to flag "deal risks" and detect Economic Buyers in recorded calls.'
              cost="$1.2k/user/yr"
              url="https://www.gong.io"
              color="gold"
            />
            <ToolCard
              name="Salesloft"
              category="Engagement"
              description='Best for Workflow. Uses AI-driven "Rhythms" to prioritize rep tasks so no lead falls through the cracks.'
              cost="$125/user/mo"
              url="https://www.salesloft.com"
              color="gold"
            />
            <ToolCard
              name="PandaDoc"
              category="eSign"
              description="Best for Velocity. Real-time alerts when prospects open proposals allow for perfectly timed follow-ups."
              cost="$19+/user/mo"
              url="https://www.pandadoc.com"
              color="gold"
            />
          </div>
        </section>

        {/* Tier 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "oklch(0.6 0.2 300)" }}>
            Tier 3: The Enterprise Titan
          </h2>
          <p className="text-muted-foreground mb-6">
            Focus: Global revenue operations, predictive forecasting, and total stack integration for VPs/CROs.
          </p>
          <div className="grid gap-4">
            <ToolCard
              name="Salesforce (Sales Cloud Unlimited + Einstein AI)"
              category="Enterprise CRM & AI"
              description='The industry-standard "System of Record" for global sales organizations. Einstein AI provides predictive forecasting with 90%+ accuracy for board-level reporting.'
              cost="$330/user/mo"
              url="https://www.salesforce.com"
              color="purple"
            />
            <ToolCard
              name="6sense"
              category="Intent Data & ABM"
              description='An "Intent Engine" that identifies companies researching your solution before they contact a rep. Visibility into the "Dark Funnel" allows VPs to allocate SDR resources only to accounts currently in a "buying window."'
              cost="$50k - $100k+/yr"
              url="https://www.6sense.com"
              color="purple"
            />
            <ToolCard
              name="Outreach.io"
              category="Sales Execution Platform"
              description="A platform for managing thousands of sequences with complex multi-touch attribution. Allows leadership to lock down messaging across 100+ reps to ensure brand and legal compliance."
              cost="Custom Enterprise Pricing"
              url="https://www.outreach.io"
              color="purple"
            />
            <ToolCard
              name="Clari"
              category="Revenue Leakage & Forecasting"
              description='A specialized layer sitting on top of the CRM to provide "Revenue Precision." Identifies exactly where deals are stalling across the entire global organization in real-time.'
              cost="$100 - $150/user/mo"
              url="https://www.clari.com"
              color="purple"
            />
          </div>
        </section>

        {/* Selection Logic */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "oklch(0.65 0.12 175)" }}>
            The Edington Selection Logic
          </h2>
          <p className="text-muted-foreground mb-6">
            To maintain high performance in a remote environment, we apply three non-negotiable rules to every tool:
          </p>
          <div className="grid gap-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.65 0.12 175)" }}>
                1. The 3-Hour Productivity Floor
              </h3>
              <p className="text-muted-foreground">
                A tool must buy back at least 3 hours per week of selling time for your reps.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.8 0.15 85)" }}>
                2. Semantic Consistency
              </h3>
              <p className="text-muted-foreground">
                {'Your CRM is your office. Tools must integrate natively to ensure one "source of truth" across time zones.'}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2" style={{ color: "oklch(0.6 0.2 300)" }}>
                3. The Edington 3-Prompt Sequence
              </h3>
              <p className="text-muted-foreground">
                {'We prioritize tools that allow for AI prompt-chaining to automate the "boring" parts of the sales cycle.'}
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center py-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            James Edington {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  )
}

function ToolCard({
  name,
  category,
  description,
  cost,
  url,
  color = "primary",
}: {
  name: string
  category: string
  description: string
  cost: string
  url: string
  color?: "primary" | "gold" | "purple"
}) {
  const colors = {
    primary: "oklch(0.65 0.12 175)",
    gold: "oklch(0.8 0.15 85)",
    purple: "oklch(0.6 0.2 300)",
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-bold text-lg">{name}</h3>
            <span
              className="text-xs px-2 py-1 rounded-full"
              style={{ backgroundColor: colors[color], color: color === "gold" ? "#1a1a1a" : "white" }}
            >
              {category}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          <p className="font-semibold" style={{ color: colors[color] }}>
            {cost}
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:underline shrink-0"
          style={{ color: colors[color] }}
        >
          Visit Site
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
