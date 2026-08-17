import { Sparkles } from "lucide-react";

export default function HeroSectionAboutPage() {
    return (
        <section className="bg-emerald-900 text-white py-20 px-6 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-800/60 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-medium">
                    <Sparkles className="w-4 h-4" /> About Brother Tour
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Your Trusted Local Brothers in Laos
                </h1>
                <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Crafting unforgettable, authentic, and tailor-made travel experiences across Vientiane, Luang Prabang, Vang Vieng, and beyond.
                </p>
            </div>
        </section>
    )
}