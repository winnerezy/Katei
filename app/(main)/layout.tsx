'use client'

import { Poppins } from "next/font/google";
import "../../styles/globals.css";
import { SideBar } from "@/components/SideBar";
import { Provider } from "react-redux"
import store from "@/lib/redux/store";
import { NextUIProvider } from "@nextui-org/system";
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <NextUIProvider>
        <Provider store={store}>
            <main className="flex w-full min-h-screen">
                <SideBar/>
                {children}
            </main>
        </Provider>
      </NextUIProvider>
      </body>
    </html>
  );
}
