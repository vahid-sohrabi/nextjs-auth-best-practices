// src/schemas/verificationCodeValidationSchema.ts
import { z } from 'zod';

// Validation schema with Zod
export const verificationCodeValidationSchema = z.object({
    verificationCode: z
        .string()
        .length(6, 'OTP must be exactly 6 characters long')
        .regex(/^\d{6}$/, 'OTP must be numeric and exactly 6 digits')
});

export type VerificationCodeFormData = z.infer<typeof verificationCodeValidationSchema>;
