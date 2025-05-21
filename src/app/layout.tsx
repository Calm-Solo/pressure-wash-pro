import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PressureWash Pro",
  description: "Professional pressure washing services for residential and commercial properties",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#1e3a8a", // Blue-900 color
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PressureWash Pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
        
        {/* Mobile Call Button - Fixed at bottom */}
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <a 
            href="tel:+15551234567" 
            className="flex items-center justify-center bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
