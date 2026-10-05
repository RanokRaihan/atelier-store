import Image from "next/image";
import Link from "next/link";

import { featuredCollection, formatPrice, getProduct, type Product } from "@/lib/catalog";

export function FeaturedCollection() {
  const collection = featuredCollection;
  const looks = collection.productSlugs.map(getProduct).filter((product): product is Product => !!product);

  return (
    <section className="split bg-surface" aria-labelledby="featured-collection-title">
      <div className="media aspect-portrait">
        <Image src={collection.image.src} alt={collection.image.alt} fill sizes="(min-width: 48rem) 50vw, 100vw" />
      </div>

      <div className="flex flex-col justify-center px-gutter py-section">
        <div className="mx-auto w-full max-w-md">
          <p className="type-label text-muted">{collection.eyebrow}</p>
          <h2 id="featured-collection-title" className="type-headline mt-3">
            {collection.name}
          </h2>
          <p className="type-body-lg mt-4 text-muted">{collection.description}</p>

          <h3 className="type-label mt-10">Shop the look</h3>
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {looks.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="group flex items-center gap-4 py-3">
                  <div className="media aspect-product w-16 shrink-0">
                    <Image src={product.image.src} alt="" fill sizes="64px" />
                  </div>
                  <span className="type-small flex-1 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </span>
                  <span className="type-small price">{formatPrice(product.price)}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href={`/collections/${collection.slug}`} className="btn btn-primary btn-block mt-8">
            Explore the collection
          </Link>
        </div>
      </div>
    </section>
  );
}
