import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/layout/Nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Fatima Villena — Engineer / Designer",
  description:
    "Portfolio of Fatima Villena, full-stack developer and graphic designer based in Miami, FL.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="mx-auto flex max-w-[1560px]">
          <Nav />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
