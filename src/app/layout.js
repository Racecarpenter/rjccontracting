import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { Footer } from "./components/RjcShared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RJC Contracting | Civil Engineering & Concrete Construction in Arizona",
  description:
    "RJC Contracting provides civil engineering, concrete construction, onsite supervision, and consulting services throughout Mesa, Phoenix, and Arizona.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="rjc-site">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}