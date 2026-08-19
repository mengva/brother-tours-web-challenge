import JsonLd from '@/components/seo/JsonLd';
import TourComponentPage from '@/components/tours/Tour';
import { tours } from '@/data/tour';
import { tourBreadcrumbsJsonLd, tourListJsonLd } from '@/utils/seo/tours/tour';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Tours",
    description: "Browse all Brother Tours tour packages.",
    alternates: { canonical: "/tours" },
};

function TourPage() {

    return (
        <>
            {/* Inject Structured Data */}
            <JsonLd data={tourBreadcrumbsJsonLd} />
            <JsonLd data={tourListJsonLd} />

            {/* 3. FEATURED TOURS */}
            <section className="py-12 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 md:px-8">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                        <div>
                            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Featured Packages</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Popular All Tour Packages</h2>
                        </div>
                    </div>

                    {/* Tour Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tours.map((tour) => (
                            <TourComponentPage key={tour.id} tour={tour} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TourPage
