'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { verificationCodeValidationSchema, VerificationCodeFormData } from '@/schema';
import {VerificationCodeFormUI} from '@/component';

const VerificationCodeForm: React.FC = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<VerificationCodeFormData>({
        resolver: zodResolver(verificationCodeValidationSchema),
        mode: 'onBlur',
        defaultValues: {
            verificationCode: ''
        }
    });

    // Handle form submission
    const onSubmit = (data: VerificationCodeFormData) => {
        console.log('Form submitted with verification code:', data.verificationCode);
        router.push('/auth/update-password');
    };

    // Handle resend verification code request
    const handleResend = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        console.log('Resending verification code...');
        alert('A new verification code has been sent to your email!');
    };

    return (
        <VerificationCodeFormUI
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            handleResend={handleResend}
        />
    );
};

export default VerificationCodeForm;
