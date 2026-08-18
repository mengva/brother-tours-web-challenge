"use client"

import { navigationList } from "@/utils/navigation";
import { usePathname } from "next/navigation";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, Compass, Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import * as Dialog from '@radix-ui/react-dialog';

export default function MobileNavigationPage() {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});

    const toggleMenu = (name: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const pathname = usePathname();

    const isActiveRoute = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <Dialog.Trigger asChild className="md:hidden">
                    <button
                        className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                        aria-label="Open Navigation Menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm data-[state=open]:animate-fadeIn" />
                    <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-2xl transition-transform data-[state=open]:animate-slideInRight flex flex-col justify-between overflow-y-auto">
                        <div>
                            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                                <span className="font-black text-lg text-slate-900">MENU</span>
                                <Dialog.Close asChild>
                                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
                                        <X className="h-5 w-5" />
                                    </button>
                                </Dialog.Close>
                            </div>

                            {/* Mobile Menu Items */}
                            <div className="flex flex-col gap-2 py-6">
                                {navigationList.map((item) => {
                                    const Icon = item.icon;
                                    const active = isActiveRoute(item.href);
                                    const hasChildren = item.children && item.children.length > 0;

                                    if (hasChildren) {
                                        return (
                                            <Collapsible.Root
                                                key={item.name}
                                                open={openMenus[item.name]}
                                                onOpenChange={() => toggleMenu(item.name)}
                                            >
                                                <Collapsible.Trigger asChild className="w-full">
                                                    <button
                                                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-base font-bold transition-colors ${active
                                                            ? 'text-amber-600 bg-amber-50'
                                                            : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Icon className="h-5 w-5 text-amber-500" />
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <ChevronDown
                                                            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${openMenus[item.name] ? 'rotate-180' : ''
                                                                }`}
                                                        />
                                                    </button>
                                                </Collapsible.Trigger>

                                                <Collapsible.Content className="ml-8 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">
                                                    {item.children.map((child, idx) => {
                                                        const isChildActive = pathname.includes(child.href);
                                                        return (
                                                            <Link
                                                                key={idx}
                                                                href={child.href}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className={`py-2 px-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${isChildActive
                                                                    ? 'text-amber-600 bg-amber-50/50'
                                                                    : 'text-slate-600 hover:text-amber-600'
                                                                    }`}
                                                            >
                                                                <Compass className="h-4 w-4 text-emerald-600" />
                                                                <span>{child.name}</span>
                                                            </Link>
                                                        );
                                                    })}
                                                </Collapsible.Content>
                                            </Collapsible.Root>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-bold transition-colors ${active
                                                ? 'text-amber-600 bg-amber-50'
                                                : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            <Icon className="h-5 w-5 text-amber-500" />
                                            <span>{item.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                            <Link
                                href="/tours"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-3 text-center rounded-xl bg-amber-500 text-white font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                            >
                                Book A Tour Now
                            </Link>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )


}