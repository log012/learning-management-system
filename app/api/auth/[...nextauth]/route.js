import { NextResponse } from "next/server";
import { query } from "@/app/db/db";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";


export const authOptions={
    // Configure one or more authentication providers
    session:{
        strategy:"jwt"
    },
    providers: [
        // ...add more providers here
        // Credentials provider
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log(credentials)
                if (!credentials) {
                    return null;
                }
                const result = await query({
                    query: "SELECT * FROM users WHERE email = ? AND password = ?",
                    values: [credentials.email, credentials.password],
                });
                if (result.length > 0) {
                    // return result[0];
                    console.log(result);
                    return result[0];
                } else {
                    console.log('login failed')
                    return null;
                }
            },
        })
    ],
    secret:'jwtsecret',
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;

            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id=token.id;
                session.user.role = token.role;
            
            }
            return session;
        },
    },
    
}


const handler=NextAuth(authOptions);
export {handler as GET,handler as POST}