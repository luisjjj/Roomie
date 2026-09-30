import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://roomie.ng";

export const metadata: Metadata = {
  title: "Roomie — Find someone you'll actually enjoy living with",
  description:
    "Roomie helps Nigerians find compatible roommates based on lifestyle, budget, location and accommodation needs. For students, NYSC members, young professionals and anyone sharing a place. Join early access.",
  keywords: [
    "roommate finder Nigeria",
    "find a roommate Nigeria",
    "student roommate Nigeria",
    "university roommate Nigeria",
    "find roommate Abuja",
    "find roommate Lagos",
    "student accommodation Nigeria",
    "shared apartment Nigeria",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Roomie — Find someone you'll actually enjoy living with",
    description:
      "Stop gambling with random roommates. Match on lifestyle, budget and habits. Built for Nigerian students, NYSC members and young professionals.",
    url: siteUrl,
    siteName: "Roomie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roomie — Find someone you'll actually enjoy living with",
    description:
      "Compatible roommates based on lifestyle, budget and location. Early access now open in Nigeria.",
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Roomie",
              url: siteUrl,
              description:
                "Nigerian roommate discovery platform matching people on lifestyle, budget and location.",
              audience: { "@type": "PeopleAudience", geographicArea: "Nigeria" },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
