import { tours } from "@/data/tour";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TourComponentPage from "../tours/Tour";

export default function FeaturesTourPage() {
    return (
        <section className="py-12 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Featured Packages</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Popular Tour Packages</h2>
                    </div>
                    <Link
                        href="/tours"
                        className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors group"
                    >
                        <span>Explore All Tours</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Tour Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.slice(0, 3).map((tour) => (
                        <TourComponentPage key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </section>
    )
}