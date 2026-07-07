import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import ConoceCati from "@/components/ConoceCati";
import Galeria from "@/components/Galeria";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <main>
        <Hero />
        <ConoceCati />
        <Galeria />
      </main>
      <Footer />
    </>
  );
}
