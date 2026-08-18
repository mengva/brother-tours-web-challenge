import { HelpCircle, CheckCircle2 } from "lucide-react";

export interface FaqItem {
    question: string;
    answer: string;
}

const defaultFaqs: FaqItem[] = [
    {
        question: "Is Laos safe for solo travelers and families?",
        answer: "Yes! Laos is statistically one of the safest countries in Southeast Asia. Locals are welcoming, violent crime is extremely rare, and tour routes are well established.",
    },
    {
        question: "Can Brother Tour arrange private drivers and train tickets together?",
        answer: "Absolutely. We specialize in seamless door-to-door packages including private van transfers, LCR train reservations, and licensed local guides.",
    },
    {
        question: "How far in advance should I book my Laos trip?",
        answer: "For high season (November to February), we recommend booking 3 to 4 weeks early to secure preferred hotel rooms and LCR train seats.",
    },
];

export default function TravelFaqTravelGuidePage({ faqs = defaultFaqs }: { faqs?: FaqItem[] }) {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
            <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Planning Your Trip to Laos</h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-2">
                        <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                            {faq.question}
                        </h3>
                        <p className="text-slate-600 text-sm pl-7 leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}