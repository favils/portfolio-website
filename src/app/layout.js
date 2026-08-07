import "./globals.css";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";
import Nav from "@/components/layout/Nav";
import GrainOverlay from "@/components/layout/GrainOverlay";
import CoordinateReadout from "@/components/layout/CoordinateReadout";
import CursorBlob from "@/components/layout/CursorBlob";

const departureMono = localFont({
  src: "../../public/fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
  display: "swap",
  weight: "400",
  style: "normal",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const title = "Fatima Villena — Engineer / Designer";
const description =
  "Portfolio of Fatima Villena, full-stack developer and graphic designer based in Miami, FL.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${departureMono.variable} ${spaceMono.variable} font-body`}
      >
        <GrainOverlay />
        <CursorBlob />
        <div className="relative z-10 mx-auto flex max-w-[1240px] xl:px-10">
          <Nav />
          <main className="min-w-0 flex-1 border-x border-hairline/60">
            {children}
          </main>
        </div>
        <CoordinateReadout />
      </body>
    </html>
  );
}
