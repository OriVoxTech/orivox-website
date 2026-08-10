import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesApproach, ServicesCTA, ServicesDirectory, ServicesEngagement, ServicesEntryPoints, ServicesHero } from "@/components/services/ServicesLanding";

export const metadata: Metadata = {
  title: "Orivox Services — Technology, Design, Branding & Growth",
  description: "Explore Orivox services across digital products, websites, product design, branding, creative marketing and technology.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <main className="services-page">
    <Navbar />
    <ServicesHero />
    <ServicesApproach />
    <ServicesDirectory />
    <ServicesEntryPoints />
    <ServicesEngagement />
    <ServicesCTA />
    <Footer />
  </main>;
}
