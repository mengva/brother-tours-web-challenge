
"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Calendar,
    Users,
    User,
    Mail,
    Phone,
    MessageSquare,
    CheckCircle2,
    Compass,
    ShieldCheck,
    Clock,
    AlertCircle
} from "lucide-react";
import { TourDto } from "@/types/tour";
import { BookingFormData, bookingSchema } from "@/validations/tours/tourSlugBook";

export default function BookFormTourComponentPage({
    tour
}: {
    tour: TourDto
}) {

    const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

    // 2. Initialize react-hook-form
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            tourId: tour.id,
            date: "",
            adults: 2,
            children: 0,
            fullName: "",
            email: "",
            phone: "",
            specialRequests: "",
        },
    });

    // Watch form values for dynamic price calculation
    const watchedTourId = useWatch({ control, name: "tourId" });
    const watchedAdults = useWatch({ control, name: "adults" }) || 1;
    const watchedChildren = useWatch({ control, name: "children" }) || 0;
    const watchedDate = useWatch({ control, name: "date" });

    const totalEstimatedPrice = tour.priceNumber * (watchedAdults + watchedChildren * 0.5);

    const onSubmit = async (data: BookingFormData) => {
        // Connect to API or WhatsApp dispatch
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSubmittedData(data);
    };

    if (submittedData) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="bg-white max-w-md w-full p-8 rounded-3xl border border-slate-100 shadow-xl text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Booking Request Received!</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Thank you, <span className="font-semibold text-slate-800">{submittedData.fullName}</span>! Our local team will verify availability for <span className="font-semibold text-slate-800">{selectedTour.title}</span> and confirm via WhatsApp/Email within 2 hours.
                    </p>
                    <button
                        onClick={() => {
                            setSubmittedData(null);
                            reset();
                        }}
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition"
                    >
                        Book Another Tour
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
                        <Compass className="w-3.5 h-3.5" /> Instant Booking Request
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        Book Your Laos Adventure
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Reserve your trips, train tickets, or custom tours with Brother Tours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Booking Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6"
                    >
                        {/* Tour Selection */}
                        <div className="space-y-1.5">
                            <label className="block text-sm font-bold text-slate-700">Select Package or Service</label>
                            <select
                                {...register("tourId")}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-slate-800 text-sm bg-white"
                            >
                                <option value={tour.id}>
                                    {tour.title} {tour.priceNumber > 0 ? `(${tour.price}/person)` : "(Custom Quote)"}
                                </option>
                            </select>
                            {errors.tourId && (
                                <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3.5 h-3.5" /> {errors.tourId.message}
                                </p>
                            )}
                        </div>

                        {/* Travel Date & Guests */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="bookingDate" className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-amber-500" /> Travel Date
                                </label>
                                <input
                                id="bookingDate"
                                    type="date"
                                    {...register("date")}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-slate-800 text-sm"
                                />
                                {errors.date && (
                                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" /> {errors.date.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                                    <Users className="w-4 h-4 text-amber-500" /> Number of Guests
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <input
                                            type="number"
                                            min="1"
                                            {...register("adults")}
                                            className="w-full px-3 py-3 rounded-xl border border-slate-200 text-center text-sm"
                                            placeholder="Adults"
                                        />
                                        <span className="text-[10px] text-slate-400 block text-center mt-1">Adults</span>
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="number"
                                            min="0"
                                            {...register("children")}
                                            className="w-full px-3 py-3 rounded-xl border border-slate-200 text-center text-sm"
                                            placeholder="Children"
                                        />
                                        <span className="text-[10px] text-slate-400 block text-center mt-1">Children</span>
                                    </div>
                                </div>
                                {(errors.adults || errors.children) && (
                                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" /> {errors.adults?.message || errors.children?.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <h3 className="text-base font-bold text-slate-900">Contact Details</h3>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                                    <User className="w-3.5 h-3.5" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    {...register("fullName")}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 text-sm outline-none"
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName.message}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                                        <Mail className="w-3.5 h-3.5" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        {...register("email")}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 text-sm outline-none"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                                        <Phone className="w-3.5 h-3.5" /> Phone / WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+856 20 1234 5678"
                                        {...register("phone")}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 text-sm outline-none"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                                    <MessageSquare className="w-3.5 h-3.5" /> Special Requests
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Mention train route preferences, hotel specs, or dietary needs..."
                                    {...register("specialRequests")}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 text-sm outline-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all text-base"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                        </button>
                    </form>

                    {/* Sidebar Summary */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                                Booking Summary
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-slate-600">
                                    <span>Selected Package:</span>
                                    <span className="font-semibold text-slate-900 text-right max-w-[200px]">
                                        {tour.title}
                                    </span>
                                </div>

                                <div className="flex justify-between text-slate-600">
                                    <span>Travelers:</span>
                                    <span className="font-semibold text-slate-900">
                                        {watchedAdults} Adult(s), {watchedChildren} Child(ren)
                                    </span>
                                </div>

                                <div className="flex justify-between text-slate-600">
                                    <span>Travel Date:</span>
                                    <span className="font-semibold text-slate-900">
                                        {watchedDate || "Not selected"}
                                    </span>
                                </div>

                                <hr className="border-slate-100" />

                                <div className="flex justify-between text-base font-bold text-slate-900 pt-1">
                                    <span>Estimated Total:</span>
                                    <span className="text-emerald-600 text-lg">
                                        {tour.priceNumber > 0 ? `$${totalEstimatedPrice}` : "Custom Quote"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 space-y-3 text-xs text-slate-700">
                            <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
                                <ShieldCheck className="w-5 h-5 text-emerald-600" /> Guarantee & Peace of Mind
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Fast response within 2 hours via WhatsApp or Email.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>Zero hidden fees. Pay securely only after itinerary confirmation.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}