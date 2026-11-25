import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruth Lagurin | Personal Website",
  description: "Welcome to Ruth Lagurin's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">

        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">

            <Link
              href="/"
              className="text-xl font-bold text-blue-600"
            >
              Ruth Lagurin
            </Link>

            <div className="flex gap-6 font-medium">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Projects
              </Link>
            </div>

          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}
