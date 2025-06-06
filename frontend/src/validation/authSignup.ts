import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email({ message: "Invalid email format" }),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-zA-Z]/, {
        message: "Password must contain at least one letter",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number",
      })

      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Confirm Password must be at least 8 characters long",
      })
      .regex(/[a-zA-Z]/, {
        message: "Confirm Password must contain at least one letter",
      })
      .regex(/[0-9]/, {
        message: "Confirm Password must contain at least one number",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Confirm Password must contain at least one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ISignup = z.infer<typeof signupSchema>;
