import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import Footer from "@/components/cards/footer";
import Header from "@/components/cards/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   icons: {
    icon: [
      { url: '/Main Logo (Transparent).png' },
      { url: '/Main Logo (Transparent).png', type: 'image/png' },
    ],},
  title: "Food Ordering Website",
  description: "Food at it's Best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <StoreProvider> */}
          <Toaster richColors position="top-center" />
          <Header />
          {children}
          <Footer />
        {/* </StoreProvider> */}
      </body>
    </html>
  );
}
