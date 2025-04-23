import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { logger } from "@/lib/logger";
import GoogleProvider from "next-auth/providers/google";

// Constants for predefined credentials (could be moved to a config file)
const PREDEFINED_EMAIL = "a@b.com";
const PREDEFINED_PASSWORD = "Aa@123";
const ACCESS_TOKEN = "access token";

// Function to validate the credentials
const validateCredentials = (email: string, password: string) => {
    if (email === PREDEFINED_EMAIL && password === PREDEFINED_PASSWORD) {
        return {
            id: "1",
            name: "Vahid",
            accessToken: ACCESS_TOKEN,
            email,
        };
    }
    logger.error(`Invalid credentials provided for sign-in email: ${email}`)
    return null;
};

// Check if credentials are valid
const isValidCredentials = (credentials: { email?: string; password?: string }) => {
    const email = credentials?.email;
    const password = credentials?.password;
    if (!email || !password) {
        logger.error(`Email and password are required - email: ${email || "Not provided"}`);
        return false;
    }
    return true;
};

// NextAuth configuration
export const { handlers, auth } = NextAuth({
    providers: [
        Credentials({
            authorize: async (credentials) => {
                if (!isValidCredentials(credentials)) return null;
                return validateCredentials(credentials.email as string, credentials.password as string);
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    params: {
                        prompt: "consent",
                        access_type: "offline",
                        response_type: "code"
                    }
                }
            }
        })
    ],
    callbacks: {
        // Handle JWT callback
        jwt: async ({ token, user }) => {
            if (user) {
                token.accessToken = user.accessToken;
            }
            return token;
        },

        // Handle session callback
        session: async ({ token, session }) => {
            session.accessToken = token.accessToken;
            return session;
        },

        // Handle authorization logic for protected routes
        authorized: async ({ request, auth }) => {
            const isAuthenticated = Boolean(auth?.accessToken);
            const isPrivateRoute = request.nextUrl.pathname.startsWith("/dashboard");

            if (!isAuthenticated && isPrivateRoute) {
                return redirectToSignIn(request);
            }
            return true;
        },
    },
});

// Redirect to sign-in page if not authenticated
const redirectToSignIn = (request: Request) => {
    const redirectUrl = new URL("/auth/sign-in", request.url);
    return Response.redirect(redirectUrl);
};
