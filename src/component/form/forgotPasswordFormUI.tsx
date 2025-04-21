import React from 'react';
import { TextField, Button, Typography, Stack, Link } from '@mui/material';
import type {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ForgotPasswordFormUIProps {
    onSubmit: () => void;
    register: any;
    errors: any;
    handleLoginClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    router: AppRouterInstance;
}

const ForgotPasswordFormUI: React.FC<ForgotPasswordFormUIProps> = ({
                                                                       onSubmit,
                                                                       register,
                                                                       errors,
                                                                       handleLoginClick,
                                                                       router
                                                                   }) => {
    return (
        <form onSubmit={onSubmit}>
            <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}>
                Forgot Password
            </Typography>

            <Stack spacing={3}>
                <TextField
                    label="Your Email"
                    type="email"
                    fullWidth
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Reset Password
                </Button>
            </Stack>

            <Typography variant="body2" textAlign="center" mt={2}>
                Remember your password?{' '}
                <Link href="#" onClick={(e) => { e.preventDefault(); router.push('/auth/sign-in'); }}>
                    Sign in
                </Link>
            </Typography>
        </form>
    );
};

export default ForgotPasswordFormUI;
