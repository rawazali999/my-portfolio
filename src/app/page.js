import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="my-10 flex flex-col items-center justify-center gap-20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
