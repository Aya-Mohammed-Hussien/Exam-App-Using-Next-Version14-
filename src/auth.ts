import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginResponse } from "./lib/types/auth";


export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await fetch(
          `https://exam.elevateegy.com/api/v1/auth/signin`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const payload: ApiResponse<LoginResponse> = await response.json();
        // console.log("signin success" , payload)
        if ("code" in payload) {
          throw new Error(payload.message);
        }
        return {
          id: payload.user._id,
          ...payload.user,
          accessToken: payload.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user}) => {
      if (user) {
        token = {
          ...user,
        };
      }
    
      return token;
    },
    session: ({ session, token }) => {
      session = {
        ...session,
        _id: token._id,
        username: token.username,
        firstName: token.firstName,
        lastName: token.lastName,
        email: token.email || "",
        phone: token.phone,
        role: token.role,
        isVerified: token.isVerified,
      };
      return session;
    },
  },
};
