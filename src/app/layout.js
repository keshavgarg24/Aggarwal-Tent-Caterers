import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css"; // Ensure global styles are imported
import Chatbot from "@/components/ui/Chatbot";
import WhatsAppChat from "@/components/ui/WhatsAppChat";
import CallButton from "@/components/ui/CallButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aggarwal Tent & Caterers",
  description: "Tent and catering services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CallButton />
        <WhatsAppChat />
        <Chatbot />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}