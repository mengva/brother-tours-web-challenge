import { Compass } from "lucide-react";

export default function HeroHeaderContactPage() {
    return (
        <section className="bg-emerald-900 text-white py-16 px-6 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-800/60 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-medium">
                    <Compass className="w-4 h-4" /> Brother Tour & Travels
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Plan Your Next Adventure With Us
                </h1>
                <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                    Have questions about customized tour packages, transport, or local guides? Send the Brothers a message! 555
                </p>
            </div>
        </section>
    )
}