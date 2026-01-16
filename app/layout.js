import "./globals.css";

export const metadata = {
  title: "Dúi (aka Nguyen Van Dui) | Solana",
  description: "Dui is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
