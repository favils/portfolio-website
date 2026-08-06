import "./globals.css";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";
import Nav from "@/components/layout/Nav";
import GrainOverlay from "@/components/layout/GrainOverlay";
import CoordinateReadout from "@/components/layout/CoordinateReadout";

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

export const metadata = {
  title: "Fatima Villena — Engineer / Designer",
  description:
    "Portfolio of Fatima Villena, full-stack developer and graphic designer based in Miami, FL.",
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
