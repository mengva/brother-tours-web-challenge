import { Calendar, Compass, MapPin, Search } from "lucide-react";

export default function HeroSectionPage() {
    return (
        <section className="relative h-[85vh] min-h-150 w-full flex items-center justify-center overflow-hidden">
            {/* Background Overlay & Gradient */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=2000&q=80')`
                }}
            >
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-slate-900/30" />
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
                            <label htmlFor="tourType" className="text-[10px] uppercase font-bold text-slate-400">Tour Type</label>
                            <select id="tourType" className="w-full text-sm font-semibold bg-transparent border-none outline-none text-slate-700 cursor-pointer">
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
                            <label htmlFor="duration" className="text-[10px] uppercase font-bold text-slate-400">duration</label>
                            <select id="duration" className="w-full text-sm font-semibold bg-transparent border-none outline-none text-slate-700 cursor-pointer">
                                <option value="">Any Days</option>
                                <option value="1-3">1 - 3 Days</option>
                                <option value="4-7">4 - 7 Days</option>
                                <option value="8+">8+ Days</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="flex items-center justify-center gap-2 w-full h-full py-3.5 px-6 rounded-2xl md:rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition-all">
                        <Search className="h-4 w-4" />
                        <span>Search Tours</span>
                    </button>
                </div>
            </div>
        </section>
    )
}