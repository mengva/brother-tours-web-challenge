import z from "zod";

// 1. Define Zod Validation Schema
export const bookingSchema = z.object({
    tourId: z.string().min(1, "Please select a tour package"),
    date: z.string().min(1, "Travel date is required"),
    adults: z.coerce.number().min(1, "At least 1 adult is required"),
    children: z.coerce.number().min(0, "Cannot be negative"),
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(8, "Phone / WhatsApp must be at least 8 digits"),
    specialRequests: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;