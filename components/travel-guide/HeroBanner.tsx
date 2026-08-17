import { Compass } from "lucide-react";

interface HeroBannerProps {
    badge?: string;
    title?: string;
    description?: string;
}

export default function HeroBannerTravelGuidePage({
    badge = "Brother Tour Travel Hub",
    title = "The Ultimate Laos Travel Guide",
    description = "Everything you need to plan a seamless journey through Laos — curated directly by local guides who know the country best.",
}: HeroBannerProps) {
    return (
        <section className="bg-emerald-900 text-white py-20 px-6 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-800/60 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-medium">
                    <Compass className="w-4 h-4" /> {badge}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
                <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}