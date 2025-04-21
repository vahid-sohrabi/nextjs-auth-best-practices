import React from 'react';
import { Button, TextField, Typography, Link, Stack } from '@mui/material';

interface VerificationCodeFormUIProps {
    errors: any;
    register: any;
    onSubmit: (e: React.FormEvent) => void;
    handleResend: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const VerificationCodeFormUI: React.FC<VerificationCodeFormUIProps> = ({
                                                                           errors,
                                                                           register,
                                                                           onSubmit,
                                                                           handleResend
                                                                       }) => {
    return (
        <form onSubmit={onSubmit}>
            <Stack spacing={3}>
                <Typography
                    variant="h5"
                    component="h1"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    Enter the Verification Code
                </Typography>

                {/* OTP Input Section */}
                <TextField
                    label="Verification Code"
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    placeholder="Enter your verification code"
                    fullWidth
                    variant="outlined"
                    error={!!errors.verificationCode}
                    helperText={errors.verificationCode?.message}
                    {...register('verificationCode')}
                />

                {/* Submit Button */}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Verify Code
                </Button>

                {/* Action Links */}
                <Typography variant="body2" align="center">
                    Didn’t receive the code?{' '}
                    <Link
                        href="#"
                        onClick={handleResend}
                        color="primary"
                        underline="hover"
                    >
                        Resend
                    </Link>
                </Typography>
            </Stack>
        </form>
    );
};

export default VerificationCodeFormUI;
