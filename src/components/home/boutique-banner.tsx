import Image from "next/image";
import Link from "next/link";

import { boutiqueImage } from "@/lib/catalog";

export function BoutiqueBanner() {
  return (
    <section
      className="relative isolate flex min-h-[70svh] items-center justify-center overflow-hidden text-center text-white"
      aria-labelledby="boutique-title"
    >
      <Image src={boutiqueImage.src} alt={boutiqueImage.alt} fill sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-scrim" />

      <div className="container-prose flex flex-col items-center gap-4 py-section">
        <p className="type-label">Private appointments</p>
        <h2 id="boutique-title" className="type-display">
          Discover the collection in person, with a dedicated client advisor
        </h2>
        <Link href="/appointments" className="btn btn-light mt-4">
          Book an appointment
        </Link>
      </div>
    </section>
  );
}
