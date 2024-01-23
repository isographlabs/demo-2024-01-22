import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "repo",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ account, token, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    async session({ token, session }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
};
export default NextAuth(authOptions);
