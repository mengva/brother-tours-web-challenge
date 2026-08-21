"use client";

import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InquiryFormValues, inquirySchema } from "@/validations/contact";

export default function InquiryFormContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<InquiryFormValues>({
        resolver: zodResolver(inquirySchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            destination: "luang-prabang",
            travelers: 2,
            date: "",
            message: "",
        },
    });

    const onSubmit = async (data: InquiryFormValues) => {
        console.log("Tour Inquiry Submitted:", data);
        // Add your tRPC / Hono API call here
        reset();
    };

    return (
        <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                {...register("name")}
                                className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition ${errors.name
                                    ? "border-red-500 focus:ring-red-500/20"
                                    : "border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-500"
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                {...register("email")}
                                className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition ${errors.email
                                    ? "border-red-500 focus:ring-red-500/20"
                                    : "border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-500"
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* Phone & Destination Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                            <input
                                type="tel"
                                placeholder="+856 20 ..."
                                {...register("phone")}
                                className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition ${errors.phone
                                    ? "border-red-500 focus:ring-red-500/20"
                                    : "border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-500"
                                    }`}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="destination" className="block text-sm font-medium text-slate-700 mb-1">Target Destination</label>
                            <select
                                id="destination"
                                {...register("destination")}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition bg-white"
                            >
                                <option value="luang-prabang">Luang Prabang Heritage</option>
                                <option value="vang-vieng">Vang Vieng Adventure</option>
                                <option value="pakse">Pakse & Champasak Loop</option>
                                <option value="vientiane">Vientiane City Tour</option>
                                <option value="custom">Custom Private Package</option>
                            </select>
                            {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
                        </div>
                    </div>

                    {/* Date & Travelers Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Estimated Travel Date</label>
                            <input
                                id="date"
                                type="date"
                                {...register("date")}
                                className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition ${errors.date
                                    ? "border-red-500 focus:ring-red-500/20"
                                    : "border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-500"
                                    }`}
                            />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="number" className="block text-sm font-medium text-slate-700 mb-1">Number of Travelers</label>
                            <input
                                id="number"
                                type="number"
                                min="1"
                                {...register("travelers")}
                                className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition ${errors.travelers
                                    ? "border-red-500 focus:ring-red-500/20"
                                    : "border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-500"
                                    }`}
                            />
                            {errors.travelers && <p className="text-red-500 text-xs mt-1">{errors.travelers.message}</p>}
                        </div>
                    </div>

                    {/* Message Area */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Your Message or Requests</label>
                        <textarea
                            rows={4}
                            placeholder="Tell us about special requirements, budget preference, or hotel choices..."
                            {...register("message")}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                    >
                        <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Send Inquiry to Brother Tour"}
                    </button>
                </form>
            </div>
        </div>
    );
}