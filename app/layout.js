import {Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/Header"
import { ClerkProvider }  from '@clerk/nextjs'

const inter = Inter({subsets:["latin"]});
export const metadata = {
  title:"DriveIQ",
  description:"Find your dream car",
}
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
        <main className="min-h-screen">{children}</main>

      </body>
    </html>
    </ClerkProvider>
  );
}
