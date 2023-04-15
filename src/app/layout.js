import Footer from "./components/Footer";
import Navabar from "./components/Navabar";
import "./styles/globals.css";

export const metadata = {
  title: "Zat App",
  description: "This is zat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1d1e3d] scroll-smooth">
        <Navabar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
