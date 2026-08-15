import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact / Enquiry",
  description: "Get in touch with Brother Tours to plan your trip.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-semibold text-stone-900">Contact / Enquiry</h1>
    </div>
  );
}
