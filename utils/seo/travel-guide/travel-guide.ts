import { travelGuidesFaqLists } from "@/data/travel-guide";
import { breadcrumbSchema, faqSchema } from "@/utils/schema";

// Breadcrumbs
export const travelGuidesBreadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Travel Guide", url: "/travel-guide" },
]);

// FAQ Schema
export const travelGuidesFaqListJsonLd = faqSchema(
    travelGuidesFaqLists.map((tr) => ({
        question: tr.question,
        answer: tr.answer,
    }))
);
