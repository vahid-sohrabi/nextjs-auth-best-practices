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
    router: any;
}

const SignUpFormUI: React.FC<Props> = ({
                                           onSubmit,
                                           register,
                                           errors,
                                           showPassword,
                                           togglePasswordVisibility,
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
                Registration Form
            </Typography>

            <Stack spacing={3}>
                <TextField
                    label="First Name"
                    fullWidth
                    {...register('firstName')}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                />
                <TextField
                    label="Last Name"
                    fullWidth
                    {...register('lastName')}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                />
                <TextField
                    label="Email"
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
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Create Account
                </Button>

                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
                    <IconActionButton Icon={GoogleIcon} onClick={() => {}} label="Google sign-in" />
                    <IconActionButton Icon={GitHubIcon} onClick={() => {}} label="GitHub sign-in" />
                    <IconActionButton Icon={FacebookIcon} onClick={() => {}} label="Facebook sign-in" />
                    <IconActionButton Icon={TwitterIcon} onClick={() => {}} label="Twitter sign-in" />
                    <IconActionButton Icon={LinkedInIcon} onClick={() => {}} label="LinkedIn sign-in" />
                </Stack>

                <Typography variant="body2" textAlign="center">
                    Already have an account?{' '}
                    <Link href="#" onClick={(e) => { e.preventDefault(); router.push('/auth/sign-in'); }}>
                        Sign in
                    </Link>
                </Typography>
            </Stack>
        </form>
    );
};

export default SignUpFormUI;
