import type { Metadata } from "next";

type Props = { params: Promise<{ destination: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destination } = await params;
  const name = destination.charAt(0).toUpperCase() + destination.slice(1);
  return {
    title: `${name} Tours`,
    description: `Browse tours in ${name} run by Brother Tours.`,
    alternates: { canonical: `/destinations/${destination}` },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { destination } = await params;
  const name = destination.charAt(0).toUpperCase() + destination.slice(1);
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-semibold text-stone-900">{name} Tours</h1>
      <p className="mt-2 text-stone-600">Tour listing for {name} — pull from `tours` table filtered by destination.</p>
    </div>
  );
}
