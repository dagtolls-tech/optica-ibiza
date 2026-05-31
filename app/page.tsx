import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Promise from "@/components/Promise";
import Services from "@/components/Services";
import Location from "@/components/Location";
import LogoMarquee from "@/components/LogoMarquee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <Promise />
        <Services />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
