import type { Metadata } from "next";
import HeroBannerTravelGuidePage from "@/components/travel-guide/HeroBanner";
import QuickEssentialsGridTravelGuidePage from "@/components/travel-guide/QuickEssentialsGrid";
import FeaturedGuidesPage from "@/components/travel-guide/FeaturedGuides";
import TravelFaqTravelGuidePage from "@/components/travel-guide/TravelFaq";
import CtaBannerTravelGuidePage from "@/components/travel-guide/CtaBanner";
import { SITE_URL } from "@/utils/variable";
import { breadcrumbSchema, faqSchema } from "@/utils/schema";
import JsonLd from "@/components/seo/JsonLd";
import { travelGuidesFaqLists } from "@/data/travel-guide";

export const metadata: Metadata = {
  title: "Laos Travel Guide & Essential Tips 2026 | Brother Tour",
  description:
    "Complete Laos travel guide by local experts. Discover LCR high-speed train booking tips, best season to visit, visa requirements, currency advice, and top itineraries.",
  alternates: { canonical: "/travel-guide" },
  openGraph: {
    title: "Laos Travel Guide & Insider Tips | Brother Tour",
    description:
      "Everything you need to know before visiting Laos. High-speed train guides, top destinations, visa advice, and local culture tips.",
    url: `${SITE_URL}/travel-guide`,
    siteName: "Brother Tour & Travels",
    type: "website",
    locale: "en_US",
  },
};

// Breadcrumbs
const breadcrumbsJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Travel Guide", url: "/travel-guide" },
]);

// FAQ Schema
const travelGuidesFaqListJsonLd = faqSchema(
  travelGuidesFaqLists.map((tr) => ({
    question: tr.question,
    answer: tr.answer,
  }))
);

export default function TravelGuidePage() {
  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={travelGuidesFaqListJsonLd} />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        <HeroBannerTravelGuidePage />
        <QuickEssentialsGridTravelGuidePage />
        <FeaturedGuidesPage />
        <TravelFaqTravelGuidePage />
        <CtaBannerTravelGuidePage />
      </div>
    </>
  );
}