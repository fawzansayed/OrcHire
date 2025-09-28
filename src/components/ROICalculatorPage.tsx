"use client";

import { useState } from "react";

// Inline style objects for colored metric cards
const metricCardStyles = {
  green: {
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    borderColor: 'rgba(34, 197, 94, 0.5)'
  },
  blue: {
    backgroundColor: 'rgba(59, 130, 246, 0.3)',
    borderColor: 'rgba(59, 130, 246, 0.5)'
  },
  purple: {
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    borderColor: 'rgba(139, 92, 246, 0.5)'
  },
  orange: {
    backgroundColor: 'rgba(249, 115, 22, 0.3)',
    borderColor: 'rgba(249, 115, 22, 0.5)'
  },
  red: {
    backgroundColor: 'rgba(239, 68, 68, 0.3)',
    borderColor: 'rgba(239, 68, 68, 0.5)'
  }
};
import { Card } from "./ui/card";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Download, Share2, Clock, TrendingUp, Award, ArrowUp, Users, DollarSign, Timer, BarChart3, Target } from "lucide-react";
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
  // State for all input values - matching the reference design
  const [costPerHire, setCostPerHire] = useState(15000);
  const [timeToHire, setTimeToHire] = useState(45);
  const [annualHires, setAnnualHires] = useState(50);
  
  // Original calculator states
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

  // Calculated values for CoHyre (matching reference design)
  const cohyreTimeToHire = Math.round(timeToHire * 0.6); // 40% faster
  const cohyreCostPerHire = Math.round(costPerHire * 0.7); // 30% cost reduction
  
  // ROI Calculations
  const currentAnnualCost = costPerHire * annualHires;
  const cohyreAnnualCost = cohyreCostPerHire * annualHires;
  const annualSavings = currentAnnualCost - cohyreAnnualCost;
  const timeSavings = timeToHire - cohyreTimeToHire;
  const efficiencyGain = (timeToHire / cohyreTimeToHire).toFixed(1);
  const roiPercent = Math.round((annualSavings / cohyreAnnualCost) * 100);

  // Original calculator values
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

  const roiPercentSecond = cohyreCost > 0 ? Math.round((annualSavingsLakhs / (cohyreCost * 12)) * 100) : 0;

  const timeReductionDays = Math.max((humanClosure - cohyreClosure) * 30, 0); // approx
  const efficiencyGainX = cohyreClosure > 0 ? (humanClosure / cohyreClosure).toFixed(1) : "—";
  const qualityImprovementPct = 25;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(0)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    } else {
      return `₹${amount.toLocaleString("en-IN")}`;
    }
  };

  const formatCurrencySecond = (amount: number) => {
    return `₹${(amount * 100000).toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    })}`;
  };

  const chartDataSecond = {
    labels: ["Human-only", "OrcHire + Recruiter"],
    datasets: [
      {
        label: "Total Economic Cost (in Lakhs)",
        data: [humanTotalEconomicCost, cohyreTotalEconomicCost],
        backgroundColor: [
          "rgba(239, 68, 68, 0.8)", 
          "rgba(34, 197, 94, 0.8)"
        ],
        borderColor: [
          "rgb(239, 68, 68)", 
          "rgb(34, 197, 94)"
        ],
        borderWidth: 2,
        borderRadius: 12,
        borderSkipped: false,
      },
    ],
  };

  const chartOptionsSecond: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#f1f5f9',
        bodyColor: '#cbd5e1',
        borderColor: '#0c8eff',
        borderWidth: 2,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: (tooltipItems: any) => {
            const label = tooltipItems[0].label;
            return label === "Human-only" ? "🔴 Human-only Process" : "🟢 OrcHire + Recruiter";
          },
          label: (tooltipItem: any) => `Cost: ₹${tooltipItem.raw.toFixed(2)}L`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(12, 142, 255, 0.1)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#94a3b8',
          font: { size: 12 },
          callback: function(value: any) {
            return `₹${value.toFixed(1)}L`;
          },
        },
        title: {
          display: true,
          text: "Cost (in Lakhs)",
          color: '#f1f5f9',
          font: { weight: "bold" as const, size: 16 },
          padding: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: { 
          color: '#cbd5e1',
          font: { size: 14, weight: "bold" as const } 
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 12,
      }
    },
    layout: {
      padding: {
        top: 20,
        bottom: 10,
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center my-10 md:my-14 space-y-5">
          <h1 className="leading-relaxed font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight pb-2">
            <span className="block text-foreground pb-1">Calculate Your ROI with</span>
            <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent pb-2">
              OrcHire AI Agents
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how much time and money you could save by replacing your traditional
            hiring process with our autonomous AI agent network.
          </p>
        </header>

        <main className="space-y-6">
          {/* From Vendor to Strategic Partner */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-6 leading-relaxed pb-2">
              From Vendor to Strategic Partner
            </h2>
            <div className="prose prose-lg max-w-none text-center dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-lg">
                For too long, staffing agencies have operated on a fundamental trade-off: you can be a partner who finds the perfect hire, or you can be a vendor who fills a role quickly. This constant tension erodes your team's morale and, more importantly, your agency's net margin. This is where the paradigm shifts. The OrcHire + Recruiter model isn't just another solution—it's the new engine for your business.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-[#0C8EFF]/10 to-[#9F62ED]/10 rounded-xl border border-[#0C8EFF]/20">
              <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-4 leading-relaxed pb-1">
                Dramatically Reduced Time-to-Placement
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                By integrating OrcHire, you directly address the client's biggest pain point, which is lost productivity due to vacant roles. You tackle the most significant hidden cost in hiring: <strong className="text-[#0C8EFF]">Time</strong>. The old way of manual resume screening and endless follow-ups stretches the hiring timeline, leaving critical roles open for months. This vacancy time costs your clients massive amounts in lost productivity and revenue. By using OrcHire's intelligence to find and pre-screen top candidates in a fraction of the time, you dramatically reduce the closure period to just weeks. You don't just fill a role; you become their ultimate cost-saver, a strategic partner they cannot afford to lose.
              </p>
            </div>
          </Card>

          {/* Main ROI Calculator */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Your Current Hiring Metrics */}
              <Card className="bg-card border p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Your Current Hiring Metrics</h2>
                </div>

                <Tabs defaultValue="compensation" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                    <TabsTrigger value="compensation" className="data-[state=active]:bg-accent">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Hiring & Compensation
                    </TabsTrigger>
                    <TabsTrigger value="timeline" className="data-[state=active]:bg-accent">
                      <Timer className="w-4 h-4 mr-2" />
                      Recruiter & Timeline
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="compensation" className="space-y-6 mt-6">
                    {/* Junior Hires */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <label className="text-sm text-muted-foreground">Junior Hires</label>
                        </div>
                        <span className="text-sm text-blue-400 font-semibold">{juniorHires}</span>
                      </div>
                      <Slider
                        value={[juniorHires]}
                        onValueChange={(v: number[]) => setJuniorHires(v[0])}
                        max={20}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Senior Hires */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-green-400" />
                          <label className="text-sm text-muted-foreground">Senior Hires</label>
                        </div>
                        <span className="text-sm text-green-400 font-semibold">{seniorHires}</span>
                      </div>
                      <Slider
                        value={[seniorHires]}
                        onValueChange={(v: number[]) => setSeniorHires(v[0])}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Junior CTC */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-blue-400" />
                          <label className="text-sm text-muted-foreground">Junior CTC (L)</label>
                        </div>
                        <span className="text-sm text-blue-400 font-semibold">{juniorCTC}</span>
                      </div>
                      <Slider
                        value={[juniorCTC]}
                        onValueChange={(v: number[]) => setJuniorCTC(v[0])}
                        max={50}
                        min={10}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Senior CTC */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <label className="text-sm text-muted-foreground">Senior CTC (L)</label>
                        </div>
                        <span className="text-sm text-green-400 font-semibold">{seniorCTC}</span>
                      </div>
                      <Slider
                        value={[seniorCTC]}
                        onValueChange={(v: number[]) => setSeniorCTC(v[0])}
                        max={100}
                        min={20}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="timeline" className="space-y-6 mt-6">
                    {/* Recruiter Cost */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-purple-400" />
                          <label className="text-sm text-muted-foreground">Recruiter Cost (L)</label>
                        </div>
                        <span className="text-sm text-purple-400 font-semibold">{monthlyRecruiterCost.toFixed(1)}</span>
                      </div>
                      <Slider
                        value={[monthlyRecruiterCost]}
                        onValueChange={(v: number[]) => setMonthlyRecruiterCost(v[0])}
                        max={5}
                        min={0.5}
                        step={0.1}
                        className="w-full"
                      />
                    </div>

                    {/* Number of Recruiters */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-purple-400" />
                          <label className="text-sm text-muted-foreground">Number of Recruiters</label>
                        </div>
                        <span className="text-sm text-purple-400 font-semibold">{numRecruiters}</span>
                      </div>
                      <Slider
                        value={[numRecruiters]}
                        onValueChange={(v: number[]) => setNumRecruiters(v[0])}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Human vs OrcHire Closure Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4 text-red-400" />
                            <label className="text-sm text-muted-foreground">Human (mo)</label>
                          </div>
                          <span className="text-sm text-red-400 font-semibold">{humanClosure}</span>
                        </div>
                        <Slider
                          value={[humanClosure]}
                          onValueChange={(v: number[]) => setHumanClosure(v[0])}
                          max={12}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4 text-green-400" />
                            <label className="text-sm text-muted-foreground">OrcHire (mo)</label>
                          </div>
                          <span className="text-sm text-green-400 font-semibold">{cohyreClosure}</span>
                        </div>
                        <Slider
                          value={[cohyreClosure]}
                          onValueChange={(v: number[]) => setCohyreClosure(v[0])}
                          max={12}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* OrcHire Cost */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-green-400" />
                          <label className="text-sm text-muted-foreground">OrcHire Cost (L/mo)</label>
                        </div>
                        <span className="text-sm text-green-400 font-semibold">{cohyreCost.toFixed(2)}</span>
                      </div>
                      <Slider
                        value={[cohyreCost]}
                        onValueChange={(v: number[]) => setCohyreCost(v[0])}
                        max={5}
                        min={0.5}
                        step={0.01}
                        className="w-full"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto pt-4">
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Results
                  </Button>
                </div>
              </Card>

              {/* Right Column - Your ROI with OrcHire */}
              <Card className="bg-card border p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Your ROI with OrcHire</h2>
                </div>

                {/* Main Savings Display */}
                <div className="border rounded-2xl p-6 mb-2 text-center" style={metricCardStyles.green}>
                  <div className="text-muted-foreground text-sm font-medium mb-2">
                    Annual Savings Potential
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                    {annualSavingsRupees}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <ArrowUp className="w-4 h-4" />
                    <span className="text-sm">{roiPercentSecond}% ROI</span>
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <Card className="border p-3" style={metricCardStyles.blue}>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-black dark:text-white" />
                      <span className="text-xs text-muted-foreground">Time Reduction</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{Math.round(timeReductionDays)} days</div>
                    <div className="text-xs text-muted-foreground">Faster time-to-hire</div>
                  </Card>

                  <Card className="border p-3" style={metricCardStyles.purple}>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-black dark:text-white" />
                      <span className="text-xs text-muted-foreground">Efficiency Gain</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{efficiencyGainX}x</div>
                    <div className="text-xs text-muted-foreground">Recruiter productivity increase</div>
                  </Card>

                  <Card className="border p-3" style={metricCardStyles.orange}>
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-black dark:text-white" />
                      <span className="text-xs text-muted-foreground">Quality Improvement</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">+{qualityImprovementPct}%</div>
                    <div className="text-xs text-muted-foreground">Better hire quality scores</div>
                  </Card>

                  <Card className="border p-3" style={metricCardStyles.red}>
                    <div className="flex items-center gap-2 mb-1">
                      <ArrowUp className="w-4 h-4 text-black dark:text-white" />
                      <span className="text-xs text-muted-foreground">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{roiPercentSecond}%</div>
                    <div className="text-xs text-muted-foreground">Return on investment</div>
                  </Card>
                </div>
              </Card>
            </div>

            {/* Chart Section Below */}
            <Card className="mt-8 p-8 border bg-card/50 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent leading-relaxed pb-1">
                  Cost Comparison Visualization
                </h3>
              </div>
              <div className="h-[400px] p-4">
                <Bar data={chartDataSecond} options={chartOptionsSecond} />
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                <p className="text-center text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-green-400">Annual Savings: {annualSavingsRupees}</span> • 
                  Transform your hiring process and save significantly on annual costs while improving efficiency.
                </p>
              </div>
            </Card>
          </div>

          {/* Working Smarter, Not Harder */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-6 leading-relaxed pb-2">
              Working Smarter, Not Harder
            </h2>
            <div className="prose prose-lg max-w-none text-center dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-lg">
                This increased capacity doesn't just save your clients money; it directly builds your revenue stream. By automating the mundane tasks of resume screening and initial follow-ups, OrcHire frees up your recruiters to focus on high-value, revenue-generating activities like client relationship management and closing deals. This is about working smarter, not harder. Instead of spending 80% of their time on resume screening, they can spend 80% of their time on revenue-generating activities.
              </p>
            </div>
          </Card>

          {/* The Financial Case Calculator */}
          <Card className="p-8 bg-gradient-to-br from-[#0C8EFF]/10 via-[#9F62ED]/10 to-[#0C8EFF]/10 backdrop-blur-sm border border-[#9F62ED]/30 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-8 leading-relaxed pb-2">
              The Financial Case
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Revenue Parameters */}
              <Card className="bg-card border p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Revenue Parameters</h3>
                </div>

                <div className="space-y-3 flex-1">
                  {/* Current Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Current Metrics
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="p-3 bg-muted/30 rounded-lg border">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-muted-foreground">Monthly Hires</span>
                          </div>
                          <span className="text-lg font-semibold text-blue-400">{monthlyHires}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-muted/30 rounded-lg border">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-muted-foreground">Average CTC</span>
                          </div>
                          <span className="text-lg font-semibold text-green-400">{avgCTC.toFixed(2)}L</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-purple-400" />
                            <label className="text-sm text-muted-foreground">Commission Rate</label>
                          </div>
                          <span className="text-sm text-purple-400 font-semibold">{commissionRate.toFixed(2)}%</span>
                        </div>
                        <Slider
                          value={[commissionRate]}
                          onValueChange={(v: number[]) => setCommissionRate(v[0])}
                          max={25}
                          min={5}
                          step={0.01}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>5%</span>
                          <span>25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Right Column - Financial Results */}
              <Card className="bg-card border p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Financial Results</h3>
                </div>

                {/* Financial Metric Cards - 3 boxes only, more compact */}
                <div className="grid grid-cols-1 gap-3 flex-1">
                  <Card className="backdrop-blur-sm p-3" style={{ backgroundColor: 'rgba(12, 142, 255, 0.25)', borderColor: 'rgba(12, 142, 255, 0.5)' }}>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <DollarSign className="w-4 h-4 text-blue-400" />
                        <h4 className="text-sm font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent leading-relaxed pb-1">
                          Aggregate CTC
                        </h4>
                      </div>
                      <p className="text-xl font-bold text-foreground">{formatCurrencySecond(aggregateCTC)}</p>
                      <p className="text-xs text-muted-foreground mt-1">Total compensation value</p>
                    </div>
                  </Card>

                  <Card className="backdrop-blur-sm p-3" style={{ backgroundColor: 'rgba(159, 98, 237, 0.25)', borderColor: 'rgba(159, 98, 237, 0.5)' }}>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                        <h4 className="text-sm font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent leading-relaxed pb-1">
                          Monthly Revenue
                        </h4>
                      </div>
                      <p className="text-xl font-bold text-foreground">{formatCurrencySecond(monthlyRevenue)}</p>
                      <p className="text-xs text-muted-foreground mt-1">Agency revenue stream</p>
                    </div>
                  </Card>

                  <Card className="backdrop-blur-sm p-3" style={{ backgroundColor: 'rgba(34, 197, 94, 0.25)', borderColor: 'rgba(34, 197, 94, 0.5)' }}>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-green-400" />
                        <h4 className="text-sm font-bold bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent leading-relaxed pb-1">
                          OrcHire % of CTC
                        </h4>
                      </div>
                      <p className="text-xl font-bold text-foreground">{cohyreCostAsPercentOfCTC.toFixed(2)}%</p>
                      <p className="text-xs text-muted-foreground mt-1">Extremely cost-effective</p>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>
          </Card>

          {/* Beyond the Numbers */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-8 leading-relaxed pb-2">
              Beyond the Numbers: The True Value of OrcHire
            </h2>
            
            <div className="space-y-8">
              <div className="p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4 text-center leading-relaxed pb-1">
                  The Ultimate Pain Killer
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Traditional ATS and manual screening are costly, time-consuming, and prone to human error. OrcHire acts as a pain killer by automating the most laborious parts of the hiring process, freeing up your team to focus on what matters: building relationships and closing deals.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-muted">
                <h3 className="text-2xl font-semibold text-green-400 mb-4 text-center leading-relaxed pb-1">
                  The Net Margin Builder
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  OrcHire helps you build your net margins. By providing an intelligence layer on top of your existing data sources (like ATS or Google Drive), the technology's "intelligence layer" would transform an agency from a reactive service provider to a proactive, data-driven partner. Costing less than 1% of the average CTC you're earning revenue on, we dramatically increase the efficiency and profitability of your operations. It's not just a cost-saver; it's a revenue engine.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 text-center leading-relaxed pb-1">
                  Scalability
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  With the core screening process automated, the agency's capacity to handle a higher volume of open roles would increase significantly without a proportional increase in headcount. This makes the business highly scalable and more profitable in the long run.
                </p>
              </div>
            </div>
          </Card>

          {/* Building Your Competitive Moat */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-6 leading-relaxed pb-2">
              Building Your Competitive Moat: A Strategic Advantage Your Rivals Cannot Match
            </h2>
            <div className="prose prose-lg max-w-none text-center dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-lg">
                The numbers tell a powerful story of efficiency and profitability, but the true value of OrcHire extends beyond your balance sheet. By adopting our platform, you are not just optimizing your operations; you are building a durable competitive advantage—a "moat" around your business.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Your competitors are still operating with a linear growth model. Their capacity to scale is limited by their ability to hire, train, and retain a larger workforce. The OrcHire + Recruiter model breaks this constraint. Your ability to source and close at a faster, higher volume will become your greatest sales tool.
              </p>
            </div>
          </Card>

          {/* The Growth Flywheel */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0C8EFF] to-[#9F62ED] bg-clip-text text-transparent mb-6 leading-relaxed pb-2">
              The Growth Flywheel: Powering Your Success
            </h2>
            <div className="prose prose-lg max-w-none text-center dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-lg">
                In short, OrcHire's magic is its ability to create a powerful flywheel. You save your clients a huge amount of money by eliminating vacancy costs, which makes them want to work with you more. This increased demand is met by your newly optimized and efficient team, which can handle more placements and build your revenue. You simultaneously become the most financially responsible partner for your clients and the most profitable business in your industry.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}