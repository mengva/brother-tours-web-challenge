import { DestinationDto } from "@/types/destination";
import { breadcrumbSchema, destinationSchema } from "@/utils/schema";

export function getDestinationSlugJsonLd(destination: DestinationDto) {

    // Generate structured data using reusable functions
    const breadcrumbsJsonLd = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Destinations", url: "/destinations" },
        { name: destination.name, url: `/destinations/${destination.slug}` },
    ]);

    const destinationJsonLd = destinationSchema(destination);

    return {
        breadcrumbsJsonLd,
        destinationJsonLd
    }
}