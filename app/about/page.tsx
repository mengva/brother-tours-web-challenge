import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Brother Tours — locally led tours across Southeast Asia.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-semibold text-stone-900">About Brother Tours</h1>
    </div>
  );
}
