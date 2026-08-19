import { destinations } from "@/data/destinations";
import { breadcrumbSchema, destinationListSchema } from "@/utils/schema";

// 1. Breadcrumbs Schema (Home -> Tours)
export const destinationBreadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
]);

export const destinationListJsonLd = destinationListSchema(
    "Destinations | Brother Tours",
    destinations.map((destination) => ({
        name: destination.name,
        url: `/tours/${destination.slug}`,
    }))
);
