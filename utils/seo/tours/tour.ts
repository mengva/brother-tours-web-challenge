import { tours } from "@/data/tour";
import { breadcrumbSchema, tourListSchema } from "@/utils/schema";

// 1. Breadcrumbs Schema (Home -> Tours)
export const tourBreadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tours", url: "/tours" },
]);

// 2. ItemList Schema for Listing
export const tourListJsonLd = tourListSchema(
    "Popular All Tour Packages",
    tours.map((tour) => ({
        name: tour.title,
        url: `/tours/${tour.id}`,
    }))
);