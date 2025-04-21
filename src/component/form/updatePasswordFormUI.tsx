import React, { useState } from 'react';
import { TextField, Button, Stack, IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import type { UpdatePasswordFormData } from '@/schema';

interface Props {
    register: any;
    errors: any;
    handleSubmit: (callback: (data: UpdatePasswordFormData) => void) => React.FormEventHandler<HTMLFormElement>;
    onSubmit: (data: UpdatePasswordFormData) => void;
}

const UpdatePasswordFormUI: React.FC<Props> = ({ register, errors, handleSubmit, onSubmit }) => {
    const [showPasswords, setShowPasswords] = useState({
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field: 'new' | 'confirm') => {
        setShowPasswords((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}>
                Update Password
            </Typography>

            <Stack spacing={3}>
                <TextField
                    label="Your Email"
                    type="email"
                    fullWidth
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="New Password"
                    type={showPasswords.new ? 'text' : 'password'}
                    fullWidth
                    {...register('newPassword')}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword?.message}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => togglePasswordVisibility('new')} edge="end">
                                    {showPasswords.new ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    label="Re-enter New Password"
                    type={showPasswords.confirm ? 'text' : 'password'}
                    fullWidth
                    {...register('confirmNewPassword')}
                    error={!!errors.confirmNewPassword}
                    helperText={errors.confirmNewPassword?.message}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => togglePasswordVisibility('confirm')} edge="end">
                                    {showPasswords.confirm ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Update Password
                </Button>
            </Stack>
        </form>
    );
};

export default UpdatePasswordFormUI;
