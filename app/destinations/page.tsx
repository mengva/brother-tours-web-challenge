import DestinationComponentPage from "@/components/destinations/Destination";
import { destinations } from "@/libs/data/destinations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | Brother Tours",
  description: "Explore tours across Laos, Vietnam, Thailand and Cambodia.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-stone-900">Destinations</h1>
        <p className="mt-2 text-stone-600">
          Discover hand-crafted travel packages across Southeast Asia.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {destinations.map((destination, index) => (
          <DestinationComponentPage key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
}