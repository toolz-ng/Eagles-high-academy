import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AdmissionProvider } from "./context/AdmissionContext";
import AdmissionModal from "./components/admission/AdmissionModal";
import WhatsAppButton from "./components/WhatsAppButton";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-fraunces",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Eagles High School",
    description:
        "Eagles High Academy — nurturing curious minds and building confident futures.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${fraunces.variable} ${inter.variable}`}
        >
            <body className="flex min-h-screen flex-col bg-paper text-ink antialiased font-body">
                <AdmissionProvider>
                    <Navbar />

                    <main className="flex-grow">
                        {children}
                    </main>

                    <Footer />
                    <WhatsAppButton />

                    <AdmissionModal />
                </AdmissionProvider>
            </body>
        </html>
    );
}