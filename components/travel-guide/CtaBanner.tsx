import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function CtaBannerTravelGuidePage({
    title = "Need a Custom Tour or Train Booking?",
    description = "Skip the planning hassle! Let Brother Tour arrange private transfers, train tickets, and custom itineraries for your group.",
    buttonText = "Contact Local Brother Guide",
    buttonLink = "/contact",
}: CtaBannerProps) {
    return (
        <section className="bg-emerald-900 text-white py-16 px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                <p className="text-emerald-100">{description}</p>
                <div>
                    <Link
                        href={buttonLink}
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3.5 rounded-xl transition shadow-lg"
                    >
                        {buttonText} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}