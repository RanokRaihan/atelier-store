import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/home/section-heading";
import { categories } from "@/lib/catalog";

export function CategoryGrid() {
  return (
    <section className="pt-section" aria-labelledby="categories-title">
      <SectionHeading id="categories-title" title="Shop by category" />
      <ul className="grid grid-cols-2 gap-px lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link href={`/${category.slug}`} className="group block">
              <div className="media aspect-product">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  fill
                  sizes="(min-width: 64rem) 25vw, 50vw"
                  className="transition-transform duration-700 ease-standard group-hover:scale-[1.03]"
                />
              </div>
              <p className="type-small py-4 text-center group-hover:underline group-hover:underline-offset-4">
                {category.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
