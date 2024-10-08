import { Providers } from "./providers";
// import {  Lato } from "next/font/google";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';

// const lato = Lato({ 
//   subsets: ["latin"], 
//   weights: ["100", "300", "400", "700", "900"],
// });

export const metadata = {
  title: "Emergency dispatch system",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      // className={lato.className}
      className="lg:overflow-hidden"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
