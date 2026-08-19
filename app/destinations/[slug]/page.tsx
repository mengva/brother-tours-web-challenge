import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/utils/variable";
import { destinations } from "@/data/destinations";
import JsonLd from "@/components/seo/JsonLd";
import DestinationDetailComponentPage from "@/components/destinations/slug/DestinationDetail";
import { getDestinationSlugJsonLd } from "@/utils/seo/destinations/slug/destinationSlug";
import { getDestinationBySlug } from "@/libs/destinations/slug/destinationSlug";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

// Helper to look up tour by ID or slug match

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

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


export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const {
    breadcrumbsJsonLd,
    destinationJsonLd
  } = getDestinationSlugJsonLd(destination);

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <JsonLd data={destinationJsonLd} />
      <DestinationDetailComponentPage destination={destination} />
    </>
  );
}