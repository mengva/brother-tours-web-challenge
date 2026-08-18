import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/utils/variable";
import { destinations } from "@/libs/data/destinations";
import { breadcrumbSchema, destinationSchema } from "@/libs/schema";
import JsonLd from "@/components/seo/JsonLd";
import DestinationDetailComponentPage from "@/components/destinations/slug/DestinationDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find(d => d.slug.toLowerCase().trim() === slug.toLowerCase().trim());

  if (!destination) {
    return { title: "Destination Not Found" };
  }

  return {
    title: `${destination.name} Tours & Travel Guide`,
    description: destination.description,
    alternates: {
      canonical: `${SITE_URL}/destinations/${destination.slug}`,
    },
    openGraph: {
      title: `${destination.name} Tours | Brother Tours`,
      description: destination.description,
      images: [{ url: destination.heroImage }],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find(d => d.slug.toLowerCase().trim() === slug.toLowerCase().trim());


  if (!destination) {
    notFound();
  }

  // Generate structured data using reusable functions
  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: destination.name, url: `/destinations/${destination.slug}` },
  ]);

  const destinationJsonLd = destinationSchema(destination);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={destinationJsonLd} />

      <DestinationDetailComponentPage destination={destination} />
    </>
  );
}