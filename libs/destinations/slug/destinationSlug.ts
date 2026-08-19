import { destinations } from "@/data/destinations";
import { cache } from "react";

export const getDestinationBySlug = cache(async (slug: string) => {
    return destinations.find(d => d.slug === slug);
});