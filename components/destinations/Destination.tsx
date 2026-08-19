import { DestinationDto } from "@/types/destination";
import Image from "next/image";
import Link from "next/link";

export default function DestinationComponentPage({ destination }: { destination: DestinationDto }) {
    return (
        <Link
            key={destination.slug}
            href={`/destinations/${destination.slug}`}
            className="group relative flex h-72 overflow-hidden rounded-2xl bg-stone-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Background Image */}
            <Image
                priority
                width={100}
                height={100}
                src={destination.heroImage}
                alt={destination.name}
                quality={80}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"

            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-wide">
                        {destination.name}
                    </h2>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                        {destination.tourCount} Tours
                    </span>
                </div>
                <p className="mt-2 text-sm text-stone-200">
                    📍 {destination.popularSpots}
                </p>
            </div>
        </Link>
    )
}