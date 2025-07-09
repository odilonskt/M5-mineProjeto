import { Metadata } from "next";
import './globals.css'
import JogadoresPage from "./jogadores/page";
import TimesPage from "./times/page";
import SobreFutebol from "@/components/cardSobreFut/page";

export const metadata: Metadata = {
  title: "Home"
}

export default function Home() {
  return (
  <>
  <main className="bg-gradient-to-br from-blue-50 to-blue-100 scroll-smooth md:scroll-auto ">
    
<SobreFutebol></SobreFutebol>
  <JogadoresPage></JogadoresPage>

  <TimesPage></TimesPage>
  </main>
  </>
  );
}
