import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeaturedWork, WorkHero, Explorations, WorkCTA } from "@/components/work/WorkPageSections";

export const metadata: Metadata = {
  title: "Selected Work — Orivox",
  description: "A curated portfolio of Orivox work, featuring Dominion Well and selected concept explorations.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <main className="work-page">
    <Navbar />
    <WorkHero />
    <FeaturedWork />
    <Explorations />
    <WorkCTA />
    <Footer />
  </main>;
}
