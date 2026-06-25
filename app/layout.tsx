import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keploy + Echo SQL Tutorial",
  description: "A beginner-friendly guide to API testing with Keploy and Go",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors`}>
        <ThemeProvider>
          <ThemeToggle />
          <div className="max-w-3xl mx-auto px-6 py-16 prose dark:prose-invert">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}