import { LucideIcon } from "lucide-react";

export interface QuickInfoDto {
    icon: LucideIcon;
    title: string;
    description: string;
    badge: string;
}

export interface GuideCardDto {
    title: string;
    category: string;
    readTime: string;
    description: string;
    slug: string;
}


export interface FaqListDto {
    question: string;
    answer: string;
}