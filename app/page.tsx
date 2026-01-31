import Link from "next/link"
import { ProfileCard } from "@/components/profile-card"
import { NewsletterCard } from "@/components/newsletter-card"
import { StatementSection } from "@/components/statement-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-4xl">
        {/* Bento Grid Layout */}
        <div className="flex flex-col gap-4">
          {/* Top Row - Profile and Newsletter */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Profile takes 2/3 */}
            <div className="md:col-span-2">
              <ProfileCard />
            </div>
            {/* Newsletter takes 1/3 */}
            <div>
              <NewsletterCard />
            </div>
          </div>

          {/* Statement Section */}
          <StatementSection />

          {/* Frameworks Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold hover:opacity-90"
              style={{ backgroundColor: "oklch(0.65 0.12 175)", color: "white" }}
              asChild
            >
              <Link href="/frameworks">
                Explore My Revenue Frameworks
              </Link>
            </Button>
          </div>

          {/* Middle - AI Portfolio */}
          <PortfolioSection />

          {/* Bottom - Links */}
          <FooterSection />
        </div>
      </div>
    </main>
  )
}
