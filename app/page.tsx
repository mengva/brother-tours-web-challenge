
import Link from 'next/link';
import {
  Search,
  MapPin,
  Calendar,
  Star,
  Clock,
  Users,
  ArrowRight,
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Overlay & Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20 mb-6 animate-bounce">
            <Compass className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
              Discover Authentic Southeast Asia
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
            Unforgettable Journeys in <span className="text-amber-400">Laos</span> & Beyond
          </h1>

          <p className="mt-4 text-base md:text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Experience rich culture, breathtaking landscapes, and local hospitality with our expertly crafted tour packages.
          </p>

          {/* Search / Filter Bar */}
          <div className="mt-10 max-w-4xl mx-auto rounded-3xl md:rounded-full bg-white p-3 md:p-4 shadow-2xl border border-slate-100 text-slate-800 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            {/* Destination Input */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors">
              <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-slate-400">Where to?</span>
                <input
                  type="text"
                  placeholder="e.g. Luang Prabang"
                  className="w-full text-sm font-semibold bg-transparent border-none outline-none placeholder-slate-400"
                />
              </div>
            </div>

            {/* Tour Type Select */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors border-t md:border-t-0 md:border-l border-slate-100">
              <Compass className="h-5 w-5 text-amber-500 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[10px] uppercase font-bold text-slate-400">Tour Type</span>
                <select className="w-full text-sm font-semibold bg-transparent border-none outline-none text-slate-700 cursor-pointer">
                  <option value="">All Types</option>
                  <option value="cultural">Cultural & Heritage</option>
                  <option value="adventure">Adventure & Nature</option>
                  <option value="relax">Relaxation</option>
                </select>
              </div>
            </div>

            {/* Duration Select */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl md:rounded-full hover:bg-slate-50 transition-colors border-t md:border-t-0 md:border-l border-slate-100">
              <Calendar className="h-5 w-5 text-amber-500 shrink-0" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[10px] uppercase font-bold text-slate-400">Duration</span>
                <select className="w-full text-sm font-semibold bg-transparent border-none outline-none text-slate-700 cursor-pointer">
                  <option value="">Any Days</option>
                  <option value="1-3">1 - 3 Days</option>
                  <option value="4-7">4 - 7 Days</option>
                  <option value="8+">8+ Days</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center gap-2 w-full h-full py-3.5 px-6 rounded-2xl md:rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition-all">
              <Search className="h-4 w-4" />
              <span>Search Tours</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: 'Expert Local Guides',
              desc: 'Our local guides bring history, culture, and hidden gems to life for an unforgettable journey.'
            },
            {
              icon: ShieldCheck,
              title: 'Tailor-Made Experience',
              desc: 'Customized itineraries designed around your preferences, group size, and travel pace.'
            },
            {
              icon: HeartHandshake,
              title: 'Sustainable Tourism',
              desc: 'We support local communities and protect nature to preserve authentic beauty.'
            }
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED TOURS */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Featured Packages</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Popular Tour Packages</h2>
            </div>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors group"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Tour Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: '10-Day Laos Cultural Discovery',
                image: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=800&q=80',
                location: 'Luang Prabang, Vang Vieng, Vientiane',
                duration: '10 Days',
                rating: 4.9,
                reviews: 128,
                price: '$1,250'
              },
              {
                id: 2,
                title: 'Vang Vieng Adventure & Nature Escape',
                image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
                location: 'Vang Vieng, Laos',
                duration: '4 Days',
                rating: 4.8,
                reviews: 86,
                price: '$450'
              },
              {
                id: 3,
                title: 'Southern Laos & 4,000 Islands Heritage',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
                location: 'Pakse, Champasak, Don Det',
                duration: '6 Days',
                rating: 5.0,
                reviews: 42,
                price: '$790'
              }
            ].map((tour) => (
              <div key={tour.id} className="group flex flex-col rounded-3xl bg-slate-50 border border-slate-200/60 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image & Badge */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span>{tour.rating}</span>
                    <span className="text-slate-400 font-normal">({tour.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 mb-2">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{tour.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {tour.title}
                    </h3>

                    <div className="flex items-center gap-4 mt-4 text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-slate-400" />
                        <span>Small Group</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">From</span>
                      <span className="text-xl font-black text-slate-900">{tour.price}</span>
                    </div>

                    <Link
                      href={`/tours/${tour.id}`}
                      className="px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION (CTA) */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Customized Travel</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 leading-tight">
              Looking for a Custom Trip Itinerary?
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
              Tell us your travel style, budget, and desired destinations. Our team will tailor-make an exclusive itinerary just for you!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-500/20"
              >
                Create Custom Tour
              </Link>
              <Link
                href="/about-us"
                className="px-6 py-3.5 rounded-full bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 active:scale-95 transition-all border border-slate-700"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}