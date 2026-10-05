import Image from "next/image";
import Link from "next/link";

import { heroImage } from "@/lib/catalog";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image src={heroImage.src} alt={heroImage.alt} fill preload sizes="100vw" className="object-[50%_30%]" />
      <div aria-hidden="true" className="scrim absolute inset-0" />

      <div className="container-page relative flex flex-col items-center gap-5">
        <p className="type-label">Autumn–Winter 2026</p>
        <h1 id="hero-title" className="type-display max-w-[18ch]">
          The new silhouette, cut in shadow and wool
        </h1>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link href="/collections/autumn-winter-2026" className="btn btn-light">
            Discover the collection
          </Link>
          <Link href="/men" className="btn btn-outline-light">
            Shop men
          </Link>
        </div>
      </div>
    </section>
  );
}
