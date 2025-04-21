// updatePasswordValidationSchema.tsx
import { z } from 'zod';

// Zod schema for new password and confirmation
export const updatePasswordValidationSchema = z
    .object({
        email: z
            .string()
            .email('Please enter a valid email address')
            .nonempty('Email is required'),
        newPassword: z
            .string()
            .min(8, 'Password must be at least 8 characters long') // Minimum length of 8
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter') // At least one uppercase letter
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter') // At least one lowercase letter
            .regex(/[0-9]/, 'Password must contain at least one number') // At least one number
            .regex(/[@$!%*?&]/, 'Password must contain at least one special character') // At least one special character
            .nonempty('New password is required'),
        confirmNewPassword: z
            .string()
            .nonempty('Please confirm your new password') // Ensure confirmation is not empty
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: 'Passwords do not match', // This ensures the new password and confirm password match
        path: ['confirmNewPassword'],
    });

export type UpdatePasswordFormData = z.infer<typeof updatePasswordValidationSchema>;
