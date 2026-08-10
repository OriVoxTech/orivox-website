import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicePages } from "@/data/services";

const service = servicePages.branding;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: "/services/branding" } };

export default function BrandingPage() {
  return <><Navbar /><ServiceDetail slug="branding" /><Footer /></>;
}
