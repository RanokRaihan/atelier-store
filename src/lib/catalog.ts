// Sample catalog data for the storefront until products are stored in the database.
// Imagery is from Unsplash (free to use under the Unsplash License).

export type CatalogImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  /** Units available to order; 0 means sold out. */
  stock: number;
  description: string;
  details: string[];
  image: CatalogImage;
  badge?: string;
};

export type Category = {
  slug: string;
  name: string;
  image: CatalogImage;
};

export type Collection = {
  slug: string;
  eyebrow: string;
  name: string;
  description: string;
  image: CatalogImage;
  productSlugs: string[];
};

function unsplash(photo: string, width = 4200): string {
  return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=80`;
}

export const heroImage: CatalogImage = {
  src: unsplash("photo-1713693210102-46d55c70983f", 4740),
  alt: "Model in a navy suit jacket against a plain grey studio wall",
};

export const boutiqueImage: CatalogImage = {
  src: unsplash("photo-1782834294716-8e28c18bdba6", 4740),
  alt: "Stone and marble boutique interior with a sweeping staircase",
};

export const editorialPanels = [
  {
    title: "Women",
    href: "/women",
    image: {
      src: unsplash("photo-1654765435666-72cb4e1f7ee3"),
      alt: "Model in an oversized black coat against a dark studio backdrop",
    },
  },
  {
    title: "Men",
    href: "/men",
    image: {
      src: unsplash("photo-1644269444230-c6d1f2722e10"),
      alt: "Model in a charcoal coat, scarf and trousers against a dark studio backdrop",
    },
  },
] satisfies { title: string; href: string; image: CatalogImage }[];

export const categories: Category[] = [
  {
    slug: "handbags",
    name: "Handbags",
    image: {
      src: unsplash("photo-1640901556395-f0e709c33494", 1000),
      alt: "Yellow leather handbag",
    },
  },
  {
    slug: "shoes",
    name: "Shoes",
    image: {
      src: unsplash("photo-1630407332126-70ebb700976b", 1000),
      alt: "Pair of pink peep-toe sandals",
    },
  },
  {
    slug: "eyewear",
    name: "Eyewear",
    image: {
      src: unsplash("photo-1608539733292-190446b22b83", 1000),
      alt: "Black framed sunglasses",
    },
  },
  {
    slug: "fragrance",
    name: "Fragrance",
    image: {
      src: unsplash("photo-1733660227163-01bc46e0d7d7", 1000),
      alt: "Amber perfume bottle resting on silk",
    },
  },
];

export const products: Product[] = [
  {
    slug: "soft-tote-tan",
    name: "Soft tote in tan leather",
    category: "Handbags",
    price: 2450,
    stock: 14,
    description:
      "A roomy, unstructured tote cut from a single hide of vegetable-tanned calfskin. It holds its shape when full and folds softly when empty, and the leather darkens to a deep honey with use.",
    details: [
      "Vegetable-tanned calfskin",
      "Unlined, with a detachable zip pouch",
      "Open top with magnetic closure",
      "W 40 × H 32 × D 14 cm",
      "Made in Italy",
    ],
    badge: "New",
    image: {
      src: unsplash("photo-1691480150204-66dd1eb77391", 2400),
      alt: "Tan leather tote bag",
    },
  },
  {
    slug: "structured-top-handle",
    name: "Structured top handle bag",
    category: "Handbags",
    price: 2890,
    stock: 2,
    description:
      "A compact top handle bag built on a hand-shaped frame. Edges are painted and burnished by hand in seven passes, and the interior is lined in suede.",
    details: [
      "Box calfskin with suede lining",
      "Rolled top handle and detachable shoulder strap",
      "Turn-lock closure in brushed brass",
      "W 26 × H 19 × D 11 cm",
      "Made in Italy",
    ],
    image: {
      src: unsplash("photo-1691480250099-a63081ecfcb8", 2400),
      alt: "Brown structured top handle bag",
    },
  },
  {
    slug: "patent-slingback",
    name: "Patent leather slingback",
    category: "Shoes",
    price: 950,
    stock: 9,
    description:
      "A pointed slingback with a 55 mm heel, cut from high-shine patent leather. The elasticated strap and padded footbed keep it comfortable from morning to evening.",
    details: [
      "Patent calfskin upper",
      "Leather lining and sole",
      "55 mm block heel",
      "Elasticated slingback strap",
      "Made in Spain",
    ],
    badge: "New",
    image: {
      src: unsplash("photo-1789110519431-0a9bf0af5074", 2400),
      alt: "Black patent leather slingback shoe",
    },
  },
  {
    slug: "suede-driving-loafer",
    name: "Suede driving loafer",
    category: "Shoes",
    price: 890,
    stock: 0,
    description:
      "A Blake-stitched driving loafer in supple suede, with a pebbled rubber sole that wraps up the heel. Unlined, so it moulds to the foot within days.",
    details: [
      "Calf suede upper",
      "Unlined construction",
      "Pebbled rubber sole",
      "Blake-stitched by hand",
      "Made in Portugal",
    ],
    image: {
      src: unsplash("photo-1662541089338-c7d53b88be70", 2400),
      alt: "Pair of tan suede driving loafers",
    },
  },
  {
    slug: "acetate-sunglasses",
    name: "Square acetate sunglasses",
    category: "Eyewear",
    price: 430,
    stock: 21,
    description:
      "Square frames cut from a block of Italian acetate, polished by hand for a deep, even shine. Category 3 lenses filter 100% of UVA and UVB light.",
    details: [
      "Mazzucchelli acetate frame",
      "Category 3 lenses, 100% UV protection",
      "Five-barrel hinges",
      "Leather case and cleaning cloth included",
      "Made in Italy",
    ],
    image: {
      src: unsplash("photo-1584036553516-bf83210aa16c", 2400),
      alt: "Black acetate sunglasses",
    },
  },
  {
    slug: "grained-leather-belt",
    name: "Grained leather belt",
    category: "Accessories",
    price: 520,
    stock: 17,
    description:
      "A 3 cm belt in full-grain leather with a naturally pebbled surface. The solid brass buckle is cast and finished by hand and will patina over time.",
    details: [
      "Full-grain calfskin",
      "Solid brass buckle",
      "Width 3 cm",
      "Five adjustment holes",
      "Made in England",
    ],
    image: {
      src: unsplash("photo-1711443982852-b3df5c563448", 2400),
      alt: "Two brown leather belts",
    },
  },
  {
    slug: "eau-de-parfum",
    name: "Eau de parfum, 100 ml",
    category: "Fragrance",
    price: 310,
    stock: 3,
    description:
      "A warm, woody eau de parfum built around Atlas cedar and smoked vetiver, lifted with bergamot and pink pepper. Long-lasting on skin and quiet on the room.",
    details: [
      "Top notes: bergamot, pink pepper",
      "Heart: iris, cedar",
      "Base: vetiver, ambergris, musk",
      "100 ml, refillable glass bottle",
      "Made in France",
    ],
    badge: "Exclusive",
    image: {
      src: unsplash("photo-1612871178341-33f941a841e3", 2400),
      alt: "Clear glass perfume bottle with a gold cap",
    },
  },
  {
    slug: "steel-chronograph-watch",
    name: "Steel chronograph watch",
    category: "Watches",
    price: 3200,
    stock: 1,
    description:
      "A 40 mm chronograph in brushed and polished steel, powered by a Swiss automatic movement with a 60-hour power reserve. Water resistant to 100 metres.",
    details: [
      "40 mm stainless steel case",
      "Swiss automatic chronograph movement",
      "Sapphire crystal, front and back",
      "Water resistant to 100 m",
      "Two-year international warranty",
    ],
    image: {
      src: unsplash("photo-1694598152256-a346298ae0b5", 2400),
      alt: "Steel chronograph watch on a white surface",
    },
  },
];

export const featuredCollection: Collection = {
  slug: "the-tailoring-edit",
  eyebrow: "Featured collection",
  name: "The Tailoring Edit",
  description:
    "Sharp shoulders, fluid trousers and quiet leather accents. A wardrobe built on precise cuts and materials that soften with wear.",
  image: {
    src: unsplash("photo-1614786269829-d24616faf56d"),
    alt: "Model in a black trouser suit and turtleneck against a plain studio backdrop",
  },
  productSlugs: [
    "structured-top-handle",
    "grained-leather-belt",
    "acetate-sunglasses",
  ],
};

export const services = [
  {
    title: "Complimentary shipping",
    body: "On every order, with signature delivery.",
  },
  { title: "Free returns", body: "Within 30 days, collected from your door." },
  { title: "Signature packaging", body: "Every piece arrives gift-ready." },
  {
    title: "Client advisors",
    body: "Styling advice by phone, chat or appointment.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

const priceFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return priceFormat.format(amount);
}

// At or below this many units, the product page shows a low-stock warning.
const lowStockThreshold = 3;

export type StockState = {
  status: "in-stock" | "low-stock" | "sold-out";
  label: string;
};

export function getStockState(product: Product): StockState {
  if (product.stock <= 0) return { status: "sold-out", label: "Sold out" };
  if (product.stock <= lowStockThreshold) return { status: "low-stock", label: `Only ${product.stock} left` };
  return { status: "in-stock", label: "In stock" };
}

/** Listing URL for a product category; matches the category grid's `/${slug}` links. */
export function categoryHref(category: string): string {
  return `/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

/** Same-category products first, then the rest of the catalog. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const others = products.filter((candidate) => candidate.slug !== product.slug);
  const sameCategory = others.filter((candidate) => candidate.category === product.category);
  const rest = others.filter((candidate) => candidate.category !== product.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
