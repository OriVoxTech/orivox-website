import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicePages } from "@/data/services";

const service = servicePages["digital-products"];
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: "/services/digital-products" } };

export default function DigitalProductsPage() {
  return <><Navbar /><ServiceDetail slug="digital-products" /><Footer /></>;
}
