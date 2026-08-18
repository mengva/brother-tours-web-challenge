'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import * as Collapsible from '@radix-ui/react-collapsible';
import {
  Compass,
  Menu,
  X,
  ChevronDown,
  Calendar
} from 'lucide-react';
import { navigationList } from '@/utils/navigation';
import BrotherTourLogoLinkPage from '../BrotherTourLogo';

export default function HeaderPage() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});

  const isActiveRoute = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">

        {/* 1. Logo Section */}
        <BrotherTourLogoLinkPage width={100} height={100} />

        {/* 2. Desktop Radix Navigation Menu */}
        <NavigationMenu.Root className="relative z-10 hidden md:flex items-center justify-center">
          <NavigationMenu.List className="flex items-center gap-1 list-none m-0 p-0">
            {navigationList.map((item) => {
              const Icon = item.icon;
              const active = isActiveRoute(item.href);
              const hasChildren = item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  // 🟢 ແກ້ໄຂ: ໃສ່ className="relative" ຢູ່ບ່ອນນີ້ ເພື່ອໃຫ້ Content ມັນ Positon ຕາມ Menu ນີ້!
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

                    {/* Content ຈະ absolute top-full left-0 ທຽບໃສ່ NavigationMenu.Item ຂອງມັນເອງແລ້ວ */}
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

        {/* 3. Action Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            href="/tours"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-500 to-emerald-600 text-white text-sm font-bold shadow-md shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="h-4 w-4" />
            <span>Book A Tour</span>
          </Link>
        </div>

        {/* 4. Mobile Menu Trigger */}
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

      </div>
    </header>
  );
}