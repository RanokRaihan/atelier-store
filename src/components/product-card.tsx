import Image from "next/image";
import Link from "next/link";

import { formatPrice, type Product } from "@/lib/catalog";

// Width the card occupies in the 2 → 3 → 4 column product grid.
const productGridSizes = "(min-width: 64rem) 25vw, (min-width: 48rem) 33vw, 50vw";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block bg-background">
      <div className="media aspect-product">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes={productGridSizes}
          className="transition-transform duration-700 ease-standard group-hover:scale-[1.03]"
        />
        {product.badge && (
          <span className="type-micro absolute left-3 top-3 bg-background px-2 py-1">{product.badge}</span>
        )}
      </div>
      <div className="flex flex-col gap-1 px-3 pt-3 pb-8 md:pb-10">
        <h3 className="type-small group-hover:underline group-hover:underline-offset-4">{product.name}</h3>
        <p className="type-small price">{formatPrice(product.price)}</p>
        {product.stock <= 0 && <p className="type-small text-muted">Sold out</p>}
      </div>
    </Link>
  );
}
