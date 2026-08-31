import type { Metadata } from "next";
import ROICalculator from "@/components/ROICalculator";

export const metadata: Metadata = {
  title: "Automation ROI Calculator | Humera Shaikh",
  description:
    "See exactly how much a manual task is costing you, and how fast automating it would pay for itself.",
};

export default function ROICalculatorPage() {
  return <ROICalculator />;
}
