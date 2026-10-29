import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Alpacala Wireless — Your Trusted Prepaid Wireless Partner",
  description:
    "Alpacala Wireless is a B2B wholesale distributor of SIM cards and wireless activation services. Bulk SIM purchasing, SIM & eSIM activation, plan management and dealer support across major U.S. carrier networks.",
  metadataBase: new URL("https://alpacala-wireless.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "Alpacala Wireless",
    title: "Alpacala Wireless — Your Trusted Prepaid Wireless Partner",
    description:
      "Bulk SIM distribution and activation for dealers, MVNOs and enterprise buyers across major U.S. carrier networks.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Alpacala Wireless — Your Trusted Prepaid Wireless Partner",
    description:
      "Bulk SIM distribution and activation for dealers, MVNOs and enterprise buyers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/img/logo.svg" type="image/svg+xml" />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
