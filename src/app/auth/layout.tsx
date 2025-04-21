import React from 'react';
import { Card, CardContent, Container, Box, Typography } from '@mui/material';

type AuthLayoutProps = {
    title: string;
    children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    const currentDate = new Date();  // Get current date and time
    const formattedDate = currentDate.toLocaleString();  // Format the date and time

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',  // Arrange items vertically
                justifyContent: 'center',  // Center the card vertically
                alignItems: 'center',  // Center the card horizontally
                height: '100vh',  // Ensure the container takes full viewport height
                mt: 0,
                padding: 0  // Remove default padding to ensure full use of height
            }}
        >
            {/* Content (Card) */}
            <Card sx={{ width: '100%', boxShadow: 6 }}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>

            {/* Footer */}
            <Box sx={{
                textAlign: 'center',
                py: 2,
                width: '100%',
                position: 'absolute',
                bottom: 0
            }}>
                <Typography variant="body2" color="text.secondary">
                    &copy; {currentDate.getFullYear()} Your Company. All rights reserved.
                </Typography>
            </Box>
        </Container>
    );
};

export default AuthLayout;
