export interface GuideItem {
    title: string;
    category: string;
    readTime: string;
    description: string;
    slug: string;
}

export const travelGuidesList: GuideItem[] = [
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
