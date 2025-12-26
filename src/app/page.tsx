import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <h1>Welcome to Next.js!</h1>
        dummy for testing contribute . 
        Guru added to the team thunderbolt
        
        {/* Navbar */}
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

