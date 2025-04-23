"use client";

import { useSession, signOut } from "next-auth/react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Dashboard() {
    const { data: session, status } = useSession();

    const handleSignOut = () => {
        signOut({ redirectTo: "/auth/sign-in" });
    };
    return (
        <>
            <AppBar position="static" color="primary" sx={{ mb: 4 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">
                        Welcome, {session.user.name}!
                    </Typography>
                    <Button color="inherit" onClick={handleSignOut}>
                        Sign Out
                    </Button>
                </Toolbar>
            </AppBar>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                minHeight="80vh"
            >
                <Typography variant="h5">
                    This is your dashboard
                </Typography>
            </Box>
        </>
    );
}
