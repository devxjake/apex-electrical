import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apex Electrical | Certified Electricians in the West Midlands",
  description:
    "Fast, reliable, and NICEIC-approved domestic electrical services across the West Midlands. From consumer unit upgrades to emergency fault finding—get your free quote today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
