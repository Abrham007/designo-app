import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import PageFooter from "@/components/PageFooter/PageFooter";
import { GoogleTagManager } from "@next/third-parties/google";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Designo Web App",
  description:
    "Abrham Araya portifolio project's made with Next, React and TypeScript hosted at Heroku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body>
        <PageHeader></PageHeader>
        {children}
        <PageFooter></PageFooter>
        <GoogleTagManager gtmId="GTM-MCRX3VVV" />
      </body>
    </html>
  );
}
