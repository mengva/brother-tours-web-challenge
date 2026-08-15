// ─────────────────────────────────────────────────────────────
// Structured data (JSON-LD) generators.
// Feeds SEO (rich results), AEO (answer boxes), and GEO
// (AI search engines like ChatGPT/Perplexity/Google AI Overviews
// read JSON-LD directly — it's the cleanest signal we can give them).
// ─────────────────────────────────────────────────────────────

const SITE_URL = "https://www.brothertours.com";
const ORG_NAME = "Brother Tours";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: ORG_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://www.facebook.com/brothertours",
      "https://www.instagram.com/brothertours",
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// Core schema for a tour page. Uses TouristTrip (the correct type for
// guided tour products) rather than generic Product.
export function tourSchema(tour: {
  name: string;
  slug: string;
  description: string;
  image: string;
  durationDays: number;
  priceFrom: number;
  currency: string;
  destination: string;
  ratingValue?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    image: tour.image,
    url: `${SITE_URL}/tours/${tour.destination}/${tour.slug}`,
    provider: {
      "@type": "TravelAgency",
      name: ORG_NAME,
      url: SITE_URL,
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: tour.durationDays,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: tour.currency,
      price: tour.priceFrom,
      availability: "https://schema.org/InStock",
    },
    ...(tour.ratingValue && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: tour.ratingValue,
        reviewCount: tour.reviewCount ?? 1,
      },
    }),
  };
}
