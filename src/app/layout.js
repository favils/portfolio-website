import "./globals.css";

export const metadata = {
  title: "Fatima Villena - Full Stack Developer",
  description: "Full Stack Portfolio",
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
