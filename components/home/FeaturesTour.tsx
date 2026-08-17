import { tours } from "@/libs/data/tour";
import { ArrowRight, Clock, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";

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
                        <div key={tour.id} className="group flex flex-col rounded-3xl bg-slate-50 border border-slate-200/60 overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Image & Badge */}
                            <div className="relative h-60 w-full overflow-hidden">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
                                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                    <span>{tour.rating}</span>
                                    <span className="text-slate-400 font-normal">({tour.reviews})</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div>
                                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 mb-2">
                                        <MapPin className="h-3.5 w-3.5" />
                                        <span>{tour.location}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                                        {tour.title}
                                    </h3>

                                    <div className="flex items-center gap-4 mt-4 text-xs font-medium text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                                            <span>{tour.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="h-3.5 w-3.5 text-slate-400" />
                                            <span>Small Group</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Price & Action */}
                                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">From</span>
                                        <span className="text-xl font-black text-slate-900">{tour.price}</span>
                                    </div>

                                    <Link
                                        href={`/tours/${tour.id}`}
                                        className="px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}