import z from "zod";

// 1. Define Zod Schema
export const inquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(6, "Phone/WhatsApp number is required"),
    destination: z.string().min(1, "Please select a destination"),
    travelers: z.coerce.number().min(1, "At least 1 traveler is required"),
    date: z.string().min(1, "Please select a travel date"),
    message: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;