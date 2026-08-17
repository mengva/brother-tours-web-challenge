import Link from "next/link";

export default function CtaPage() {
    return (
        <section className="py-20 container mx-auto px-4 md:px-8">
            <div className="relative rounded-3xl bg-slate-900 text-white p-8 md:p-16 overflow-hidden shadow-2xl">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Customized Travel</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-2 leading-tight">
                        Looking for a Custom Trip Itinerary?
                    </h2>
                    <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
                        Tell us your travel style, budget, and desired destinations. Our team will tailor-make an exclusive itinerary just for you!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="px-6 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-500/20"
                        >
                            Create Custom Tour
                        </Link>
                        <Link
                            href="/about-us"
                            className="px-6 py-3.5 rounded-full bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 active:scale-95 transition-all border border-slate-700"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}