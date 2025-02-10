import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mainFont = Outfit({
  subset: "latin",
  display: "swap",
});

export const metadata = {
  title: "Propera",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          progressStyle={{
            background: `linear-gradient(to right, var(--mainBlack) 0%, var(--mainBlack) 100%)`,
            height: '2px'
          }}
          toastStyle={{
            overflow: 'visible'
          }}
        />
      </body>
    </html>
  );
}
