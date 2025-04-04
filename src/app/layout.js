import "./globals.css";
import Navbar from "../components/Navbar"

export const metadata = {
  title: "Fatima Villena",
  description: "Developer Portfolio",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="absolute z-1 mt-[-1%] border-white border-1 inset-[5%] pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
