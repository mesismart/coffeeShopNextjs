import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "شرکت فنجان داغ خوارزمی - SET Coffee | فروشگاه اینترنتی قهوه ست",
  description: "My Coffee project with next.js ",

  icons: {
    icon: "https://banner2.cleanpng.com/20180310/zkq/av00w7um9.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
