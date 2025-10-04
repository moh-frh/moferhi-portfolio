import type { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - MO FERHI | Senior Data Scientist & Cloud Architect",
  description:
    "Learn more about MO FERHI, a Senior Data Analyst/Data Scientist and AI Specialist.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
