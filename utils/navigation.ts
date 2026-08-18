
import {
    LucideBookOpen,
    LucideCompass,
    LucideHome,
    LucideInfo,
    LucideMap,
    LucidePhone,
    type LucideIcon
} from "lucide-react";

export type NavChild = {
    name: string;
    href: string;
    icon: LucideIcon;
    isActive: boolean;
};

export type NavItem = {
    name: string;
    href: string;
    icon: LucideIcon;
    isActive: boolean;
    children: NavChild[];
};

export const navigationList: NavItem[] = [
    {
        name: "Home",
        href: "/",
        icon: LucideHome,
        isActive: false,
        children: [],
    },
    {
        name: "Tours",
        href: "/tours",
        icon: LucideCompass,
        isActive: false,
        children: [],
    },
    {
        name: "Destinations",
        href: "/destinations",
        icon: LucideMap,
        isActive: false,
        children: [],
    },
    {
        name: "Travel Guide",
        href: "/travel-guide",
        icon: LucideBookOpen,
        isActive: false,
        children: [],
    },
    {
        name: "About Us",
        href: "/about",
        icon: LucideInfo,
        isActive: false,
        children: [],
    },
    {
        name: "Contact",
        href: "/contact",
        icon: LucidePhone,
        isActive: false,
        children: [],
    },
];