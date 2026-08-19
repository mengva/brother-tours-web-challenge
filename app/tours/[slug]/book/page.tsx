import { notFound } from 'next/navigation';
import { Metadata } from "next";
import { SITE_URL } from '@/utils/variable';
import BookFormTourComponentPage from '@/components/tours/slug/booking/BookForm';
import JsonLd from '@/components/seo/JsonLd';
import { getTourBySlug } from '@/libs/tours/tours';
import { getTourBookJsonLd } from '@/utils/seo/tours/tourSlugBook';

interface PageProps {
    params: Promise<{ slug: string }>;
}

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

export default async function BookingPage({ params }: PageProps) {
    const { slug } = await params;
    const tour = await getTourBySlug(slug);

    if (!tour) {
        notFound();
    }

    const { breadcrumbsJsonLd } = getTourBookJsonLd(tour);

    return (
        <>
            <JsonLd data={breadcrumbsJsonLd} />
            <BookFormTourComponentPage tour={tour} />
        </>
    );
}