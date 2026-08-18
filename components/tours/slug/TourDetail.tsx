import { TourDto } from "@/types/tour";

export default function TourDetailComponentPage({ tour }: { tour: TourDto }) {
    return (
        <main className="container mx-auto py-10 px-4 max-w-5xl">
            {/* Hero Header */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                    <div>
                        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
                            {tour.duration}
                        </span>
                        <h1 className="text-4xl font-bold text-white mt-3">{tour.title}</h1>
                        <p className="text-gray-200 text-sm mt-1">📍 {tour.location}</p>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Overview</h2>
                        <p className="text-gray-600 leading-relaxed">{tour.description}</p>
                    </section>

                    {tour.highlights && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Highlights</h2>
                            <ul className="space-y-2">
                                {tour.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <span className="text-green-500 mr-2 font-bold">✓</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {tour.itinerary && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Itinerary</h2>
                            <div className="space-y-3">
                                {tour.itinerary.map((item) => (
                                    <div key={item.day} className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <span className="w-20 font-bold text-blue-600">Day {item.day}</span>
                                        <span className="text-gray-800 font-medium">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Booking Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm sticky top-6">
                        <div className="flex justify-between items-baseline mb-4">
                            <span className="text-gray-500 text-sm">Price per person</span>
                            <span className="text-3xl font-bold text-gray-900">{tour.price}</span>
                        </div>

                        <div className="flex items-center text-sm text-gray-600 mb-6">
                            <span className="text-yellow-500 mr-1">⭐ {tour.rating}</span>
                            <span>({tour.reviews} reviews)</span>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition mb-3">
                            Book Now
                        </button>
                    </div>
                </aside>
            </div>
        </main>
    )
}