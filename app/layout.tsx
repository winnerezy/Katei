import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: "Katei",
  description: "A professional student manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
