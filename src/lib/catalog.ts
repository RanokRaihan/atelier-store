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
    badge: "New",
    image: {
      src: unsplash("photo-1691480150204-66dd1eb77391", 1000),
      alt: "Tan leather tote bag",
    },
  },
  {
    slug: "structured-top-handle",
    name: "Structured top handle bag",
    category: "Handbags",
    price: 2890,
    image: {
      src: unsplash("photo-1691480250099-a63081ecfcb8", 1000),
      alt: "Brown structured top handle bag",
    },
  },
  {
    slug: "patent-slingback",
    name: "Patent leather slingback",
    category: "Shoes",
    price: 950,
    badge: "New",
    image: {
      src: unsplash("photo-1789110519431-0a9bf0af5074", 1000),
      alt: "Black patent leather slingback shoe",
    },
  },
  {
    slug: "suede-driving-loafer",
    name: "Suede driving loafer",
    category: "Shoes",
    price: 890,
    image: {
      src: unsplash("photo-1662541089338-c7d53b88be70", 1000),
      alt: "Pair of tan suede driving loafers",
    },
  },
  {
    slug: "acetate-sunglasses",
    name: "Square acetate sunglasses",
    category: "Eyewear",
    price: 430,
    image: {
      src: unsplash("photo-1584036553516-bf83210aa16c", 1000),
      alt: "Black acetate sunglasses",
    },
  },
  {
    slug: "grained-leather-belt",
    name: "Grained leather belt",
    category: "Accessories",
    price: 520,
    image: {
      src: unsplash("photo-1711443982852-b3df5c563448", 1000),
      alt: "Two brown leather belts",
    },
  },
  {
    slug: "eau-de-parfum",
    name: "Eau de parfum, 100 ml",
    category: "Fragrance",
    price: 310,
    badge: "Exclusive",
    image: {
      src: unsplash("photo-1612871178341-33f941a841e3", 1000),
      alt: "Clear glass perfume bottle with a gold cap",
    },
  },
  {
    slug: "steel-chronograph-watch",
    name: "Steel chronograph watch",
    category: "Watches",
    price: 3200,
    image: {
      src: unsplash("photo-1694598152256-a346298ae0b5", 1000),
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
