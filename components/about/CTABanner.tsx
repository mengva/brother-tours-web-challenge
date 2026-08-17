import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABannerAboutPage() {
    return (
        <section className="bg-emerald-900 text-white py-16 px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Explore Laos with the Brothers?
                </h2>
                <p className="text-emerald-100">
                    Let us design a custom itinerary tailored specifically to your dates, group size, and budget preferences.
                </p>
                <div className="pt-2">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3.5 rounded-xl transition shadow-lg"
                    >
                        Contact Us Today <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}