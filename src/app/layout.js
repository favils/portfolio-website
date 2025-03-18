import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
