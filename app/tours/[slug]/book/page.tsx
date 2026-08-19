import { notFound } from 'next/navigation';
import { cache } from 'react';
import { tours } from "@/data/tour";
import { Metadata } from "next";
import { SITE_URL } from '@/utils/variable';
import BookFormTourComponentPage from '@/components/tours/slug/booking/BookForm';
import { TourDto } from '@/types/tour';
import { breadcrumbSchema } from '@/utils/schema';
import JsonLd from '@/components/seo/JsonLd';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Wrap with cache() for performance optimization
const getTourBySlug = cache(async (slug: string) => {
    return tours.find(tour => tour.id === slug || tour.title === slug);
});

// 1. Dynamic Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const tour = await getTourBySlug(slug);

    if (!tour) {
        return {
            title: `Tour Not Found | Brother Tours`,
        };
    }

    return {
        title: `Book ${tour.title} | Brother Tours`,
        description: `Book your spot for ${tour.title}. Fast and direct reservation with Brother Tours.`,
        alternates: {
            // Point canonical back to main tour detail page to prevent duplicate content SEO penalties
            canonical: `${SITE_URL}/tours/${slug}`,
        },
        openGraph: {
            title: `Book ${tour.title} | Brother Tours`,
            description: tour.description,
            url: `${SITE_URL}/tours/${slug}/book`,
            images: [tour.image],
        },
    };
}

function getJsonLd(tour: TourDto) {
    const breadcrumbsJsonLd = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Tours", url: "/tours" },
        { name: tour.title, url: `/tours/${tour.id}` },
        { name: "Book Now", url: `/tours/${tour.id}/book` },
    ]);

    return {
        breadcrumbsJsonLd,
    };
}

export default async function BookingPage({ params }: PageProps) {
    const { slug } = await params;
    const tour = await getTourBySlug(slug);

    if (!tour) {
        notFound();
    }

    const { breadcrumbsJsonLd } = getJsonLd(tour);

    return (
        <>
            <JsonLd data={breadcrumbsJsonLd} />
            <BookFormTourComponentPage tour={tour} />
        </>
    );
}