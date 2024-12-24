import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextJs - Small Projects List",
  description: "A collection of Beginner friendly small and practical Next.js project examples",
  keywords: ["Next.js", "Examples", "Projects"],
  authors: [
    {
      name: "Sagar Shah",
      url: "https://github.com/saga-r-code",
    },
  ],
  creator: "Sagar Shah",
  openGraph: {
    title: "NextJs - Small Projects List",
    description: "A collection of Beginner friendly small and practical Next.js project examples",
    url: "https://nextjs-projects-list.vercel.app",
    siteName: "nextjs-projects-list",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

