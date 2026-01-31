import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import FrameworkCard from "./FrameworkCard" // Import FrameworkCard component

export default function FrameworksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Revenue Frameworks Lab</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proprietary Systems for AI-Accelerated Sales & Remote Leadership
          </p>
        </header>

        {/* Intro */}
        <div className="mb-12 p-6 rounded-xl border border-border bg-card">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to the Lab. These are the documented, repeatable frameworks I've developed over 20+ years in B2B SaaS and Cybersecurity. In an era of AI-driven sales, "vibe-based" selling is dead. These protocols replace guesswork with a data-led, "Asset, Not Opinion" operating system.
          </p>
        </div>

        {/* Section I: AI Strategy Suite */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "oklch(0.65 0.12 175)" }}>
            I. The AI Strategy Suite
          </h2>
          <p className="text-sm text-muted-foreground italic mb-6">
            Leveraging LLMs to collapse the sales cycle and dominate market intelligence.
          </p>

          <div className="space-y-6">
            <FrameworkCard
              title="The Edington 3-Prompt Sequence™"
              goal="Speed to Lead + Deep Personalization."
              description="A specialized workflow that collapses the enterprise sales cycle by using AI to move from raw prospect data to a tailored presentation in minutes. It ensures every touchpoint is data-backed and highly relevant to the stakeholder."
            />
            <FrameworkCard
              title="The Edington Deep-Dive Protocol™"
              goal="Strategic Account Intelligence."
              description='A research framework utilizing Perplexity and advanced LLMs to build "Buying Committee Dossiers." It identifies hidden pain points and competitive gaps before the first discovery call even begins.'
            />
            <FrameworkCard
              title="The Edington 6-Persona Defense™"
              goal="Objection Handling & Roleplay."
              description='An AI-powered simulation framework that pressure-tests sales pitches against a virtual "Buying Committee." Teams can roleplay objections from CFOs, CTOs, and End-Users simultaneously to refine messaging.'
            />
            <FrameworkCard
              title="The Edington Pre-Mortem Protocol™"
              goal="AI Adoption & Risk Mitigation."
              description='A risk-mitigation framework for AI implementation. It identifies the "cultural friction points" where sales teams typically fail to adopt new tools, providing a roadmap for 100% tech-stack utilization.'
            />
          </div>
        </section>

        {/* Section II: Enterprise Sales Execution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "oklch(0.6 0.2 300)" }}>
            II. Enterprise Sales Execution
          </h2>
          <p className="text-sm text-muted-foreground italic mb-6">
            Converting discovery into a high-authority diagnostic engine.
          </p>

          <div className="space-y-6">
            <FrameworkCard
              title="The Edington 60-30-10 Diagnostic™"
              goal="High-Level Consultant Authority."
              description='A discovery architecture that mandates a structured ratio: 60% root-cause diagnosis, 30% implication mapping, and 10% solution prescription. This prevents "premature pitching" and builds massive buyer trust.'
            />
            <FrameworkCard
              title='The "Asset, Not Opinion" Framework™'
              goal="Operationalizing Sales Tribal Knowledge."
              description='A culture-shifting methodology that replaces "hustle-based" sales with "asset-based" sales. Every team interaction and piece of collateral is treated as a reusable data asset that improves the entire organization\'s win rate.'
            />
          </div>
        </section>

        {/* Section III: Remote Revenue Leadership */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "oklch(0.8 0.15 85)" }}>
            III. Remote Revenue Leadership
          </h2>
          <p className="text-sm text-muted-foreground italic mb-6">
            Standardizing excellence across distributed sales organizations.
          </p>

          <div className="space-y-6">
            <FrameworkCard
              title="The Edington 4:1 Asynchronous Loop™"
              goal="High-Velocity Remote Management."
              description='A management cadence designed for remote teams. It replaces "meeting fatigue" with a high-velocity feedback loop of four async coaching touchpoints for every one live sync, increasing output by up to 25%.'
            />
            <FrameworkCard
              title="The Remote Accountability Protocol™"
              goal="Performance Visibility."
              description='A data-led framework for tracking "Leading Indicators" in a remote environment. It moves beyond simple activity metrics to measure the quality of intent and "semantic resonance" in outbound efforts.'
            />
          </div>
        </section>

        {/* Section IV: High-Velocity Onboarding */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "oklch(0.65 0.12 175)" }}>
            IV. High-Velocity Onboarding
          </h2>
          <p className="text-sm text-muted-foreground italic mb-6">
            Accelerating time-to-revenue for new hires.
          </p>

          <div className="space-y-6">
            <FrameworkCard
              title="The Edington Active-Ramp Protocol™"
              goal="Reducing Time-to-First-Deal."
              description='A 30-60-90 day onboarding system that prioritizes "Micro-Wins." By gamifying the learning curve and focusing on AI-assisted prospecting early, it reduces time-to-first-deal by an average of 15-20 days.'
            />
            <FrameworkCard
              title="The Edington Enablement Framework™"
              goal="Continuous Learning & Tech Utilization."
              description="A continuous learning architecture that treats Sales Enablement as a product. It uses internal AI knowledge bases to ensure reps have real-time access to the most effective talk tracks and competitive intel."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p>© 2026 James Henry Edington. All Rights Reserved.</p>
          <p className="mt-1">
            For licensing or implementation consulting, contact{" "}
            <a href="mailto:james@jamesedington.com" className="text-primary hover:underline">
              James Edington
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
