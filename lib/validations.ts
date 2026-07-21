import { z } from "zod";
import { destinations } from "@/data/destinations";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone number can only contain digits and + - ( )"),
  destination: z.enum(
    ["not-sure", ...destinations.map((d) => d.slug)] as unknown as [string, ...string[]],
    { errorMap: () => ({ message: "Please select a preferred destination" }) }
  ),
  intake: z.enum(["next-3-months", "3-6-months", "6-12-months", "exploring"], {
    errorMap: () => ({ message: "Please select your study intake timeframe" }),
  }),
  message: z.string().max(1000).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
