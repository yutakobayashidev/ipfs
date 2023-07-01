import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yuta Kobayashi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/320/apple/354/waving-hand_1f44b.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
