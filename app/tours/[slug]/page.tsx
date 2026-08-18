import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/utils/variable';
import { tours } from '@/libs/data/tour';
import TourDetailComponentPage from '@/components/tours/slug/TourDetail';
import { breadcrumbSchema, tourSchema } from '@/libs/schema';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Helper to look up tour by ID or slug match
function getTourBySlug(slug: string) {
    return tours.find(
        (tour) =>
            tour.id === slug ||
            tour.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
    );
}

// 1. Dynamic Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const tour = getTourBySlug(slug);

    if (!tour) {
        return {
            title: 'Tour Not Found | Brother Tours',
        };
    }

    return {
        title: `${tour.title} | Brother Tours`,
        description: tour.description,
        alternates: {
            canonical: `${SITE_URL}/tours/${slug}`,
        },
        openGraph: {
            title: `${tour.title} | Brother Tours`,
            description: tour.description,
            url: `${SITE_URL}/tours/${slug}`,
            images: [tour.image],
        },
    };
}

export default async function TourDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const tour = getTourBySlug(slug);

    if (!tour) {
        notFound();
    }

    // Generate structured data using reusable functions
    const breadcrumbsJsonLd = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Tours", url: "/tours" },
        { name: tour.title, url: `/tours/${tour.id}` },
    ]);

    const tourJsonLd = tourSchema(tour);

    return (
        <>
            <JsonLd data={breadcrumbsJsonLd} />
            <JsonLd data={tourJsonLd} />
            <TourDetailComponentPage tour={tour} />
        </>
    );
}