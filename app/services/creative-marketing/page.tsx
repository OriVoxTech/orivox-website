import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicePages } from "@/data/services";

const service = servicePages["creative-marketing"];
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: "/services/creative-marketing" } };

export default function CreativeMarketingPage() {
  return <><Navbar /><ServiceDetail slug="creative-marketing" /><Footer /></>;
}
