import { TourDto } from "@/types/tour";
import { Clock, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";

export default function TourComponentPage({ tour }: { tour: TourDto }) {
    return (
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
    )
}