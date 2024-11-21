import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { PORTOLFIO_DATA } from "@/data/portfolio-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: PORTOLFIO_DATA.name + " | " + PORTOLFIO_DATA.about,
  description: PORTOLFIO_DATA.about,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
