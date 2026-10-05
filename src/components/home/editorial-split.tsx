import Image from "next/image";
import Link from "next/link";

import { editorialPanels } from "@/lib/catalog";

export function EditorialSplit() {
  return (
    <section className="split" aria-label="Shop women and men">
      {editorialPanels.map((panel) => (
        <Link key={panel.href} href={panel.href} className="group media aspect-editorial block text-white">
          <Image
            src={panel.image.src}
            alt={panel.image.alt}
            fill
            sizes="(min-width: 48rem) 50vw, 100vw"
            className="object-top transition-transform duration-1000 ease-standard group-hover:scale-[1.02]"
          />
          <div aria-hidden="true" className="scrim absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 pb-10 text-center md:pb-14">
            <h2 className="type-headline">{panel.title}</h2>
            <span className="btn btn-outline-light btn-sm">Shop now</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
