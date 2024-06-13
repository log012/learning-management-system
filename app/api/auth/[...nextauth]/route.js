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
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.role = token.role;
            }
            return session;
        },
    },
    
}

// export async function POST(req) {
//     try {
//         const { email, password } = await req.json();
//         const result = await query({
//             query: "SELECT * FROM users WHERE email = ? AND password = ?",
//             values: [email, password],
//         });

//         if (result.length > 0) {
//             return NextResponse.json({ message: "Login successful", user: result[0] }, { status: 200 });
//         } else {
//             return new NextResponse("Invalid email or password", { status: 401 });
//         }
//     } catch (error) {
//         console.error("Error during login:", error);
//         return new NextResponse("An error occurred during login", { status: 500 });
//     }

// }

const handler=NextAuth(authOptions);
export {handler as GET,handler as POST}