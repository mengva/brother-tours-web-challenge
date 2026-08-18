"use client"

import { navigationList } from '@/utils/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronDown, Compass } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopNavigationPage() {
    
    const pathname = usePathname();

    const isActiveRoute = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <NavigationMenu.Root className="relative z-10 hidden md:flex items-center justify-center">
                <NavigationMenu.List className="flex items-center gap-1 list-none m-0 p-0">
                    {navigationList.map((item) => {
                        const Icon = item.icon;
                        const active = isActiveRoute(item.href);
                        const hasChildren = item.children && item.children.length > 0;
                        if (hasChildren) {
                            return (
                                <NavigationMenu.Item key={item.name} className="relative">
                                    <NavigationMenu.Trigger
                                        className={`group flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer outline-none ${active
                                            ? 'text-amber-600 bg-amber-50'
                                            : 'text-slate-600 hover:text-amber-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.name}</span>
                                        <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                                    </NavigationMenu.Trigger>

                                    <NavigationMenu.Content className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
                                        <div className="grid gap-2">
                                            <span className="text-xs font-bold text-slate-400 px-2 uppercase tracking-wider">
                                                {item.name}
                                            </span>

                                            {item.children.map((child, index) => {
                                                const isChildActive = pathname.includes(child.href);

                                                return (
                                                    <Link
                                                        key={index}
                                                        href={child.href}
                                                        className={`p-2 text-sm font-medium ${isChildActive
                                                            ? 'text-amber-600 bg-amber-50'
                                                            : 'text-slate-600 hover:text-amber-600 hover:bg-slate-50'
                                                            } rounded-lg transition-colors flex items-center gap-2.5`}
                                                    >
                                                        <Compass className="h-4 w-4 text-emerald-600" />
                                                        {child.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                            );
                        }

                        return (
                            <NavigationMenu.Item key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${active
                                        ? 'text-amber-600 bg-amber-50'
                                        : 'text-slate-600 hover:text-amber-600 hover:bg-slate-50'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </Link>
                            </NavigationMenu.Item>
                        );
                    })}
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </>
    )
}