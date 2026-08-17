import { features } from "@/libs/data/tour";

export default function FeaturesPage() {
    return (
        <section className="py-20 container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                        <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}