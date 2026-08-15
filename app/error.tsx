'use client';

import { useEffect, useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        console.error('Brother Tours Runtime Error:', error);
    }, [error]);

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-slate-50/30">
            <AlertDialog.Root open={open} onOpenChange={setOpen}>
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm data-[state=open]:animate-fadeIn" />
                    <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 data-[state=open]:animate-contentShow text-center outline-none">

                        {/* Warning Icon */}
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mb-4">
                            <AlertTriangle className="w-8 h-8" />
                        </div>

                        <AlertDialog.Title className="text-xl font-black text-slate-900 mb-1">
                            System Interrupted
                        </AlertDialog.Title>

                        <AlertDialog.Description className="text-slate-500 text-sm leading-relaxed mb-6">
                            An unexpected error occurred while loading this page. Please try refreshing or return to the homepage.
                        </AlertDialog.Description>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                            <AlertDialog.Action asChild>
                                <button
                                    onClick={() => reset()}
                                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-white font-bold text-sm shadow-md shadow-amber-500/20 hover:bg-amber-600 active:scale-[0.98] transition-all cursor-pointer"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    <span>Try Again</span>
                                </button>
                            </AlertDialog.Action>

                            <AlertDialog.Cancel asChild>
                                <Link
                                    href="/"
                                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 active:scale-[0.98] transition-all"
                                >
                                    <Home className="w-4 h-4 text-slate-400" />
                                    <span>Go Home</span>
                                </Link>
                            </AlertDialog.Cancel>
                        </div>

                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>
        </div>
    );
}