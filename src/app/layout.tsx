import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import ReduxProvider from "./store/provider";
import Navbar from "@/components/nav/navabar";
import ApiClient from "@/utils/services/api-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenReport",
  description: "GenReport",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   await ApiClient.initClient()
  return (
    <html lang="en">
      <body className={inter.className} >
  
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Navbar/>
          {children}
        </ThemeProvider>
        

      </body>
    </html>
  );
}
