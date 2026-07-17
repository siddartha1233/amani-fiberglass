import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amanifiberglass.com"),
  title: "Car Wash Trolleys | Car Wash Trolleys UAE",

  description:
    "Amani Fiberglass specializes in fiberglass car wash trolleys, detailing carts, and custom commercial fiberglass solutions in the UAE.",

  keywords: [
    "car wash trolley",
    "car wash trolley UAE ",
    "Fiberglass trolley UAE",
    "Car wash trolley",
    "Fiberglass car wash cart",
    "UAE fiberglass manufacturer",
    "Detailing trolley UAE",
    "Custom fiberglass UAE",
    "Commercial fiberglass products",
    "Car wash equipment UAE",
  ],

  authors: [
    {
      name: "Amani Fiberglass",
    },
  ],

  creator: "Amani Fiberglass",

  openGraph: {
    title: "Amani Fiberglass",
    description:
      "Fiberglass car wash trolleys and commercial fiberglass solutions in UAE.",

    url: "https://amanifiberglass.com",

    siteName: "Amani Fiberglass",

    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 1200,
        alt: "Amani Fiberglass",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}