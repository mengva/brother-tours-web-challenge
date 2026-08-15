import Link from 'next/link';
import { Compass, ArrowLeft, MapPinOff } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-slate-50/50">
      <div className="max-w-md w-full text-center">
        
        {/* Badge Icon */}
        <div className="mx-auto w-24 h-24 rounded-3xl bg-amber-500/10 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 shadow-sm">
          <MapPinOff className="w-12 h-12 stroke-[1.5]" />
        </div>

        {/* Status Code & Title */}
        <span className="text-xs font-black tracking-widest text-amber-600 uppercase bg-amber-100/60 px-3 py-1 rounded-full">
          404 Error
        </span>
        
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-2">
          Destination Not Found
        </h1>
        
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
          The page or itinerary you are looking for does not exist or has been relocated.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-md hover:bg-slate-800 active:scale-[0.98] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/tours/10-day-laos-cultural-discovery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 text-white font-bold text-sm shadow-md shadow-amber-500/20 hover:bg-amber-600 active:scale-[0.98] transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore 10-Day Tour</span>
          </Link>
        </div>

      </div>
    </div>
  );
}