import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={geist.className}>
        <div className="max-w-3xl mx-auto px-6 py-16 prose">
          {children}
        </div>
      </body>
    </html>
  );
}