import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/utils/variable';
import TourDetailComponentPage from '@/components/tours/slug/TourDetail';
import { getTourBySlug } from '@/libs/tours/tours';
import { getTourSlugJsonLd } from '@/utils/seo/tours/slug/tourSlug';

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
    const tour = await getTourBySlug(slug);

    if (!tour) {
        notFound();
    }

    const {
        breadcrumbsJsonLd,
        tourJsonLd
    } = getTourSlugJsonLd(tour);


    return (
        <>
            <JsonLd data={breadcrumbsJsonLd} />
            <JsonLd data={tourJsonLd} />
            <TourDetailComponentPage tour={tour} slug={slug}/>
        </>
    );
}