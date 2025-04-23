'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signInValidationSchema, SignInFormData} from '@/schema';
import {SignInFormUI} from '@/component';
import {signIn} from 'next-auth/react';

const SignInForm: React.FC = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInValidationSchema),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });

    const onSubmit = async (data: SignInFormData) => {
        setAuthError(null);

        // Handle authentication error
        const handleAuthError = () => {
            setAuthError("Invalid email or password");
        };

        // Handle successful login
        const handleSuccessfulLogin = () => {
            router.push("/dashboard");
        };

        try {
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (res?.error) {
                handleAuthError();
            } else {
                handleSuccessfulLogin();
            }
        } catch (error) {
            handleAuthError();
        }
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleOAuthSignIn = async (provider) => {
        await signIn(provider, {redirectTo: "/dashboard"});
    }

    return (
        <SignInFormUI
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            showPassword={showPassword}
            togglePasswordVisibility={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            router={router}
            authError={authError}
            handleOAuthSignIn={handleOAuthSignIn}
        />
    );
};

export default SignInForm;
