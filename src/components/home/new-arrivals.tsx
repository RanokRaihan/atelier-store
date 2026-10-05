import { SectionHeading } from "@/components/home/section-heading";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/catalog";

export function NewArrivals() {
  return (
    <section className="pt-section" aria-labelledby="new-arrivals-title">
      <SectionHeading id="new-arrivals-title" title="New arrivals" action={{ label: "View all", href: "/new-arrivals" }} />
      <ul className="product-grid">
        {products.map((product, index) => (
          // Eight items fill 2- and 4-column rows; drop the last two in the 3-column range.
          <li key={product.slug} className={index >= 6 ? "md:max-lg:hidden" : undefined}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
