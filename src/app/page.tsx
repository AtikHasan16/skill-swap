import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Hero></Hero>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
