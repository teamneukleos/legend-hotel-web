import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Video from "./components/video";
import Contact from "./components/contact";
import Features from "./components/feature";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar />
      <Hero />
      <Video />
      <Contact />
      <Features />
      <Footer />
      
    </main>
  );
}