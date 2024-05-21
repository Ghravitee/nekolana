import { Londrina_Shadow } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const londrina = Londrina_Shadow({ subsets: ["latin"], weight: "400", variable: "--font-londrina" }, );
// const protest = Protest_Revolution({ subsets: ["latin"], weight: "400", variable: "--font-protest" });
const localInter = localFont({ src: '../public/fonts/PoetsenOne-Regular.ttf' });



export const metadata = {
  title: "$Neko",
  description: "The anime cat on solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${localInter.className} ${londrina.variable} bg-page-background bg-cover bg-repeat overflow-y-scroll overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
