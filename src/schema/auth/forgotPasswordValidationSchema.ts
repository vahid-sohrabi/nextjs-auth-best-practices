import { z } from "zod";

export const forgotPasswordValidationSchema = z.object({
    email: z
        .string()
        .nonempty('Email is required')
        .email('Please enter a valid email address'),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordValidationSchema>;
