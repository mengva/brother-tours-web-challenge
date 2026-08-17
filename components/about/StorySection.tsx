export default function StorySectionAboutPage() {
    const stats = [
        { label: "Happy Travelers", value: "5,000+" },
        { label: "Years Experience", value: "8+" },
        { label: "Local Tour Guides", value: "100%" },
        { label: "Customer Satisfaction", value: "4.9/5" },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
                        Our Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
                        Started as Local Friends, Grown into Your Favorite Travel Partners
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        Brother Tour was founded with a simple mission: treat every guest like family. What started as small private city tours in Luang Prabang has grown into a full-service travel agency providing custom itineraries, high-speed train bookings, private transport, and trekking adventures across the country.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        We believe travel should be seamless, deeply rewarding, and respectful of local cultures. Whether you want to explore ancient temples, zip-line through jungle canopies, or cruise down the Mekong at sunset, we make it happen smoothly.
                    </p>
                </div>

                {/* Stats Box Grid */}
                <div className="grid grid-cols-2 gap-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80">
                            <p className="text-3xl md:text-4xl font-extrabold text-emerald-700">
                                {stat.value}
                            </p>
                            <p className="text-sm font-medium text-slate-600 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}