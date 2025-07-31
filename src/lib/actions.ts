"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors.map((e) => e.message).join(", "),
      status: "error",
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll just log it and simulate a success response.
  console.log("Form data submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
    status: "success",
  };
}
