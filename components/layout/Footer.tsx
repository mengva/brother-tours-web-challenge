import Link from 'next/link';
import {
    Compass,
    MapPin,
    PhoneCall,
    Mail,
} from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { navigationList } from '@/utils/navigation';
import BrotherTourLogoLinkPage from '../ui/BrotherTourLogo';
import FooterFormPage from './FooterForm';

export default function FooterPage() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-900 text-slate-300">
            {/* 1. Top Newsletter / CTA Section */}
            <FooterFormPage/>

            {/* 2. Main Footer Content */}
            <div className="container mx-auto px-4 py-16 md:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <BrotherTourLogoLinkPage width={80} height={80}/>

                        <p className="text-sm text-slate-400 leading-relaxed pr-4">
                            Explore authentic travel experiences across Laos and Southeast Asia with local experts. Unforgettable memories start here.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                                aria-label="Instagram"
                            >
                                <BsInstagram className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                                aria-label="Youtube"
                            >
                                <BsYoutube className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                                aria-label="Whatsapp"
                            >
                                <BsWhatsapp className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {navigationList.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="hover:text-amber-500 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Destinations */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Destinations
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                { name: 'Luang Prabang', href: '/destinations/laos/luang-prabang' },
                                { name: 'Vang Vieng', href: '/destinations/laos/vang-vieng' },
                                { name: 'Vientiane', href: '/destinations/laos/vientiane' },
                                { name: 'Chiang Mai', href: '/destinations/thailand/chiang-mai' },
                                { name: 'Ha Long Bay', href: '/destinations/vietnam/ha-long-bay' },
                            ].map((dest) => (
                                <li key={dest.name}>
                                    <Link
                                        href={dest.href}
                                        className="flex items-center gap-1.5 hover:text-amber-500 transition-colors"
                                    >
                                        <Compass className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                                        <span>{dest.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Contact Us
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                                <span>Vientiane Capital, Lao PDR</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneCall className="h-5 w-5 text-amber-500 shrink-0" />
                                <a href="tel:+8562000000000" className="hover:text-amber-500 transition-colors">
                                    +856 20 0000 0000
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                                <a href="mailto:info@brothertours.com" className="hover:text-amber-500 transition-colors">
                                    info@brothertours.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* 3. Bottom Bar */}
            <div className="border-t border-slate-800 bg-slate-950/50 py-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 text-xs text-slate-500 md:px-8">
                    <p>© {currentYear} BROTHER TOURS. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}