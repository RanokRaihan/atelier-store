import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/home/section-heading";
import { AddToBag } from "@/components/product/add-to-bag";
import { StockStatus } from "@/components/product/stock-status";
import { ProductCard } from "@/components/product-card";
import {
  categoryHref,
  formatPrice,
  getProduct,
  getRelatedProducts,
  getStockState,
  products,
  services,
} from "@/lib/catalog";

// Only catalog slugs exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: { images: [{ url: product.image.src, alt: product.image.alt }] },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const stock = getStockState(product);
  const related = getRelatedProducts(product);

  return (
    <>
      <article className="lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="media aspect-portrait">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            preload
            sizes="(min-width: 64rem) 60vw, 100vw"
          />
          {product.badge && (
            <span className="type-micro absolute left-4 top-4 bg-background px-2 py-1">{product.badge}</span>
          )}
        </div>

        <div className="px-gutter py-10 lg:py-section">
          <div className="mx-auto w-full max-w-md lg:sticky lg:top-[calc(var(--header-height)+var(--section-space))]">
            <nav aria-label="Breadcrumb">
              <ol className="type-small flex flex-wrap gap-2 text-muted">
                <li>
                  <Link href="/" className="link-quiet hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={categoryHref(product.category)} className="link-quiet hover:text-foreground">
                    {product.category}
                  </Link>
                </li>
              </ol>
            </nav>

            <p className="type-label mt-8 text-muted">{product.category}</p>
            <h1 className="type-headline mt-2">{product.name}</h1>
            <p className="type-body-lg price mt-3">{formatPrice(product.price)}</p>

            <div className="mt-8 flex flex-col gap-4">
              <StockStatus stock={stock} />
              <AddToBag soldOut={stock.status === "sold-out"} />
            </div>

            <p className="type-body mt-6 text-muted">{product.description}</p>

            <div className="mt-10 border-b border-border">
              <Disclosure title="Details" open>
                <ul className="type-small flex flex-col gap-2 pb-6 text-muted">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </Disclosure>
              <Disclosure title="Delivery & returns">
                <ul className="flex flex-col gap-4 pb-6">
                  {services.map((service) => (
                    <li key={service.title}>
                      <h3 className="type-small font-semibold">{service.title}</h3>
                      <p className="type-small text-muted">{service.body}</p>
                    </li>
                  ))}
                </ul>
              </Disclosure>
            </div>
          </div>
        </div>
      </article>

      <section className="divider pt-section" aria-labelledby="related-title">
        <SectionHeading id="related-title" title="You may also like" />
        <ul className="product-grid">
          {related.map((item, index) => (
            // Four items fill 2- and 4-column rows; drop the last one in the 3-column range.
            <li key={item.slug} className={index >= 3 ? "md:max-lg:hidden" : undefined}>
              <ProductCard product={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function Disclosure({ title, open, children }: { title: string; open?: boolean; children: ReactNode }) {
  return (
    <details className="group divider" open={open}>
      <summary className="type-label flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
        {title}
        <span aria-hidden="true" className="text-base font-normal group-open:hidden">
          +
        </span>
        <span aria-hidden="true" className="hidden text-base font-normal group-open:inline">
          −
        </span>
      </summary>
      {children}
    </details>
  );
}
