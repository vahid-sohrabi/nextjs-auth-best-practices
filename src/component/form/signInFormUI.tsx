import React, { useState } from 'react';
import { Button, TextField, Typography, Stack, Link, IconButton, InputAdornment, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconActionButton } from '../index';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Props {
    onSubmit: () => void;
    register: any;
    errors: any;
    showPassword: boolean;
    togglePasswordVisibility: () => void;
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    router: any;
    authError: string | null;
    handleOAuthSignIn: (provider: string) => void;
}

const SignInFormUI: React.FC<Props> = ({
                                           onSubmit,
                                           register,
                                           errors,
                                           showPassword,
                                           togglePasswordVisibility,
                                           handleMouseDownPassword,
                                           router,
                                           authError,
                                           handleOAuthSignIn
                                       }) => {
    return (
        <form onSubmit={onSubmit} noValidate>
            <Typography
                variant="h5"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
            >
                Login to Your Account
            </Typography>

            {authError && <Alert severity="error" sx={{ mb: 3, mt: 1 }}>{authError}</Alert>}

            <Stack spacing={3}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={togglePasswordVisibility}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Sign In
                </Button>

                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
                    <IconActionButton Icon={GoogleIcon} onClick={() => handleOAuthSignIn("google")} label="Google sign-in" />
                    <IconActionButton Icon={GitHubIcon} onClick={() => { }} label="GitHub sign-in" />
                    <IconActionButton Icon={FacebookIcon} onClick={() => { }} label="Facebook sign-in" />
                    <IconActionButton Icon={TwitterIcon} onClick={() => { }} label="Twitter sign-in" />
                    <IconActionButton Icon={LinkedInIcon} onClick={() => { }} label="LinkedIn sign-in" />
                </Stack>

                <Typography variant="body2" textAlign="center">
                    Don’t have an account?{' '}
                    <Link href="#" onClick={(e) => {
                        e.preventDefault();
                        router.push('/auth/sign-up');
                    }}>
                        Sign up
                    </Link>
                </Typography>

                <Typography variant="body2" textAlign="center">
                    <Link href="#" onClick={(e) => {
                        e.preventDefault();
                        router.push('/auth/forgot-password');
                    }}>
                        Forgot password?
                    </Link>
                </Typography>
            </Stack>
        </form>
    );
};

export default SignInFormUI;
