import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import StructuredData from "@/components/structured-data";
import { Providers } from "./providers";
import { siteKeywords } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | MO FERHI",
    default: "MO FERHI - Senior Data Analyst/Data Scientist & Software Engineer",
  },
  description:
    "Senior Data Analyst/Data Scientist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics. Proven expertise in transforming raw data into actionable insights to solve business problems and support data-driven decision-making. Contributed to an annual cost savings of over 200 million dinars and improved operational forecasting accuracy by 20% through statistical modeling.",
  icons: {
    icon: "/headshot/headshot-2024.jpg",
    apple: "/headshot/headshot-2024.jpg",
  },
  openGraph: {
    type: "website",
    title: "MO FERHI - Senior Data Analyst & Software Engineer",
    description:
      "Senior Data Analyst/Data Scientist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics.",
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
    title: "MO FERHI - Senior Data Analyst & Software Engineer",
    description:
      "Senior Data Analyst/Data Scientist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics.",
    images: ["/screenshots/hero-preview.png"],
  },
  keywords: siteKeywords,
  authors: [{ name: "MO FERHI" }],
  creator: "MO FERHI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">{children}</main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
