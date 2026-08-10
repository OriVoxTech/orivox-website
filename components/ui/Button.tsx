import Link from "next/link";

export function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "text" }) {
  return <Link href={href} className={`button button--${variant}`}><span>{children}</span><span aria-hidden="true" className="button__arrow">↗</span></Link>;
}
