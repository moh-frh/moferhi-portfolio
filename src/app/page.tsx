import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "MO FERHI - Data Analyst/Data Scientist & AI Specialist",
  description:
    "Results-driven Data Analyst/Data Scientist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics. Proven expertise in transforming raw data into actionable insights to solve business problems and support data-driven decision-making. Contributed to an annual cost savings of over 200 million dinars and improved operational forecasting accuracy by 20% through statistical modeling.",
  openGraph: {
    type: "website",
    title: "MO FERHI - Data Analyst/Data Scientist & AI Specialist",
    description:
      "Results-driven Data Analyst/Data Scientist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics. Proven expertise in transforming raw data into actionable insights to solve business problems and support data-driven decision-making.",
    images: [
      {
        url: "/screenshots/hero-preview.png",
        width: 1200,
        height: 630,
        alt: "MO FERHI - Portfolio Hero Section",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MO FERHI - Data Analyst/Data Scientist & AI Specialist",
    description:
      "Results-driven Data Analyst/Data Scientist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics. Proven expertise in transforming raw data into actionable insights to solve business problems and support data-driven decision-making.",
    images: ["/screenshots/hero-preview.png"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
