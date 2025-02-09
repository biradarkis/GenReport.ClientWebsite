'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import ReduxProvider from "./store/provider";
import Navbar from "@/components/nav/navabar";
import ApiClient from "@/utils/services/api-client";
import { Provider } from "react-redux";
import { container } from "@/utils/di/inversify.config";
import DefaultStore from "@/state-management/store/app-store";

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store  =  container.get(DefaultStore);

  return (
    <html lang="en">
      <body className={inter.className} >
        <Provider store={store.store!}>
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"   
          enableSystem
          disableTransitionOnChange>
          <Navbar/>
          {children}
        </ThemeProvider>
        </Provider>

      </body>
    </html>
  );
}
