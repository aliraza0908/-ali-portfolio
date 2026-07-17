import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Ali Raza — AI Developer & Software Engineer",
  description:
    "Portfolio of Ali Raza, an AI Developer and Software Engineering student building intelligent, real-world solutions across AI, web development, and hardware integration.",
  keywords: [
    "Ali Raza",
    "AI Developer",
    "Software Engineer",
    "AI Engineer",
    "COMSATS",
    "Portfolio",
  ],
  authors: [{ name: "Ali Raza" }],
  openGraph: {
    title: "Ali Raza — AI Developer & Software Engineer",
    description:
      "Building intelligent, real-world solutions with AI, web development, and hardware integration.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
