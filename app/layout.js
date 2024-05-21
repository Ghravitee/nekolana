import { Bungee_Shade, Protest_Revolution } from "next/font/google";
import "./globals.css";

const bungee = Bungee_Shade({ subsets: ["latin"], weight: "400" });
const protest = Protest_Revolution({ subsets: ["latin"], weight: "400", variable: "--font-protest" });



export const metadata = {
  title: "Nekolana",
  description: "The anime cat on solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bungee.className} ${protest.variable} bg-blue-400 bg-cover bg-repeat overflow-y-scroll overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
