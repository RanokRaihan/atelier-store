import { BoutiqueBanner } from "@/components/home/boutique-banner";
import { CategoryGrid } from "@/components/home/category-grid";
import { EditorialSplit } from "@/components/home/editorial-split";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { Hero } from "@/components/home/hero";
import { NewArrivals } from "@/components/home/new-arrivals";
import { Newsletter } from "@/components/home/newsletter";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container-prose section text-center" aria-label="Introduction">
        <p className="type-display">
          Made in small runs by a single workshop: leather goods, tailoring and accessories designed to be worn for
          decades.
        </p>
      </section>
      <EditorialSplit />
      <NewArrivals />
      <FeaturedCollection />
      <CategoryGrid />
      <BoutiqueBanner />
      <Services />
      <Newsletter />
    </>
  );
}
