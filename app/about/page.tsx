import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { StoryAndPrinciples } from "@/components/about/StoryAndPrinciples";
import { Founders } from "@/components/about/Founders";
import { Collaboration } from "@/components/about/Collaboration";
import { ValuesAndAudience } from "@/components/about/ValuesAndAudience";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Orivox — Technology, Design & Growth",
  description: "Learn about Orivox, a technology and creative company bringing strategy, design, engineering, branding and growth together to build ambitious digital products and brands.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Orivox — Technology, Design & Growth",
    description: "Strategy, design, engineering, branding and growth—working as one connected team.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <main className="about-page">
    <Navbar />
    <AboutHero />
    <StoryAndPrinciples />
    <Founders />
    <Collaboration />
    <ValuesAndAudience />
    <AboutCTA />
    <Footer />
  </main>;
}
