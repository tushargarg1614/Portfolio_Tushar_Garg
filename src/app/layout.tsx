import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Tushar Garg — Full Stack Developer",
  description:
    "Full Stack Developer building production-ready SaaS platforms, scalable web applications and practical AI-powered solutions. Based in Chandigarh, India.",
  openGraph: {
    title: "Tushar Garg — Full Stack Developer",
    description:
      "Building production-ready SaaS platforms, scalable web applications and AI-powered solutions.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
