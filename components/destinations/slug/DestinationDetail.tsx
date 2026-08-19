import { DestinationDto } from "@/types/destination";
import Image from "next/image";
import Link from "next/link";

export default function DestinationDetailComponentPage({ destination }: { destination: DestinationDto }) {
    return (
        <main className="min-h-screen bg-stone-50 pb-16">
            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden bg-stone-900">
                <Image
                    priority
                    width={100}
                    height={100}
                    quality={80}
                    src={destination.heroImage}
                    alt={destination.name}
                    className="h-full w-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-end px-4 pb-10 text-white lg:px-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-stone-300">
                        Destination Guide
                    </span>
                    <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
                        {destination.name}
                    </h1>
                    <p className="mt-2 text-lg text-stone-200">{destination.tagline}</p>
                </div>
            </section>

            {/* Overview & Spots */}
            <section className="mx-auto max-w-5xl px-4 pt-10 lg:px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold text-stone-900">About {destination.name}</h2>
                        <p className="mt-3 leading-relaxed text-stone-700">
                            {destination.description}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-900/5">
                        <h3 className="font-semibold text-stone-900">Top Highlights</h3>
                        <ul className="mt-3 space-y-2 text-sm text-stone-600">
                            {destination.popularSpots.map((spot) => (
                                <li key={spot} className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-stone-900" />
                                    {spot}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action Link to Filtered Tours */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-stone-900 p-8 text-white sm:flex-row">
                    <div>
                        <h3 className="text-xl font-semibold">Ready to explore {destination.name}?</h3>
                        <p className="mt-1 text-sm text-stone-300">
                            Browse curated itineraries and private tours tailored for your trip.
                        </p>
                    </div>
                    <Link
                        href={`/tours?destination=${destination.slug}`}
                        className="whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
                    >
                        View {destination.name} Tours &rarr;
                    </Link>
                </div>
            </section>
        </main>
    )
}