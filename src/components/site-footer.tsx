import Link from "next/link";

const columns = [
  {
    title: "Client services",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns & exchanges", href: "/returns" },
      { label: "Book an appointment", href: "/appointments" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Women", href: "/women" },
      { label: "Men", href: "/men" },
      { label: "Handbags", href: "/handbags" },
      { label: "Gifts", href: "/gifts" },
    ],
  },
  {
    title: "The house",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Craftsmanship", href: "/craftsmanship" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="divider mt-auto">
      <div className="container-page section grid gap-10 md:grid-cols-4">
        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="type-label">{column.title}</h2>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="type-small link-quiet text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="type-label">Location</h2>
          <p className="type-small mt-4 text-muted">United States · English</p>
          <Link href="/locale" className="type-small link mt-3 inline-block">
            Change
          </Link>
        </div>
      </div>

      <div className="container-page divider flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
        <span className="wordmark">Atelier</span>
        <p className="type-micro text-subtle">
          © {new Date().getFullYear()} Atelier Store. Sample storefront for demonstration.
        </p>
      </div>
    </footer>
  );
}
