import Link from "next/link";

export function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "text" }) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={`button button--${variant}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="button__arrow">↗</span>
    </Link>
  );
}
