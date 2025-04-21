import React from 'react';
import {
    Button,
    TextField,
    Typography,
    Stack,
    Link,
    IconButton,
    InputAdornment,
} from '@mui/material';
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
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void; // Add this line
    router: any;
}

const SignInFormUI: React.FC<Props> = ({
                                           onSubmit,
                                           register,
                                           errors,
                                           showPassword,
                                           togglePasswordVisibility,
                                           handleMouseDownPassword,  // Destructure this prop
                                           router,
                                       }) => {
    return (
        <form onSubmit={onSubmit} noValidate>
            <Typography
                variant="h5"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}
            >
                Login to Your Account
            </Typography>

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
                                    onClick={togglePasswordVisibility}  // Use togglePasswordVisibility here
                                    onMouseDown={handleMouseDownPassword}  // Use handleMouseDownPassword here
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
                    <IconActionButton Icon={GoogleIcon} onClick={() => {}} label="Google sign-in" />
                    <IconActionButton Icon={GitHubIcon} onClick={() => {}} label="GitHub sign-in" />
                    <IconActionButton Icon={FacebookIcon} onClick={() => {}} label="Facebook sign-in" />
                    <IconActionButton Icon={TwitterIcon} onClick={() => {}} label="Twitter sign-in" />
                    <IconActionButton Icon={LinkedInIcon} onClick={() => {}} label="LinkedIn sign-in" />
                </Stack>

                <Typography variant="body2" textAlign="center">
                    Don’t have an account?{' '}
                    <Link href="#" onClick={(e) => { e.preventDefault(); router.push('/auth/sign-up'); }}>
                        Sign up
                    </Link>
                </Typography>

                <Typography variant="body2" textAlign="center">
                    <Link href="#" onClick={(e) => { e.preventDefault(); router.push('/auth/forgot-password'); }}>
                        Forgot password?
                    </Link>
                </Typography>
            </Stack>
        </form>
    );
};

export default SignInFormUI;
