import { Compass, HeartHandshake, ShieldCheck } from "lucide-react";

export default function CoreValueSectionAboutPage() {
    const values = [
        {
            icon: <Compass className="w-6 h-6 text-emerald-600" />,
            title: "Authentic Local Insights",
            description:
                "We don't just show you the popular spots; we take you behind the scenes to experience true Lao culture, food, and hospitality.",
        },
        {
            icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
            title: "Community First",
            description:
                "We partner directly with local families, boat captains, and rural communities to ensure tourism revenue directly supports local livelihoods.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            title: "Safe & Reliable",
            description:
                "From modern private vehicles to experienced English-speaking drivers and licensed guides, your safety and comfort are our top priorities.",
        },
    ];

    return (
        <section className="bg-white py-16 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-3xl font-bold text-slate-900">Why Travel With Us?</h2>
                    <p className="text-slate-600">
                        Here is what sets Brother Tour apart when planning your journey through Laos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-md transition"
                        >
                            <div className="p-3 bg-emerald-100/60 rounded-xl w-fit">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {val.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}