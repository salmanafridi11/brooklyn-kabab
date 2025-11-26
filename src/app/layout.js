import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Brooklyn Kabab",
  description:
    "Brooklyn Kabab With a menu featuring vegetarian and vegan options, it caters to diverse palates while maintaining a homely, community-driven vibe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* <Header /> */}
        {/* {children} */}
        <h1 className="text-center text-2xl">PAY YOUR EMPLOYEES AND STOP THREATENING THEM</h1>

        {/* <Footer />
         <ToastContainer /> */}
      </body>
    </html>
  );
}
