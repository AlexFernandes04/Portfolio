import { GraduationCap } from "lucide-react";
export default function About() {
  // Each line of the hero moves at its own speed as you scroll past it, so
  // the parallax reads on the actual content instead of a background layer.
  // Speeds ramp down the page: the eyebrow barely moves, the tags drift the
  // most - it reads as the block gently pulling apart while you scroll.

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-content mx-auto w-full">
        <div>
          <h1 class="md:text-9xl text-6xl md:pb-4 pb-2 title lg:text-left drop-shadow-2xl one" data-scroll data-scroll-speed="1">
            Alex
          </h1>
          <h1 class="md:text-9xl text-6xl md:pb-8 pb-2 title lg:text-left drop-shadow-2xl one" data-scroll data-scroll-speed="2">
            Fernandes
          </h1>
        </div>
        <p className="text-sm tracking-wide text-brass-bright mb-5">
          Engineering Portfolio
        </p>
        <p className="mt-8 max-w-xl text-slate-muted leading-relaxed" data-scroll data-scroll-speed="1.5">
          I'm Alex Fernandes - a fourth year engineering student at Western University studying Electrical Engineering with a dual
          degree in Artificial Intelligence Systems Engineering. It's a unique degree that allows me to apply my skills to a diverse range of projects and explore
          my passions in energy, electronics, and software. 
        </p>

        <div className="max-w-xl flex gap-4 rounded-sm border border-ink-line bg-ink-soft/50 p-5">
          <GraduationCap className="h-5 w-5 text-brass-bright shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-paper/90">
              B.E.Sc. Electrical Engineering & AISE, Western University — GPA 4.00
            </p>
            <p className="mt-1 text-xs text-slate-muted leading-relaxed">
              Relevant coursework: Control Systems, Power Systems, Nuclear Energy, VLSI, Electric Machines, Machine Learning, Software Design, Networking and IOT Systems
            </p>
          </div>
        </div>
        {/* <div ref={tagsRef} className="mt-8 flex flex-wrap gap-3 text-sm text-slate-muted">
          <span className="border border-ink-line rounded-sm px-3 py-1.5">
            Distributed systems
          </span>
          <span className="border border-ink-line rounded-sm px-3 py-1.5">
            Generative art
          </span>
          <span className="border border-ink-line rounded-sm px-3 py-1.5">
            Trail cartography
          </span>
        </div> */}
      </div>
    </section>
  );
}
