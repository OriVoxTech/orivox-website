import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandRail } from "@/components/home/BrandRail";
import { BuiltDifferently } from "@/components/home/Credibility";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Services } from "@/components/home/Services";
import { WhyOrivox } from "@/components/home/WhyOrivox";
import { HashScroller } from "@/components/utils/HashScroller";

export default function Home() {
  return (
    <main>
      <HashScroller />
      <Navbar />
      <Hero />
      <BrandRail />
      <Intro />
      <Services />
      <Process />
      <SelectedWork />
      <WhyOrivox />
      <BuiltDifferently />
      <FinalCTA />
      <Footer />
    </main>
  );
}
