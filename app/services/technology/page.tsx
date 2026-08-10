import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicePages } from "@/data/services";

const service = servicePages.technology;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: "/services/technology" } };

export default function TechnologyPage() {
  return <><Navbar /><ServiceDetail slug="technology" /><Footer /></>;
}
