import type { Metadata } from "next";
import InquiryFormContactPage from "@/components/contact/InquiryFormContact";
import ContactInfoCardPage from "@/components/contact/ContactInfoCard";
import HeroHeaderContactPage from "@/components/contact/HeroHeader";
import { SITE_URL } from "@/utils/variable";
import JsonLd from "@/components/seo/JsonLd";
import { contactBreadcrumbsJsonLd, contactOrganizationJsonLd } from "@/utils/seo/contact/contact";

export const metadata: Metadata = {
  title: "Contact Us & Tour Inquiry | Brother Tour Laos",
  description:
    "Get in touch with Brother Tour & Travels. Book private drivers, LCR high-speed train tickets, and custom itineraries for Luang Prabang, Vang Vieng, and Pakse.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Brother Tour & Travels Laos",
    description:
      "Send a tour inquiry or chat directly via WhatsApp. Fast responses for custom Laos tour quotes, train bookings, and local guidance.",
    url: `${SITE_URL}/contact`,
    siteName: "Brother Tour & Travels",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Brother Tour Laos",
    description:
      "Plan your dream trip to Laos. Contact our local team for custom tour quotes and LCR train bookings.",
  },
};

export default function BrotherTourContactPage() {

  return (
    <>
      <JsonLd data={contactBreadcrumbsJsonLd} />
      <JsonLd data={contactOrganizationJsonLd} />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Hero Header */}
        <HeroHeaderContactPage />

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left Column: Contact Info Cards */}
            <ContactInfoCardPage />

            {/* Right Column: Interactive Booking & Inquiry Form */}
            <InquiryFormContactPage />

          </div>
        </section>
      </div>
    </>
  );
}
