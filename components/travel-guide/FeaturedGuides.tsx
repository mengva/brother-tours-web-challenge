import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { GuideItem, travelGuidesList } from "@/libs/data/travel-guide";

export default function FeaturedGuidesPage({ guides = travelGuidesList }: { guides?: GuideItem[] }) {
    return (
        <section className="bg-white py-16 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-emerald-600 font-semibold uppercase text-xs tracking-wider">
                            Detailed Itineraries
                        </span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-1">Recommended Travel Guides</h2>
                    </div>
                    <p className="text-slate-500 text-sm max-w-md">
                        Comprehensive articles written by local destination experts to help you maximize your stay.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {guides.map((guide, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-6 hover:border-emerald-200 transition"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                    <span className="bg-emerald-100 text-emerald-800 font-medium px-2.5 py-0.5 rounded-full">
                                        {guide.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" /> {guide.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 leading-snug">{guide.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{guide.description}</p>
                            </div>

                            <Link
                                href={guide.slug}
                                className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition"
                            >
                                Read Full Guide <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}