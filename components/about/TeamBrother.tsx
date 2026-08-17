import { MapPin } from "lucide-react";

export default function TeamBrotherAboutPage() {
    const team = [
        {
            name: "Somsack & Team",
            role: "Co-Founder & Lead Expedition Guide",
            location: "Luang Prabang & Vang Vieng",
            bio: "Born and raised in northern Laos, passionate about eco-trekking and sharing hidden waterfalls with travelers.",
        },
        {
            name: "Khamla",
            role: "Operations & Transportation Manager",
            location: "Vientiane & Pakse",
            bio: "Ensures all private transfers, high-speed train tickets, and custom itineraries run seamlessly without delays.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl font-bold text-slate-900">Meet The Brothers</h2>
                <p className="text-slate-600">
                    Dedicated professionals committed to delivering unforgettable memories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {team.map((member, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className="text-emerald-600 text-sm font-medium">{member.role}</p>
                            <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" /> {member.location}
                            </p>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}