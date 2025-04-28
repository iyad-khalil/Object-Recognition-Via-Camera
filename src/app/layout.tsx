import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Vision",
  description: "AI-powered object recognition system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer className="bg-gray-100 py-4 mt-8">
          <p className="text-center text-muted">© 2024 Quantum Labs. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
