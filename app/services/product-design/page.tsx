import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicePages } from "@/data/services";

const service = servicePages["product-design"];
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: "/services/product-design" } };

export default function ProductDesignPage() {
  return <><Navbar /><ServiceDetail slug="product-design" /><Footer /></>;
}
