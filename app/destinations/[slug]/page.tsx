import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/utils/variable";
import { destinations } from "@/data/destinations";
import { breadcrumbSchema, destinationSchema } from "@/utils/schema";
import JsonLd from "@/components/seo/JsonLd";
import DestinationDetailComponentPage from "@/components/destinations/slug/DestinationDetail";
import { DestinationDto } from "@/types/destination";
import { cache } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

// Helper to look up tour by ID or slug match

const getDesticationBySlug = cache(async (slug: string) => {
  return destinations.find(d => d.slug === slug);
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDesticationBySlug(slug);

  if (!destination) {
    return { title: "Destination Not Found" };
  }

  return {
    title: `${destination.name} Tours & Travel Guide`,
    description: destination.description,
    alternates: {
      canonical: `${SITE_URL}/destinations/${slug}`,
    },
    openGraph: {
      title: `${destination.name} Tours | Brother Tours`,
      description: destination.description,
      url: `${SITE_URL}/destinations/${slug}`,
      images: [{ url: destination.heroImage }],
    },
  };
}

function getJsonLd(destination: DestinationDto) {

  // Generate structured data using reusable functions
  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: destination.name, url: `/destinations/${destination.slug}` },
  ]);

  const destinationJsonLd = destinationSchema(destination);

  return {
    breadcrumbsJsonLd,
    destinationJsonLd
  }
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDesticationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const {
    breadcrumbsJsonLd,
    destinationJsonLd
  } = getJsonLd(destination);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={destinationJsonLd} />
      <DestinationDetailComponentPage destination={destination} />
    </>
  );
}