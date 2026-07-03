import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import ConoceCati from "@/components/ConoceCati";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <main>
        <Hero />
        <ConoceCati />
      </main>
      <Footer />
    </>
  );
}
