import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore tours across Laos, Vietnam, Thailand and Cambodia.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-semibold text-stone-900">Destinations</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        
      </div>
    </div>
  );
}
