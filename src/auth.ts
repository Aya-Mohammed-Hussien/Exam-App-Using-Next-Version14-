import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
        return { id: "2", name: "Aya", email: "aya@gmail.com" };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        (token.email = user.email);
        (token.name = user.name);
      }
      console.log(token)
      return token;
    },
    session: ({ session, token }) => {
      if (session.user?.email) {
        session.user.email = token.email;
        session.user.name = token.name
      }
      console.log(session)
      return session;
    },
  },
};
