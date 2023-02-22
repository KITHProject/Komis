'use client'

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head/>
        <body>
          <div className="flex flex-col h-screen">
          <Header />
          <div className="flex-grow">
          {children}
          </div>
          <Footer />
          </div>
        </body>
      </html>
    </QueryClientProvider>
  );
}
