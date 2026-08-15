import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Tours",
    description: "Browse all Brother Tours tour packages by category.",
    alternates: { canonical: "/tours" },
};

function TourPage() {
    return (
        <div>
            <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
                <h1 className="text-3xl font-semibold text-stone-900">All Tours</h1>
                <div className="mt-6 flex flex-wrap gap-2">

                </div>
            </div>
        </div>
    )
}

export default TourPage
