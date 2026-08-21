import Link from 'next/link';
import {
  Calendar
} from 'lucide-react';
import BrotherTourLogoLinkPage from '../ui/BrotherTourLogo';
import DesktopNavigationPage from './DesktopNavigation';
import MobileNavigationPage from './MobileNavigation';

export default function HeaderPage() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">

        {/* 1. Logo Section */}
        <BrotherTourLogoLinkPage width={80} height={80} />

        {/* 2. Desktop Radix Navigation Menu */}
        <DesktopNavigationPage/>

        {/* 3. Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <Link
            href="/tours"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-500 to-emerald-600 text-white text-sm font-bold shadow-md shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="h-4 w-4" />
            <span className='text-nowrap'>Book A Tour</span>
          </Link>
        </div>

        {/* 4. Mobile Menu Trigger */}
        <MobileNavigationPage />

      </div>
    </header>
  );
}