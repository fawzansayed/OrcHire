"use client";

import { useState } from "react";
import { Card } from "../components/ui/card";
import { Slider } from "../components/ui/slider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ROICalculatorPage() {
  // State for all input values
  const [juniorHires, setJuniorHires] = useState(6);
  const [seniorHires, setSeniorHires] = useState(3);
  const [juniorCTC, setJuniorCTC] = useState(20);
  const [seniorCTC, setSeniorCTC] = useState(40);
  const [monthlyRecruiterCost, setMonthlyRecruiterCost] = useState(1.5);
  const [numRecruiters, setNumRecruiters] = useState(3);
  const [humanClosure, setHumanClosure] = useState(3);
  const [cohyreClosure, setCohyreClosure] = useState(1);
  const [cohyreCost, setCohyreCost] = useState(1.0);
  const [commissionRate, setCommissionRate] = useState(8.33);

  // Calculated values
  const monthlyHires = juniorHires + seniorHires;
  const aggregateCTC = juniorHires * juniorCTC + seniorHires * seniorCTC;
  const avgCTC = monthlyHires > 0 ? aggregateCTC / monthlyHires : 0;
  const monthlyRevenue = monthlyHires * avgCTC * (commissionRate / 100);
  const cohyreCostAsPercentOfCTC =
    aggregateCTC > 0 ? (cohyreCost / aggregateCTC) * 100 : 0;

  // Cost calculations
  const juniorVacancyCostPerMonth = juniorCTC / 12;
  const seniorVacancyCostPerMonth = seniorCTC / 12;

  const humanRecruiterCost = monthlyRecruiterCost * numRecruiters * humanClosure;
  const humanVacancyDelayJunior = Math.max(0, humanClosure - cohyreClosure);
  const humanVacancyDelaySenior = Math.max(0, humanClosure - cohyreClosure);
  const humanVacancyCost =
    humanVacancyDelayJunior * juniorHires * juniorVacancyCostPerMonth +
    humanVacancyDelaySenior * seniorHires * seniorVacancyCostPerMonth;
  const humanTotalEconomicCost = humanRecruiterCost + humanVacancyCost;

  const cohyreRecruiterCost = monthlyRecruiterCost * 1 * 1;
  const cohyreTotalEconomicCost = cohyreRecruiterCost + cohyreCost;

  const annualSavingsLakhs = Math.max(humanTotalEconomicCost - cohyreTotalEconomicCost, 0) * 12;
  const annualSavingsRupees = `₹${(annualSavingsLakhs * 100000).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

  const roiPercent = cohyreCost > 0 ? Math.round((annualSavingsLakhs / (cohyreCost * 12)) * 100) : 0;

  const timeReductionDays = Math.max((humanClosure - cohyreClosure) * 30, 0); // approx
  const efficiencyGainX = cohyreClosure > 0 ? (humanClosure / cohyreClosure).toFixed(1) : "—";
  const qualityImprovementPct = 25;

  const formatCurrency = (amount: number) => {
    return `₹${(amount * 100000).toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    })}`;
  };

  const chartData = {
    labels: ["Human-only", "Cohyre + Recruiter"],
    datasets: [
      {
        label: "Total Economic Cost (in Lakhs)",
        data: [humanTotalEconomicCost, cohyreTotalEconomicCost],
        backgroundColor: ["#f87171", "#38bdf8"],
        borderColor: "#1f2937",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `₹${tooltipItem.raw.toFixed(2)}L`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Cost (in Lakhs)",
          font: { weight: "bold" as const },
        },
      },
      x: {
        ticks: { font: { size: 14 } },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center my-10 md:my-14 space-y-5">
          <h1 className="leading-tight font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight">
            <span className="block text-foreground">Calculate Your ROI with</span>
            <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              OrcHire AI Agents
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how much time and money you could save by replacing your traditional
            hiring process with our autonomous AI agent network.
          </p>
        </header>

        <main className="space-y-6">
          {/* Narrative */}
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-3">
              From Vendor to Strategic Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">
             For too long, staffing agencies have operated on a fundamental trade-off: you can be a partner who finds the perfect hire, or you can be a vendor who fills a role quickly. This constant tension erodes your team's morale and, more importantly, your agency’s net margin. This is where the paradigm shifts. The OrcHire + Recruiter model isn't just another solution-it’s the new engine for your business.
            </p>
             <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-3">
              Dramatically Reduced Time-to-Placement
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">
              By integrating OrcHire, you directly address the client's biggest pain point, which is lost productivity due to vacant roles. You tackle the most significant hidden cost in hiring: **Time**. The old way of manual resume screening and endless follow-ups stretches the hiring timeline, leaving critical roles open for months. This vacancy time costs your clients massive amounts in lost productivity and revenue. By using OrcHire's intelligence to find and pre-screen top candidates in a fraction of the time, you dramatically reduce the closure period to just weeks. You don't just fill a role; you become their ultimate cost-saver, a strategic partner they cannot afford to lose.
            </p>
          </Card>

          {/* Cost Comparison */}
          <Card className="p-6 md:p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT: Inputs + Chart (keep your existing pieces) */}
              <div className="space-y-6">
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 border-slate-600 bg-slate-700/30">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Hiring & Compensation
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label>Junior Hires: {juniorHires}</label>
                        <Slider
                          value={[juniorHires]}
                          onValueChange={(v: number[]) => setJuniorHires(v[0])}
                          max={20}
                          min={1}
                          step={1}
                        />
                      </div>
                      <div>
                        <label>Senior Hires: {seniorHires}</label>
                        <Slider
                          value={[seniorHires]}
                          onValueChange={(v: number[]) => setSeniorHires(v[0])}
                          max={10}
                          min={1}
                          step={1}
                        />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-slate-600 bg-slate-700/30">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Recruiter & Timeline
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label>Recruiter Cost (L): {monthlyRecruiterCost.toFixed(1)}</label>
                        <Slider
                          value={[monthlyRecruiterCost]}
                          onValueChange={(v: number[]) => setMonthlyRecruiterCost(v[0])}
                          max={5}
                          min={0.5}
                          step={0.1}
                        />
                      </div>
                      <div>
                        <label>Recruiters: {numRecruiters}</label>
                        <Slider
                          value={[numRecruiters]}
                          onValueChange={(v: number[]) => setNumRecruiters(v[0])}
                          max={10}
                          min={1}
                          step={1}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <label>Human Closure (mo): {humanClosure}</label>
                          <Slider
                            value={[humanClosure]}
                            onValueChange={(v: number[]) => setHumanClosure(v[0])}
                            max={12}
                            min={1}
                            step={1}
                          />
                        </div>
                        <div>
                          <label>OrcHire Closure (mo): {cohyreClosure}</label>
                          <Slider
                            value={[cohyreClosure]}
                            onValueChange={(v: number[]) => setCohyreClosure(v[0])}
                            max={12}
                            min={1}
                            step={1}
                          />
                        </div>
                        <div className="col-span-2">
                          <label>OrcHire Cost (L/mo): {cohyreCost.toFixed(2)}</label>
                          <Slider
                            value={[cohyreCost]}
                            onValueChange={(v: number[]) => setCohyreCost(v[0])}
                            max={5}
                            min={0.5}
                            step={0.01}
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Chart */}
                <div>
                  <div className="h-[300px]">
                    <Bar data={chartData} options={chartOptions} />
                  </div>
                  <p className="text-sm text-center text-muted-foreground mt-4">
                    Total economic cost (recruiter + vacancy + platform).
                  </p>
                </div>
              </div>

              {/* RIGHT: ROI Summary */}
              <div className="space-y-6">
                {/* Green savings card */}
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600/15 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="text-emerald-400 text-sm font-medium mb-2">
                      Your ROI with OrcHire
                    </div>
                    <div className="rounded-xl bg-gradient-to-b from-emerald-600/25 to-emerald-700/15 border border-emerald-500/30 p-6 md:p-8">
                      <div className="text-3xl md:text-4xl font-extrabold text-emerald-300">
                        {annualSavingsRupees}
                      </div>
                      <div className="mt-1 text-sm text-emerald-200/80">
                        Annual Savings Potential
                      </div>
                      <div className="mt-4 text-emerald-300/90 text-sm">
                        ↑ {roiPercent}% ROI
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metric tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="p-4 bg-slate-700/30 border-slate-600">
                    <div className="text-sm text-muted-foreground">Time Reduction</div>
                    <div className="text-2xl font-bold text-foreground mt-1">
                      {Math.round(timeReductionDays)} days
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Faster time-to-hire
                    </div>
                  </Card>

                  <Card className="p-4 bg-slate-700/30 border-slate-600">
                    <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                    <div className="text-2xl font-bold text-foreground mt-1">
                      {efficiencyGainX}x
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Recruiter productivity increase
                    </div>
                  </Card>

                  <Card className="p-4 bg-slate-700/30 border-slate-600">
                    <div className="text-sm text-muted-foreground">Quality Improvement</div>
                    <div className="text-2xl font-bold text-foreground mt-1">
                      +{qualityImprovementPct}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Better hire quality scores
                    </div>
                  </Card>

                  <Card className="p-4 bg-slate-700/30 border-slate-600">
                    <div className="text-sm text-muted-foreground">ROI</div>
                    <div className="text-2xl font-bold text-foreground mt-1">
                      {roiPercent}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Return on investment
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Card>

 <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
 <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-3">
Working Smarter, Not Harder
 </h2>
 <p className="text-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">
  This increased capacity doesn't just save your clients money; it directly builds your revenue stream. By automating the mundane tasks of resume screening and initial follow-ups, OrcHire frees up your recruiters to focus on high-value, revenue-generating activities like client relationship management and closing deals. This is about working smarter, not harder. Instead of spending 80% of their time on resume screening, they can spend 80% of their time on revenue-generating activities.

 </p>
 
 
 
 
 </Card>
          {/* Revenue Projection */}
         <Card className="p-6 bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#0C8EFF]/10 backdrop-blur-sm border border-[#9F62ED]/30">
  <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-3">
    The Financial Case
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Input Parameters Card */}
    <Card className="p-4 border-[#0C8EFF]/30 bg-[#0C8EFF]/10">
      <h3 className="text-xl font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
        Input Parameters
      </h3>
      <p className="text-purple-100">Monthly Hires: {monthlyHires}</p>
      <p className="text-purple-100">Avg CTC: {avgCTC.toFixed(2)}L</p>
      <div>
        <label className="text-purple-200">Commission Rate: {commissionRate.toFixed(2)}%</label>
        <Slider
          value={[commissionRate]}
          onValueChange={(v: number[]) => setCommissionRate(v[0])}
          max={25}
          min={5}
          step={0.01}
        />
      </div>
    </Card>

    {/* Result Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card className="p-4 text-center bg-[#0C8EFF]/10 border border-[#0C8EFF]/30">
        <h3 className="text-xl font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">Aggregate CTC</h3>
        <p className="text-2xl text-purple-100">{formatCurrency(aggregateCTC)}</p>
      </Card>

      <Card className="p-4 text-center bg-[#9F62ED]/10 border border-[#9F62ED]/30">
        <h3 className="text-xl font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">Monthly Revenue</h3>
        <p className="text-2xl text-purple-100">{formatCurrency(monthlyRevenue)}</p>
      </Card>

      <Card className="p-4 text-center bg-[#0C8EFF]/10 border border-[#0C8EFF]/30">
        <h3 className="text-xl font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">OrcHire % of CTC</h3>
        <p className="text-2xl text-purple-100">{cohyreCostAsPercentOfCTC.toFixed(2)}%</p>
      </Card>
    </div>
  </div>
</Card>

          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
<h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-3">
 Beyond the Numbers: The True Value of OrcHire
  </h2>
  <span className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-center bg-clip-text text-transparent text-xl">
    The Ultimate Pain Killer
  </span>
  <p className="ext-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">
Traditional ATS and manual screening are costly, time-consuming, and prone to human error. OrcHire acts as a pain killer by automating the most laborious parts of the hiring process, freeing up your team to focus on what matters: building relationships and closing deals.
  </p>
  <span className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-center bg-clip-text text-transparent text-xl">
    The Net Margin Builder 
  </span>
  <p className="text-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">
    OrcHire helps you build your net margins. By providing an intelligence layer on top of your existing data sources (like ATS or Google Drive), the technology's "intelligence layer" would transform an agency from a reactive service provider to a proactive, data-driven partner. Costing less than 1% of the average CTC you're earning revenue on, we dramatically increase the efficiency and profitability of your operations. It’s not just a cost-saver; it’s a revenue engine.
  </p>
  <span className="bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] text-center bg-clip-text text-transparent text-xl">
    Scalability 
  </span>
   <p className="ext-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">
    With the core screening process automated, the agency's capacity to handle a higher volume of open roles would increase significantly without a proportional increase in headcount. This makes the business highly scalable and more profitable in the long run.
  </p>
          </Card>
          <Card className=" p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-3">
         Building Your Competitive Moat: A Strategic Advantage Your Rivals Cannot Match 
          </h2>
  <p className="ext-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">
The numbers tell a powerful story of efficiency and profitability, but the true value of OrcHire extends beyond your balance sheet. By adopting our platform, you are not just optimizing your operations; you are building a durable competitive advantage-a "moat" around your business.

Your competitors are still operating with a linear growth model. Their capacity to scale is limited by their ability to hire, train, and retain a larger workforce. The OrcHire + Recruiter model breaks this constraint. Your ability to source and close at a faster, higher volume will become your greatest sales tool.
            </p>

          </Card>
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-3">
         The Growth Flywheel: Powering Your Success
          </h2>
          <p className="ext-muted-foreground leading-relaxed text-center max-w-7xl mx-auto">

In short, OrcHire's magic is its ability to create a powerful flywheel. You save your clients a huge amount of money by eliminating vacancy costs, which makes them want to work with you more. This increased demand is met by your newly optimized and efficient team, which can handle more placements and build your revenue. You simultaneously become the most financially responsible partner for your clients and the most profitable business in your industry.
          </p>

          </Card>
        </main>
      </div>
    </div>
  );
}
