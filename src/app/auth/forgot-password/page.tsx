'use client';

import React, {MouseEvent} from 'react';
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {forgotPasswordValidationSchema, ForgotPasswordFormData} from '@/schema';
import {ForgotPasswordFormUI} from '@/component';

const ForgotPasswordForm: React.FC = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordValidationSchema),
        mode: 'onBlur',
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = (data: ForgotPasswordFormData) => {
        console.log('Form Data:', data);
        router.push('/auth/verification-code');
    };

    const handleLoginClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push('/auth/sign-in');
    };

    return (
        <ForgotPasswordFormUI
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            handleLoginClick={handleLoginClick}
            router={router}
        />
    );
};

export default ForgotPasswordForm;
