// components/seo/JsonLd.tsx
// export function TourJsonLd({ tour }: { tour: any }) {
//     const jsonLd = {
//         '@context': 'https://schema.org',
//         '@type': 'TouristTrip',
//         name: tour.name,
//         description: tour.description,
//         image: tour.coverImage,
//         touristType: tour.categories,
//         itinerary: {
//             '@type': 'ItemList',
//             itemListElement: tour.itinerary.map((day, index) => ({
//                 '@type': 'ListItem',
//                 position: index + 1,
//                 name: day.title,
//                 description: day.description,
//             })),
//         },
//         offers: {
//             '@type': 'Offer',
//             price: tour.price,
//             priceCurrency: 'USD',
//             availability: 'https://schema.org/InStock',
//             url: `https://brothertours.com/tours/${tour.slug}`,
//         },
//         provider: {
//             '@type': 'TravelAgency',
//             name: 'Brother Tours',
//             url: 'https://brothertours.com',
//         },
//     }

//     return (
//         <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//     )
// }

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output here is safe: it's our own generated
      // schema objects, not raw user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

