import { FaqListDto, GuideCardDto, QuickInfoDto } from "@/types/travel-guide";
import { Calendar, CreditCard, FileText, Train } from "lucide-react";

export const travelGuidesList: GuideCardDto[] = [
    {
        title: "Ultimate 3-Day Luang Prabang Heritage Itinerary",
        category: "Destination Guide",
        readTime: "6 min read",
        description: "From early morning Alms giving (Tak Bat) to Kuang Si Falls and Mount Phousi sunset, explore the UNESCO cultural heart of Laos.",
        slug: "/travel-guide/luang-prabang-3-day-itinerary",
    },
    {
        title: "How to Book Laos High-Speed Train Tickets Easily",
        category: "Transport Guide",
        readTime: "4 min read",
        description: "A step-by-step breakdown of LCR train schedules, seat classes, luggage rules, and how Brother Tour books tickets for you.",
        slug: "/travel-guide/laos-china-railway-booking-guide",
    },
    {
        title: "Vang Vieng Adventure & Blue Lagoon Express",
        category: "Adventure Guide",
        readTime: "5 min read",
        description: "Explore Nam Xay Viewpoint, hot air ballooning, kayaking on the Nam Song River, and visiting all 3 famous Blue Lagoons.",
        slug: "/travel-guide/vang-vieng-adventure-guide",
    },
    {
        title: "Southern Laos Loop: Pakse, Champasak & 4,000 Islands",
        category: "Off-the-Beaten-Path",
        readTime: "8 min read",
        description: "Discover Wat Phou UNESCO temple, Khone Phapheng waterfalls, and island hopping in Si Phan Don along the Mekong.",
        slug: "/travel-guide/southern-laos-pakse-loop-guide",
    },
];

export const travelGuidesCardLists: QuickInfoDto[] = [
    {
        icon: Train,
        title: "Laos-China Railway (LCR)",
        description: "High-speed trains connect Vientiane to Vang Vieng, Luang Prabang, and Boten in 1–2 hours. Book tickets 3 days in advance.",
        badge: "Must Read",
    },
    {
        icon: Calendar,
        title: "Best Time to Visit",
        description: "November to February is cool and dry. March to May is warm, while June to October brings lush green waterfalls.",
        badge: "Weather",
    },
    {
        icon: CreditCard,
        title: "Currency & Cash",
        description: "Lao Kip (LAK) is the main currency. THB and USD are widely accepted for tours. Carry cash, as cards aren't accepted everywhere.",
        badge: "Money",
    },
    {
        icon: FileText,
        title: "Visa & Entry",
        description: "eVisa and Visa-on-Arrival (30 days) are available for most nationalities at international airports and border checkpoints.",
        badge: "Visas",
    },
];

export const travelGuidesFaqLists: FaqListDto[] = [
    {
        question: "Is Laos safe for solo travelers and families?",
        answer: "Yes! Laos is statistically one of the safest countries in Southeast Asia. Locals are welcoming, violent crime is extremely rare, and tour routes are well established.",
    },
    {
        question: "Can Brother Tour arrange private drivers and train tickets together?",
        answer: "Absolutely. We specialize in seamless door-to-door packages including private van transfers, LCR train reservations, and licensed local guides.",
    },
    {
        question: "How far in advance should I book my Laos trip?",
        answer: "For high season (November to February), we recommend booking 3 to 4 weeks early to secure preferred hotel rooms and LCR train seats.",
    },
];