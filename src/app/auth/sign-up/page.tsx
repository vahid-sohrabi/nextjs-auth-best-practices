'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {SignUpFormUI} from '@/component';
import { signUpValidationSchema, SignUpFormData } from '@/schema';

const SignUpPage: React.FC = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpValidationSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: SignUpFormData) => {
        console.log('Form Submitted:', data);
        router.push('/auth/sign-in');
    };

    return (
        <SignUpFormUI
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            showPassword={showPassword}
            togglePasswordVisibility={() => setShowPassword((prev) => !prev)}
            router={router}
        />
    );
};

export default SignUpPage;
