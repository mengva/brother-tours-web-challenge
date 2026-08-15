// src/app/tours/[slug]/page.tsx
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';

// 1. Dynamic Metadata สำหรับ SEO (Og-Image, Title, Description)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    // Fetch tour data ຈາກ BTMS API / Database
    // const tour = await getTourBySlug(params.slug);

    return {
        title: `10-Day Laos Cultural Discovery Tour | Brother Tours`,
        description: `Explore ancient temples, Luang Prabang, and rich Lao heritage on our 10-day cultural discovery tour.`,
        alternates: {
            canonical: `https://brothertours.com/tours/${params.slug}`,
        },
        openGraph: {
            title: `10-Day Laos Cultural Discovery Tour`,
            description: `Explore ancient temples, Luang Prabang, and rich Lao heritage.`,
            url: `https://brothertours.com/tours/${params.slug}`,
            images: ['/images/tours/laos-cultural-discovery.jpg'],
        },
    };
}

export default async function TourDetailPage({ params }: { params: { slug: string } }) {
    // Data สมมุติที่ดึงมาจาก BTMS
    const tourData = {
        name: "10-Day Laos Cultural Discovery Tour",
        description: "Immerse yourself in the cultural heart of Laos with expert local guides.",
        price: "1250",
        currency: "USD",
        slug: params.slug,
    };

    // 2. AEO & GEO Structured Data (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": tourData.name,
        "description": tourData.description,
        "touristType": ["Cultural Enthusiast", "Explorer"],
        "offers": {
            "@type": "Offer",
            "price": tourData.price,
            "priceCurrency": tourData.currency,
            "availability": "https://schema.org/InStock",
            "url": `https://brothertours.com/tours/${tourData.slug}`
        },
        "provider": {
            "@type": "TravelAgency",
            "name": "Brother Tours",
            "url": "https://brothertours.com"
        }
    };

    return (
        <>
            {/* 🤖 SCRIPT Inject JSON-LD สำรับ AI Search (Perplexity/Gemini/ChatGPT) & Google */}
            <JsonLd data={jsonLd}/>

            <main className="container mx-auto py-10 px-4">
                {/* UI ຂອງหน้า 10-Day Laos Cultural Discovery Tour */}
                <h1 className="text-4xl font-bold">{tourData.name}</h1>
                {/* ... Sections อื่นๆ ของ BTMS ... */}
            </main>
        </>
    );
}