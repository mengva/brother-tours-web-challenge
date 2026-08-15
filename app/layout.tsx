import type { Metadata } from "next";
import "../styles/globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/libs/schema";
import HeaderPage from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SITE_URL = "https://www.brothertours.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Brother Tours | Authentic Travel Experiences',
    template: '%s | Brother Tours',
  },
  description: 'Discover authentic cultural tours across Laos and Southeast Asia with Brother Tours.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Brother Tours',
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full w-full flex flex-col">
        <JsonLd data={organizationSchema()} />
        <HeaderPage />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
