'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePasswordFormUI } from '@/component';
import { updatePasswordValidationSchema, UpdatePasswordFormData } from '@/schema';

const UpdatePasswordPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdatePasswordFormData>({
        resolver: zodResolver(updatePasswordValidationSchema),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            newPassword: '',
            confirmNewPassword: '',
        }
    });

    const onSubmit = (data: UpdatePasswordFormData) => {
        console.log('Form submitted:', data);
        // API call logic for password update can go here
    };

    return (
        <UpdatePasswordFormUI
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}  // Pass handleSubmit as a prop
            onSubmit={onSubmit}  // Pass onSubmit as a prop
        />
    );
};

export default UpdatePasswordPage;
