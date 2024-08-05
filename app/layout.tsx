import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs';
import { dark, shadesOfPurple,neobrutalism } from '@clerk/themes';
import { Toaster } from "@/components/ui/toaster"

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ProModal } from "@/components/pro-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: shadesOfPurple,
      variables: {
        fontFamily: "'Roboto', sans-serif", 
        colorPrimary: '#4A90E2', 
        borderRadius: '8px', 
        fontSize: '14px', 
      },
    }}
    >
      <html lang='en' suppressHydrationWarning>
        <body className={cn("bg-secondary",inter.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ProModal/>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
