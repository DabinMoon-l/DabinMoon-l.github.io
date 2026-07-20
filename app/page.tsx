import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/sections/Hero";
import Naruto from "@/components/sections/Naruto";
import Movies from "@/components/sections/Movies";
import People from "@/components/sections/People";
import Series from "@/components/sections/Series";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Naruto />
        <Movies />
        <People />
        <Series />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
