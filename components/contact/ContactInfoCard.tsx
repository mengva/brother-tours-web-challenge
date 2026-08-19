import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactInfoCardPage() {
    return (
        <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
                <p className="text-slate-600">
                    We respond to all travel inquiries within 24 hours.
                </p>

                <div className="space-y-5">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Office Location</h4>
                            <p className="text-slate-600 text-sm">Lane Xang Avenue, Chanthaboury District, Vientiane, Laos</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Phone & WhatsApp</h4>
                            <p className="text-slate-600 text-sm">+856 20 55 123 456</p>
                            <p className="text-slate-600 text-sm">+856 20 99 876 543</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Email</h4>
                            <p className="text-slate-600 text-sm">booking@brothertour.la</p>
                            <p className="text-slate-600 text-sm">support@brothertour.la</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Working Hours</h4>
                            <p className="text-slate-600 text-sm">Mon - Sat: 08:00 AM - 06:00 PM</p>
                            <p className="text-slate-600 text-sm">Sun: Closed (Online support active)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social / Extra Card */}
            <div className="bg-emerald-900 text-white p-6 rounded-2xl flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg">Need Immediate Assistance?</h3>
                    <p className="text-emerald-200 text-sm">Chat directly with our team on WhatsApp</p>
                </div>
                <div
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 rounded-xl text-sm transition"
                >
                    Chat Now
                </div>
            </div>
        </div>
    )
}