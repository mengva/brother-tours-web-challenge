// ─────────────────────────────────────────────────────────────
// Structured data (JSON-LD) generators.
// Feeds SEO (rich results), AEO (answer boxes), and GEO
// (AI search engines like ChatGPT/Perplexity/Google AI Overviews
// read JSON-LD directly — it's the cleanest signal we can give them).
// ─────────────────────────────────────────────────────────────

import { DestinationDto } from "@/types/destination";
import { TourDto } from "@/types/tour";
import { ORG_NAME, SITE_URL } from "@/utils/variable";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

const formatUrl = (path: string) => {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const cleanBase = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
  return `${cleanBase}${cleanPath}`;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: ORG_NAME,
    url: SITE_URL,
    logo: formatUrl("/logo.png"),
    sameAs: [
      "https://www.facebook.com/brothertours",
      "https://www.instagram.com/brothertours",
    ],
  };
}

/**
 * Generates Schema.org TouristDestination structured data
 */
export function destinationSchema(destination: DestinationDto) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.description,
    image: destination.heroImage,
    url: formatUrl(`/destinations/${destination.slug}`),
    ...(destination.popularSpots &&
      destination.popularSpots.length > 0 && {
        includesAttraction: destination.popularSpots.map((spot) => ({
          "@type": "TouristAttraction",
          name: spot,
        })),
      }),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: formatUrl(item.url),
    })),
  };
}

export function faqSchema(qa: FAQItem[]) {
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
export function tourSchema(tour: TourDto) {
  // Extract numbers from price string (e.g., "$1,250" -> "1250")
  const numericPrice = tour.price.replace(/[^0-9.]/g, "");

  // Extract days for ISO 8601 duration standard (e.g., "10 Days" -> "P10D")
  const durationMatch = tour.duration.match(/\d+/);
  const durationDays = durationMatch ? durationMatch[0] : "1";

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description || "",
    image: tour.image,
    url: formatUrl(`/tours/${tour.id}`),
    touristType: ["Cultural Enthusiast", "Explorer"],
    duration: `P${durationDays}D`,
    provider: {
      "@type": "TravelAgency",
      name: ORG_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: numericPrice,
      availability: "https://schema.org/InStock",
      url: formatUrl(`/tours/${tour.id}`),
    },
    ...(tour.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: tour.rating,
        reviewCount: tour.reviews,
      },
    }),
    ...(tour.itinerary && tour.itinerary.length > 0 && {
      itinerary: tour.itinerary.map((item) => ({
        "@type": "ListItem",
        position: item.day,
        name: `Day ${item.day}: ${item.title}`,
        description: item.description,
      })),
    }),
  };
}