import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { AuthResponse } from "@/lib/types/authentication";

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
        const payload: AuthResponse = await response.json();

        if ("code" in payload) {
          throw new Error(payload.message);
        }
        return {
          id: payload.user._id,
          accessToken: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        (token.accessToken = user.accessToken), 
        (token.user = user.user);
      }
      console.log("jwt", token);
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      console.log(session);
      return session;
    },
  },
};
