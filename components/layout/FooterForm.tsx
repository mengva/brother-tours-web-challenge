"use client"

import { Send } from "lucide-react"

export default function FooterFormPage() {
    return (
        <div className="border-b border-slate-800 bg-slate-900/50">
            <div className="container mx-auto px-4 py-12 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl bg-linear-to-r from-amber-500/10 via-emerald-500/5 to-transparent p-6 md:p-10 border border-slate-800">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-black text-white tracking-tight">
                            Ready for your next adventure?
                        </h3>
                        <p className="text-sm text-slate-400">
                            Subscribe to get special discount offers and travel guides.
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex w-full md:w-auto items-center gap-2 max-w-md"
                    >
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full rounded-full bg-slate-800/80 px-4 py-3 pl-4 pr-10 text-sm text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:border-amber-500 transition-colors"
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-amber-400 active:scale-95 transition-all shrink-0"
                        >
                            <span>Join</span>
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}