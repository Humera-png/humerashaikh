"use client";

import { useMemo, useState } from "react";
import MagneticButton from "./MagneticButton";

const DEFAULTS = { hours: 8, salary: 35, cost: 5000, errors: 2, errorCost: 50 };

function gbp(n: number) {
  return "£" + Math.round(n).toLocaleString("en-GB");
}

export default function ROICalculator() {
  const [hours, setHours] = useState(DEFAULTS.hours);
  const [salary, setSalary] = useState(DEFAULTS.salary);
  const [cost, setCost] = useState(DEFAULTS.cost);
  const [errors, setErrors] = useState(DEFAULTS.errors);
  const [errorCost, setErrorCost] = useState(DEFAULTS.errorCost);

  const results = useMemo(() => {
    const weeksPerYear = 52;
    const timeCost = hours * salary * weeksPerYear;
    const errorsCost = errors * errorCost * weeksPerYear;
    const totalAnnualCost = timeCost + errorsCost;

    const paybackMonths = cost > 0 ? Math.round((cost / (totalAnnualCost / 12)) * 10) / 10 : 0;
    const monthlyMaintenance = cost / 120;
    const annualMaintenance = monthlyMaintenance * 12;
    const annualSavings = totalAnnualCost - annualMaintenance;
    const threeYearBenefit = annualSavings * 3 - cost;

    let tier: { label: string; text: string; tone: "good" | "moderate" | "poor" };
    if (paybackMonths <= 3) {
      tier = {
        label: "Strong ROI — automate now",
        text: `You'd break even in ${paybackMonths} months and save ${gbp(annualSavings)} a year after that. This is a straightforward investment.`,
        tone: "good",
      };
    } else if (paybackMonths <= 6) {
      tier = {
        label: "Good ROI — worth prioritizing",
        text: `Payback in ${paybackMonths} months with solid annual savings. Worth moving on this year.`,
        tone: "good",
      };
    } else if (paybackMonths <= 12) {
      tier = {
        label: "Moderate ROI — worth considering",
        text: `Payback in ${paybackMonths} months. Good long-term value, but weigh it against budget and other priorities.`,
        tone: "moderate",
      };
    } else {
      tier = {
        label: "Long payback — think it through",
        text: `Payback takes ${paybackMonths} months. Worth looking for a simpler automation, or addressing a bigger bottleneck first.`,
        tone: "poor",
      };
    }

    return { timeCost, errorsCost, totalAnnualCost, paybackMonths, annualSavings, threeYearBenefit, tier };
  }, [hours, salary, cost, errors, errorCost]);

  function reset() {
    setHours(DEFAULTS.hours);
    setSalary(DEFAULTS.salary);
    setCost(DEFAULTS.cost);
    setErrors(DEFAULTS.errors);
    setErrorCost(DEFAULTS.errorCost);
  }

  const toneClasses = {
    good: "border-l-2 border-[#3F6B4E] text-[#3F6B4E]",
    moderate: "border-l-2 border-[#9C6B1E] text-[#9C6B1E]",
    poor: "border-l-2 border-[#A3402F] text-[#A3402F]",
  } as const;

  const fields = [
    {
      key: "hours",
      label: "Hours per week on this task",
      value: hours,
      set: setHours,
      min: 0.5,
      step: 0.5,
      prefix: null,
      suffix: "hrs/wk",
      helper: "Track actual time from start to finish, not the ideal case.",
    },
    {
      key: "salary",
      label: "Hourly rate (yours or a team member's)",
      value: salary,
      set: setSalary,
      min: 5,
      step: 5,
      prefix: "£",
      suffix: null,
      helper: "Example: £50K salary ÷ 1,800 hours ≈ £28/hour.",
    },
    {
      key: "cost",
      label: "Cost to automate",
      value: cost,
      set: setCost,
      min: 0,
      step: 500,
      prefix: "£",
      suffix: null,
      helper: "One-time setup cost, typically £3K–£8K.",
    },
    {
      key: "errors",
      label: "Errors or rework per week",
      value: errors,
      set: setErrors,
      min: 0,
      step: 1,
      prefix: null,
      suffix: "per wk",
      helper: "From manual mistakes: invoices, data entry, missed steps.",
    },
    {
      key: "errorCost",
      label: "Cost per error",
      value: errorCost,
      set: setErrorCost,
      min: 0,
      step: 10,
      prefix: "£",
      suffix: null,
      helper: "Lost time, customer impact, and the rework itself.",
    },
  ];

  return (
    <div className="px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <div className="mb-14 max-w-[640px]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Free Tool</p>
          <h1 className="font-display text-[34px] font-medium tracking-tight text-ink sm:text-[44px]">
            Automation ROI Calculator
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.7] text-muted">
            See exactly how much a manual task is really costing you, and how fast automating it would pay for
            itself. Numbers update as you type.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-7">
            {fields.map((f) => (
              <div key={f.key}>
                <label htmlFor={f.key} className="mb-2 block text-[14px] font-medium text-ink">
                  {f.label}
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 transition-colors focus-within:border-ink">
                  {f.prefix && <span className="text-[15px] font-medium text-muted">{f.prefix}</span>}
                  <input
                    id={f.key}
                    type="number"
                    inputMode="decimal"
                    value={f.value}
                    min={f.min}
                    step={f.step}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      f.set(Number.isFinite(v) ? Math.max(f.min, v) : f.min);
                    }}
                    className="w-full min-w-0 border-none bg-transparent text-[15px] font-medium text-ink outline-none"
                  />
                  {f.suffix && <span className="whitespace-nowrap text-[13px] font-medium text-muted">{f.suffix}</span>}
                </div>
                <p className="mt-1.5 text-[12.5px] italic text-muted">{f.helper}</p>
              </div>
            ))}

            <button onClick={reset} className="link-underline text-[13.5px] font-medium text-ink">
              Reset to defaults
            </button>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="min-w-0 rounded-xl bg-paper p-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Annual cost, manual
                </p>
                <p className="break-words font-display text-[26px] font-medium leading-tight text-ink sm:text-[30px]">
                  {gbp(results.totalAnnualCost)}
                </p>
                <p className="mt-1.5 text-[12.5px] leading-[1.5] text-muted">What this task costs you every year.</p>
              </div>
              <div className="min-w-0 rounded-xl bg-paper p-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">Annual savings</p>
                <p className="break-words font-display text-[26px] font-medium leading-tight text-ink sm:text-[30px]">
                  {gbp(results.annualSavings)}
                </p>
                <p className="mt-1.5 text-[12.5px] leading-[1.5] text-muted">After automation is deployed.</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-line bg-paper p-5">
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">Payback period</p>
              <p className="break-words font-display text-[24px] font-medium text-ink">
                {results.paybackMonths} {results.paybackMonths === 1 ? "month" : "months"}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-[1.5] text-muted">Until the automation pays for itself.</p>
            </div>

            <div className={`mt-5 rounded-xl bg-paper py-4 pl-5 pr-5 ${toneClasses[results.tier.tone]}`}>
              <p className="mb-1.5 text-[14px] font-semibold">{results.tier.label}</p>
              <p className="text-[13.5px] leading-[1.6] text-ink/80">{results.tier.text}</p>
            </div>

            <div className="mt-5 rounded-xl bg-paper p-5">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">3-year benefit</p>
              <p className="break-words font-display text-[24px] font-medium text-ink">
                {gbp(results.threeYearBenefit)}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-[1.5] text-muted">
                Total savings over 3 years, minus the setup cost.
              </p>
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">Cost breakdown</p>
              <div className="space-y-2.5 text-[13.5px]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted">Manual task time</span>
                  <span className="font-medium text-ink">{gbp(results.timeCost)}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted">Errors / rework</span>
                  <span className="font-medium text-ink">{gbp(results.errorsCost)}</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-line pt-2.5 font-semibold">
                  <span className="text-ink">Total annual waste</span>
                  <span className="text-ink">{gbp(results.totalAnnualCost)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-line pt-8">
          <p className="text-[14px] text-muted">
            Built by <span className="font-medium text-ink">Humera Shaikh</span>. Have a process worth automating?
          </p>
          <MagneticButton href="https://calendly.com/humerashaikhh605">Book a Strategy Call</MagneticButton>
        </div>
      </div>
    </div>
  );
}
