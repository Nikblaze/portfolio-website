import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header, Footer } from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kumarnikhil.vercel.app"),
  title: {
    default: "Nikhil Kumar — Software Engineer",
    template: "%s | Nikhil Kumar",
  },
  description:
    "Full-stack software engineer with Team Lead responsibilities. Selected work across product engineering, backend workflows, cloud delivery, and applied AI.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Nikhil Kumar",
    title: "Nikhil Kumar — Software Engineer",
    description: "Building software that makes complex things simple.",
  },
  twitter: { card: "summary" },
};
export const viewport: Viewport = { themeColor: "#f5f1e9" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site" id="top">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
