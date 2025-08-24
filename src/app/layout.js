import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Brooklyn Kabab",
  description: "Brooklyn Kabab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
