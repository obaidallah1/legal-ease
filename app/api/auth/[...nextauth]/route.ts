import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // Add more configuration options here if needed
};

// Create a handler for NextAuth
const handler = NextAuth(authOptions);

// Export the handler for GET and POST methods
export { handler as GET, handler as POST };
