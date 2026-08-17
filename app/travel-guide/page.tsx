import type { Metadata } from "next";
import HeroBannerTravelGuidePage from "@/components/travel-guide/HeroBanner";
import QuickEssentialsGridTravelGuidePage from "@/components/travel-guide/QuickEssentialsGrid";
import FeaturedGuidesPage from "@/components/travel-guide/FeaturedGuides";
import TravelFaqTravelGuidePage from "@/components/travel-guide/TravelFaq";
import CtaBannerTravelGuidePage from "@/components/travel-guide/CtaBanner";
import { SITE_URL } from "@/utils/variable";

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

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <HeroBannerTravelGuidePage />
      <QuickEssentialsGridTravelGuidePage />
      <FeaturedGuidesPage />
      <TravelFaqTravelGuidePage />
      <CtaBannerTravelGuidePage />
    </div>
  );
}