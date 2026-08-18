import type { Metadata } from "next";

import HeroSectionAboutPage from "@/components/about/HeroSection";
import TeamBrotherAboutPage from "@/components/about/TeamBrother";
import StorySectionAboutPage from "@/components/about/StorySection";
import CoreValueSectionAboutPage from "@/components/about/CoreValueSection";
import CTABannerAboutPage from "@/components/about/CTABanner";
import { SITE_URL } from "@/utils/variable";
import { breadcrumbSchema, organizationSchema } from "@/utils/schema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Brother Tour & Travels Laos",
  description:
    "Discover Brother Tour & Travels — your trusted local travel partners in Laos. We specialize in authentic culture tours, LCR high-speed train bookings, and private transfers across Luang Prabang, Vang Vieng, and Vientiane.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Brother Tour & Travels | Local Laos Experts",
    description:
      "Meet the local team behind authentic Laos travel experiences. Custom tour packages, eco-adventures, and hassle-free travel services.",
    url: `${SITE_URL}/about`,
    siteName: "Brother Tour & Travels",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Brother Tour & Travels Laos",
    description:
      "Meet the local brothers behind authentic Laos tours, private transfers, and custom travel packages.",
  },
};

const breadcrumbsJsonLd = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
]);

const organizationJsonLd = organizationSchema({
  phone: "+856 20 1234 5678",
  email: "contact@brothertours.com",
  address: "Lane Xang Avenue",
  city: "Vientiane",
  socialLinks: [
    "https://facebook.com/your-page",
    "https://instagram.com/your-profile",
    "https://tiktok.com/@your-handle",
    "https://youtube.com/@your-channel",
  ],
});

export default function AboutPage() {


  return (
    <>

      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={organizationJsonLd} />

      <div className="min-h-screen bg-slate-50 text-slate-800">

        {/* Hero Section */}
        <HeroSectionAboutPage />

        {/* Story Section */}
        <StorySectionAboutPage />

        {/* Core Values Section */}
        <CoreValueSectionAboutPage />

        {/* Team / The Brothers Section */}
        <TeamBrotherAboutPage />

        {/* CTA Banner */}
        <CTABannerAboutPage />

      </div>
    </>
  );
}
