import { TourDto } from "@/types/tour";
import { breadcrumbSchema } from "@/utils/schema";

export function getTourBookJsonLd(tour: TourDto) {
    const breadcrumbsJsonLd = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Tours", url: "/tours" },
        { name: tour.title, url: `/tours/${tour.id}` },
        { name: "Book Now", url: `/tours/${tour.id}/book` },
    ]);

    return {
        breadcrumbsJsonLd,
    };
}