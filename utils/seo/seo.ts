import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface ConstructMetadataParams {
    title?: string;
    description?: string;
    image?: string;
    canonicalPath?: string;
}

export function constructMetadata({
    title,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    canonicalPath = "",
}: ConstructMetadataParams = {}): Metadata {
    const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

    return {
        title: pageTitle,
        description,
        alternates: {
            canonical: `${siteConfig.url}${canonicalPath}`,
        },
        openGraph: {
            title: pageTitle,
            description,
            images: [{ url: image }],
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description,
            images: [image],
        },
    };
}