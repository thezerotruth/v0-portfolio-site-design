"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Mode = "hourly" | "uni"

export default function ParkingCalculatorPage() {
  const [mode, setMode] = useState<Mode>("hourly")
  const [spaces, setSpaces] = useState(500)
  const [hourlyRate, setHourlyRate] = useState(12)
  const [permitCost, setPermitCost] = useState(450)
  const [oversell, setOversell] = useState(1.4)
  const [ghost, setGhost] = useState(8)
  const [churn, setChurn] = useState(7)
  const [ticketValue, setTicketValue] = useState(45)
  const [violationRate, setViolationRate] = useState(3)
  const [captureRate, setCaptureRate] = useState(20)
  const [results, setResults] = useState<{ efficiency: number; enforcement: number; total: number } | null>(null)

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode)
    setResults(null)
    if (newMode === "hourly") {
      setSpaces(500)
    } else {
      setSpaces(2000)
    }
  }

  const calculate = () => {
    const ghostPct = ghost / 100
    const hoursPerDay = 10
    const turnsPerDay = 4
    const totalDailyCars = spaces * turnsPerDay

    let efficiencyGain = 0

    if (mode === "hourly") {
      const ghostLoss = spaces * ghostPct * hourlyRate * hoursPerDay
      const churnLoss = (churn / 60) * hourlyRate * turnsPerDay * spaces
      efficiencyGain = (ghostLoss + churnLoss) * 365
    } else {
      const churnFactor = (churn * 4) / (hoursPerDay * 60)
      const totalInefficiency = ghostPct + churnFactor
      const recoveredSpots = Math.round(spaces * totalInefficiency)
      const newPermits = Math.round(recoveredSpots * oversell)
      efficiencyGain = newPermits * permitCost * 2
    }

    const violRate = violationRate / 100
    const currentCap = captureRate / 100
    const targetCap = 0.9

    const totalViolations = totalDailyCars * violRate
    const currentCaught = totalViolations * currentCap
    const potentialCaught = totalViolations * targetCap

    const dailyEnforcementGain = (potentialCaught - currentCaught) * ticketValue
    const annualEnforcementGain = dailyEnforcementGain * 365

    const totalUpside = efficiencyGain + annualEnforcementGain

    setResults({
      efficiency: Math.round(efficiencyGain),
      enforcement: Math.round(annualEnforcementGain),
      total: Math.round(totalUpside),
    })
  }

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <Link href="/interview-tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Tools
          </Link>
        </div>

        <Card className="border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
              <span className="text-2xl">🅿️</span> Spot Parking Audit
            </CardTitle>
            <p className="text-sm text-muted-foreground">Revenue, Efficiency & Enforcement</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mode Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <button
                type="button"
                onClick={() => handleModeChange("hourly")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${
                  mode === "hourly"
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Hourly Mode
              </button>
              <button
                type="button"
                onClick={() => handleModeChange("uni")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${
                  mode === "uni"
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                University Mode
              </button>
            </div>

            {/* Total Spaces */}
            <div className="space-y-2">
              <Label htmlFor="spaces">Total Parking Spaces</Label>
              <Input
                id="spaces"
                type="number"
                value={spaces}
                onChange={(e) => setSpaces(Number(e.target.value))}
              />
            </div>

            {/* Mode-specific inputs */}
            {mode === "hourly" ? (
              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Avg Hourly Rate ($)</Label>
                <Input
                  id="hourlyRate"
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                />
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="permitCost">Semester Permit Cost ($)</Label>
                  <Input
                    id="permitCost"
                    type="number"
                    value={permitCost}
                    onChange={(e) => setPermitCost(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="oversell">Oversell Ratio</Label>
                  <Input
                    id="oversell"
                    type="number"
                    step="0.1"
                    value={oversell}
                    onChange={(e) => setOversell(Number(e.target.value))}
                  />
                </div>
              </>
            )}

            {/* Efficiency Metrics */}
            <div>
              <h3 className="text-xs font-bold uppercase text-muted-foreground tracking-wide mb-3 pb-2 border-b border-border">
                Efficiency Metrics
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ghost">Est. "Ghost Spot" % (Empty but hidden)</Label>
                  <Input
                    id="ghost"
                    type="number"
                    value={ghost}
                    onChange={(e) => setGhost(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="churn">Turnover Delay (Mins lost per car)</Label>
                  <Input
                    id="churn"
                    type="number"
                    value={churn}
                    onChange={(e) => setChurn(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>

            {/* Enforcement & Compliance */}
            <div>
              <h3 className="text-xs font-bold uppercase text-muted-foreground tracking-wide mb-3 pb-2 border-b border-border">
                Enforcement & Compliance
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ticketValue">Citation / Ticket Value ($)</Label>
                  <Input
                    id="ticketValue"
                    type="number"
                    value={ticketValue}
                    onChange={(e) => setTicketValue(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="violationRate">Daily Violation Rate (Est. % of cars)</Label>
                  <Input
                    id="violationRate"
                    type="number"
                    value={violationRate}
                    onChange={(e) => setViolationRate(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="captureRate">Current Capture Rate (% caught manually)</Label>
                  <Input
                    id="captureRate"
                    type="number"
                    value={captureRate}
                    onChange={(e) => setCaptureRate(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <Button
              onClick={calculate}
              className="w-full"
              size="lg"
              style={{ backgroundColor: "oklch(0.65 0.12 175)" }}
            >
              Analyze Opportunity
            </Button>

            {/* Results */}
            {results && (
              <div className="mt-6 p-5 bg-muted rounded-lg border-l-4 border-primary">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Efficiency Gain (Annual):</span>
                    <span className="font-semibold text-green-500">${results.efficiency.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Recovered Citations (Annual):</span>
                    <span className="font-semibold text-red-500">${results.enforcement.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border text-lg font-bold">
                    <span className="text-foreground">Total Annual Upside:</span>
                    <span className="text-foreground">${results.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
