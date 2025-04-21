'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInValidationSchema, SignInFormData } from '@/schema';
import {SignInFormUI} from '@/component';

const SignInForm: React.FC = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInValidationSchema),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });

    const onSubmit = (data: SignInFormData) => {
        console.log('Form Data:', data);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <SignInFormUI
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            showPassword={showPassword}
            togglePasswordVisibility={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            router={router}
        />
    );
};

export default SignInForm;
