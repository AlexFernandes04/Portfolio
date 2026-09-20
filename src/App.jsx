// App.jsx
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Nav from "@/components/Nav";
import Background from "@/components/Background";
import Content from "@/components/Content";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Teams from "@/components/Teams";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.1,
        smoothWheel: true,
      },
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div className="relative">
      <Background />
      <Nav />

      <main className="relative z-10 pl-6 pr-6 md:pl-28 md:pr-10 lg:pl-32 lg:pr-16">
        {/* <About /> */}
        <Content />
        <Teams />
        <Experience />
        {/* <Skills /> */}
        <Contact />
      </main>
    </div>
  );
}