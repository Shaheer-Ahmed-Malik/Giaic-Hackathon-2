import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google"
import Header from "./components/Header";
import Footer from "./components/Footer";

const myfont = Montserrat({
  weight: ["400","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myfont.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
