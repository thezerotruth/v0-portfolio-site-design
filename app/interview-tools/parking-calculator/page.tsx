"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ParkingCalculatorPage() {
  const [mode, setMode] = useState<"uni" | "hourly">("uni")
  const [sectionsOpen, setSectionsOpen] = useState({
    revenue: true,
    pricing: false,
    discounts: false,
  })
  const [showResults, setShowResults] = useState(false)

  // Inputs
  const [spaces, setSpaces] = useState(2000)
  const [permitCost, setPermitCost] = useState(450)
  const [oversell, setOversell] = useState(1.4)
  const [hourlyRate, setHourlyRate] = useState(12)
  const [ghost, setGhost] = useState(5)
  const [ticketValue, setTicketValue] = useState(45)
  const [violationRate, setViolationRate] = useState(3)
  const [captureRate, setCaptureRate] = useState(20)
  const [qtyWayfinding, setQtyWayfinding] = useState(0)
  const [qtyEnforcement, setQtyEnforcement] = useState(0)
  const [setupFee, setSetupFee] = useState(5000)
  const [discPercent, setDiscPercent] = useState(0)
  const [discAmount, setDiscAmount] = useState(0)

  // Results
  const [results, setResults] = useState({
    costMo: 0, revMo: 0, netMo: 0,
    costQt: 0, revQt: 0, netQt: 0,
    costYr: 0, revYr: 0, netYr: 0,
    finalRoi: 0,
  })

  const handleModeChange = (newMode: "uni" | "hourly") => {
    setMode(newMode)
    setShowResults(false)
    setSpaces(newMode === "hourly" ? 500 : 2000)
  }

  const toggleSection = (section: "revenue" | "pricing" | "discounts") => {
    setSectionsOpen(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const formatMoney = (num: number) => {
    return "$" + Math.round(num).toLocaleString()
  }

  const calculate = () => {
    const ghostPct = ghost / 100
    const churnMins = 7
    const hoursPerDay = 10
    const turnsPerDay = 4

    let annualRevenue = 0

    if (mode === "hourly") {
      const ghostLoss = spaces * ghostPct * hourlyRate * hoursPerDay
      const churnLoss = (churnMins / 60) * hourlyRate * turnsPerDay * spaces
      annualRevenue = (ghostLoss + churnLoss) * 365
    } else {
      const churnFactor = (churnMins * 4) / (hoursPerDay * 60)
      const totalInefficiency = ghostPct + churnFactor
      const recoveredSpots = Math.round(spaces * totalInefficiency)
      const newPermits = Math.round(recoveredSpots * oversell)
      annualRevenue = newPermits * permitCost * 2
    }

    // Enforcement Logic
    const violRate = violationRate / 100
    const currentCap = captureRate / 100
    const targetCap = 0.90
    const totalDailyCars = mode === "hourly" ? spaces * turnsPerDay : spaces * 0.8
    const totalViolations = totalDailyCars * violRate
    const currentCaught = totalViolations * currentCap
    const potentialCaught = totalViolations * targetCap
    const dailyEnforcementGain = (potentialCaught - currentCaught) * ticketValue
    annualRevenue += dailyEnforcementGain * 365

    const monthlyRevenue = annualRevenue / 12

    // Cost Logic
    const baseMonthlyCost = (qtyWayfinding * 150) + (qtyEnforcement * 350)

    // Discount Logic
    let finalMonthlyCost = baseMonthlyCost * (1 - (discPercent / 100))
    finalMonthlyCost = finalMonthlyCost - discAmount
    if (finalMonthlyCost < 0) finalMonthlyCost = 0

    // Totals
    const annualCost = (finalMonthlyCost * 12) + setupFee
    const annualNet = annualRevenue - annualCost

    setResults({
      costMo: finalMonthlyCost,
      revMo: monthlyRevenue,
      netMo: monthlyRevenue - finalMonthlyCost,
      costQt: finalMonthlyCost * 3,
      revQt: monthlyRevenue * 3,
      netQt: (monthlyRevenue * 3) - (finalMonthlyCost * 3),
      costYr: annualCost,
      revYr: annualRevenue,
      netYr: annualNet,
      finalRoi: annualNet,
    })
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-[#f4f6f8] p-5 font-sans text-[#333]">
      <div className="max-w-[600px] mx-auto mb-4">
        <Link 
          href="/interview-tools" 
          className="inline-flex items-center gap-2 text-[#2563eb] hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Interview Tools
        </Link>
      </div>

      <div className="bg-white max-w-[600px] mx-auto rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#0f172a] p-6 text-center text-white">
          <h2 className="m-0 text-2xl font-bold">Spot Parking Architect</h2>
          <p className="mt-1 opacity-80 text-sm">Deal Structure & ROI Calculator</p>
        </div>

        {/* Mode Switch */}
        <div className="flex p-2.5 bg-[#e2e8f0]">
          <button
            type="button"
            onClick={() => handleModeChange("uni")}
            className={`flex-1 text-center py-2.5 px-4 rounded-md text-sm font-semibold transition-all cursor-pointer border-none ${
              mode === "uni" 
                ? "bg-white text-[#0f172a] shadow-sm" 
                : "bg-transparent text-[#64748b]"
            }`}
          >
            University Mode
          </button>
          <button
            type="button"
            onClick={() => handleModeChange("hourly")}
            className={`flex-1 text-center py-2.5 px-4 rounded-md text-sm font-semibold transition-all cursor-pointer border-none ${
              mode === "hourly" 
                ? "bg-white text-[#0f172a] shadow-sm" 
                : "bg-transparent text-[#64748b]"
            }`}
          >
            Commercial Mode
          </button>
        </div>

        {/* Section 1: Revenue */}
        <button
          type="button"
          onClick={() => toggleSection("revenue")}
          className="w-full bg-[#f8fafc] py-4 px-6 border-y border-[#e2e8f0] cursor-pointer flex justify-between items-center font-semibold text-[#334155] hover:bg-[#f1f5f9] text-left"
        >
          <span>1. Opportunity Analysis (Revenue)</span>
          <span className={`text-xs transition-transform ${sectionsOpen.revenue ? "rotate-180" : ""}`}>▼</span>
        </button>
        {sectionsOpen.revenue && (
          <div className="p-5 px-6">
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Total Parking Spaces</label>
              <input
                type="number"
                value={spaces}
                onChange={(e) => setSpaces(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>

            {mode === "uni" ? (
              <>
                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Permit Cost (Semester)</label>
                  <input
                    type="number"
                    value={permitCost}
                    onChange={(e) => setPermitCost(Number(e.target.value))}
                    className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Oversell Ratio (e.g., 1.4)</label>
                  <input
                    type="number"
                    value={oversell}
                    onChange={(e) => setOversell(Number(e.target.value))}
                    step="0.1"
                    className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
                  />
                </div>
              </>
            ) : (
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Avg Hourly Rate ($)</label>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">{"Est. \"Ghost Spot\" % (Inefficiency)"}</label>
              <input
                type="number"
                value={ghost}
                onChange={(e) => setGhost(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>

            <hr className="border-0 border-t border-[#eee] my-4" />

            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Ticket/Citation Value ($)</label>
              <input
                type="number"
                value={ticketValue}
                onChange={(e) => setTicketValue(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Daily Violation Rate (%)</label>
              <input
                type="number"
                value={violationRate}
                onChange={(e) => setViolationRate(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Current Capture Rate (% caught manually)</label>
              <input
                type="number"
                value={captureRate}
                onChange={(e) => setCaptureRate(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
          </div>
        )}

        {/* Section 2: Pricing */}
        <button
          type="button"
          onClick={() => toggleSection("pricing")}
          className="w-full bg-[#f8fafc] py-4 px-6 border-y border-[#e2e8f0] cursor-pointer flex justify-between items-center font-semibold text-[#334155] hover:bg-[#f1f5f9] text-left"
        >
          <span>2. Investment Structure (Hardware)</span>
          <span className={`text-xs transition-transform ${sectionsOpen.pricing ? "rotate-180" : ""}`}>▼</span>
        </button>
        {sectionsOpen.pricing && (
          <div className="p-5 px-6">
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Wayfinding Cameras ($150/mo)</label>
              <input
                type="number"
                value={qtyWayfinding}
                onChange={(e) => setQtyWayfinding(Number(e.target.value))}
                placeholder="Qty"
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Enforcement Cameras ($350/mo)</label>
              <input
                type="number"
                value={qtyEnforcement}
                onChange={(e) => setQtyEnforcement(Number(e.target.value))}
                placeholder="Qty"
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
          </div>
        )}

        {/* Section 3: Discounts */}
        <button
          type="button"
          onClick={() => toggleSection("discounts")}
          className="w-full bg-[#f8fafc] py-4 px-6 border-y border-[#e2e8f0] cursor-pointer flex justify-between items-center font-semibold text-[#334155] hover:bg-[#f1f5f9] text-left"
        >
          <span>3. Incentives & Implementation</span>
          <span className={`text-xs transition-transform ${sectionsOpen.discounts ? "rotate-180" : ""}`}>▼</span>
        </button>
        {sectionsOpen.discounts && (
          <div className="p-5 px-6">
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">One-Time Setup Fee ($)</label>
              <input
                type="number"
                value={setupFee}
                onChange={(e) => setSetupFee(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Discount: Percentage (%) off Monthly</label>
              <input
                type="number"
                value={discPercent}
                onChange={(e) => setDiscPercent(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-[#475569] mb-1.5">Discount: Flat Amount ($) off Monthly</label>
              <input
                type="number"
                value={discAmount}
                onChange={(e) => setDiscAmount(Number(e.target.value))}
                className="w-full p-2.5 border border-[#cbd5e1] rounded-md text-[15px] bg-white focus:border-[#3b82f6] focus:outline-none focus:ring-[3px] focus:ring-[rgba(59,130,246,0.1)]"
              />
            </div>
          </div>
        )}

        {/* Button */}
        <div className="p-5 px-6 bg-white">
          <button
            type="button"
            onClick={calculate}
            className="w-full bg-[#2563eb] text-white border-none py-3.5 rounded-lg text-base font-bold cursor-pointer transition-all shadow-md hover:bg-[#1d4ed8] hover:-translate-y-0.5"
          >
            Generate ROI Report
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#f1f5f9] p-3 text-left text-xs uppercase text-[#64748b] border-b border-[#e2e8f0]">Period</th>
                  <th className="bg-[#f1f5f9] p-3 text-left text-xs uppercase text-[#64748b] border-b border-[#e2e8f0]">Cost (Investment)</th>
                  <th className="bg-[#f1f5f9] p-3 text-left text-xs uppercase text-[#64748b] border-b border-[#e2e8f0]">Revenue (Upside)</th>
                  <th className="bg-[#f1f5f9] p-3 text-left text-xs uppercase text-[#64748b] border-b border-[#e2e8f0]">Net Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#334155]">Monthly</td>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#ef4444]">{formatMoney(results.costMo)}</td>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#10b981]">{formatMoney(results.revMo)}</td>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#059669]">{formatMoney(results.netMo)}</td>
                </tr>
                <tr>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#334155]">Quarterly</td>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#ef4444]">{formatMoney(results.costQt)}</td>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#10b981]">{formatMoney(results.revQt)}</td>
                  <td className="py-4 px-3 border-b border-[#e2e8f0] text-sm font-medium text-[#059669]">{formatMoney(results.netQt)}</td>
                </tr>
                <tr>
                  <td className="py-4 px-3 bg-[#f8fafc] text-base font-bold text-[#334155]">Annual (Year 1)</td>
                  <td className="py-4 px-3 bg-[#f8fafc] text-base font-bold text-[#ef4444]">{formatMoney(results.costYr)}</td>
                  <td className="py-4 px-3 bg-[#f8fafc] text-base font-bold text-[#10b981]">{formatMoney(results.revYr)}</td>
                  <td className="py-4 px-3 bg-[#f8fafc] text-base font-bold text-[#059669]">{formatMoney(results.netYr)}</td>
                </tr>
              </tbody>
            </table>

            <div className="p-5 text-center bg-[#f0fdf4] border-t border-[#dcfce7]">
              <div className="text-[13px] text-[#166534] font-semibold uppercase tracking-wide">Year 1 Total ROI</div>
              <div className="text-[28px] font-extrabold text-[#15803d]">{formatMoney(results.finalRoi)}</div>
              <div className="text-xs text-[#166534] mt-1">(After all costs, fees & discounts)</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
