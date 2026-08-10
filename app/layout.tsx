import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://orivox.online"),
  title: "Orivox — Building What’s Next",
  description: "Orivox is a full-service technology company creating websites, mobile applications, software, digital products, brand identities and growth solutions.",
  alternates: { canonical: "/" },
  icons: { icon: "/Orivox Favicon.svg", shortcut: "/Orivox Favicon.svg", apple: "/Orivox Favicon.svg" },
  openGraph: {
    title: "Orivox — Building What’s Next",
    description: "Strategy, design, technology and growth for ambitious businesses.",
    url: "/",
    siteName: "Orivox",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Orivox — Building What’s Next", description: "Strategy, design, technology and growth for ambitious businesses." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
