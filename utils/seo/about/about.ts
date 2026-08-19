import { breadcrumbSchema, organizationSchema } from "@/utils/schema";

export const aboutBreadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
]);

export const aboutOrganizationJsonLd = organizationSchema({
    phone: "+856 20 1234 5678",
    email: "contact@brothertours.com",
    address: "Lane Xang Avenue",
    city: "Vientiane",
    socialLinks: [
        "https://facebook.com/your-page",
        "https://instagram.com/your-profile",
        "https://tiktok.com/@your-handle",
        "https://youtube.com/@your-channel",
    ],
});