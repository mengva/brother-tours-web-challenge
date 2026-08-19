import { breadcrumbSchema, organizationSchema } from "@/utils/schema";

export const contactBreadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
]);

export const contactOrganizationJsonLd = organizationSchema({
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