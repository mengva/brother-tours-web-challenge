import { SITE_URL } from "@/utils/variable";

export const siteConfig = {
    name: "Brother Tours",
    shortName: "BrotherTours",
    description:
        "Curated tour packages, private trips, and travel guides in Laos and Southeast Asia.",
    url: process.env.NEXT_PUBLIC_SITE_URL || SITE_URL,
    ogImage: "/images/og-default.jpg",
    keywords: [
        "Laos Tours",
        "Travel Laos",
        "Luang Prabang Tours",
        "Southeast Asia Travel Agency",
        "Vientiane Travel",
    ],
    company: {
        phone: "+856 20 1234 5678",
        email: "contact@brothertours.com",
        address: "Lane Xang Avenue",
        city: "Vientiane",
        country: "LA",
    },
    links: {
        facebook: "https://facebook.com/brothertours",
        instagram: "https://instagram.com/brothertours",
        tiktok: "https://tiktok.com/@brothertours",
        youtube: "https://youtube.com/@brothertours",
    },
};

export type SiteConfig = typeof siteConfig;