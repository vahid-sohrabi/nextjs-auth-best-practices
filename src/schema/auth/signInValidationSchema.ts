// schemas/auth/signInValidationSchema.ts
import { z } from 'zod';

export const signInValidationSchema = z.object({
    email: z
        .string()
        .email('Please enter a valid email address')
        .nonempty('Email is required'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[@$!%*?&]/, 'Password must contain at least one special character')
        .nonempty('Password is required'),
    rememberMe: z.boolean().optional()
});

export type SignInFormData = z.infer<typeof signInValidationSchema>;
