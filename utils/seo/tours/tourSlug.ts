import { TourDto } from "@/types/tour";
import { breadcrumbSchema, tourSchema } from "@/utils/schema";

export function getTourSlugJsonLd(tour: TourDto) {
    // Generate structured data using reusable functions
    const breadcrumbsJsonLd = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Tours", url: "/tours" },
        { name: tour.title, url: `/tours/${tour.id}` },
    ]);

    const tourJsonLd = tourSchema(tour);

    return {
        breadcrumbsJsonLd,
        tourJsonLd
    }
}