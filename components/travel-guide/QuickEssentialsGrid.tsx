import { Train, Calendar, CreditCard, FileText } from "lucide-react";

export interface QuickInfoItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge: string;
}

const defaultCards: QuickInfoItem[] = [
    {
        icon: <Train className="w-6 h-6 text-emerald-600" />,
        title: "Laos-China Railway (LCR)",
        description: "High-speed trains connect Vientiane to Vang Vieng, Luang Prabang, and Boten in 1–2 hours. Book tickets 3 days in advance.",
        badge: "Must Read",
    },
    {
        icon: <Calendar className="w-6 h-6 text-emerald-600" />,
        title: "Best Time to Visit",
        description: "November to February is cool and dry. March to May is warm, while June to October brings lush green waterfalls.",
        badge: "Weather",
    },
    {
        icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
        title: "Currency & Cash",
        description: "Lao Kip (LAK) is the main currency. THB and USD are widely accepted for tours. Carry cash, as cards aren't accepted everywhere.",
        badge: "Money",
    },
    {
        icon: <FileText className="w-6 h-6 text-emerald-600" />,
        title: "Visa & Entry",
        description: "eVisa and Visa-on-Arrival (30 days) are available for most nationalities at international airports and border checkpoints.",
        badge: "Visas",
    },
];

export default function QuickEssentialsGridTravelGuidePage({ cards = defaultCards }: { cards?: QuickInfoItem[] }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-emerald-600 font-semibold uppercase text-xs tracking-wider">
                    Key Information
                </span>
                <h2 className="text-3xl font-bold text-slate-900">Essential Travel Knowledge</h2>
                <p className="text-slate-600">Quick facts to get you travel-ready before landing in Laos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="p-3 bg-emerald-50 rounded-xl">{card.icon}</div>
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                                    {card.badge}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}