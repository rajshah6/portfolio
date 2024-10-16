import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Layout/Cursor";
import Links from "@/components/Layout/Links";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/providers/Providers";
import { Quicksand } from "next/font/google";
import "../styles/GlobalStyles.scss";
import styles from "../styles/Layout/MainLayout.module.scss";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Portfolio Website" />
        <title>Raj Shah</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* You can also use a PNG format like this:
            <link rel="icon" href="/favicon.png" type="image/png" /> 
        */}
      </head>
      <body className={quicksand.className}>
        <main className={styles.layout}>
          <Providers>
            <Navbar />
            <Links />
            {children}
            <Cursor />
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}