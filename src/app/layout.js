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
        {children}
      </body>
    </html>
  );
}
