// app/providers.tsx

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NavBar2 from "@/components/NavBar2";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <NavBar /> */}
      {/* <NavBar2 /> */}
      <NextUIProvider>
        {children}
      </NextUIProvider>
{/*       <Footer/> */}
    </>
  );
}
