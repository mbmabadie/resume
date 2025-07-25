import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <Experience />
      <Skills />
      <Education />
      <Awards />
      <Recommendations />
      <Contact />
    </div>
  );
};

export default Index;
