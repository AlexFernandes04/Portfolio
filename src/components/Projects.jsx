import { Github, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/Carousel";
import { useParallax } from "@/hooks/useParallax";

// Add more entries here any time - the grid and each card scale automatically.
const projects = [
  {
    title: "Waypoint",
    period: "2025 — ongoing",
    description:
      "A self-hosted job queue with visual replay: every failed job can be stepped through like a debugger, frame by frame, instead of re-run blind. Started because I was tired of guessing why a webhook silently dropped at 2am.",
    highlights: [
      "Deterministic replay engine that snapshots job state at each retry",
      "Dashboard for tracing a job across three services in one timeline",
      "Handles ~40k jobs/day on a single small instance",
    ],
    skills: ["Go", "Postgres", "Redis", "React", "Docker"],
    github: "https://github.com/example/waypoint",
    demo: "https://waypoint.example.dev",
    images: [
      { src: "https://picsum.photos/id/180/900/560", caption: "Job replay timeline, stepping through a failed retry frame by frame." },
      { src: "https://picsum.photos/id/60/900/560", caption: "Live queue dashboard tracing a job across three services." },
      { src: "https://picsum.photos/id/119/900/560", caption: "Alerting view — surfaces the first failing step, not just the final error." },
    ],
  },
  {
    title: "Fieldnote",
    period: "2024",
    description:
      "A trail-mapping app for hikers who want more than a red line on a satellite photo — elevation-aware notes, offline-first sync, and a generative contour-line renderer for routes with no official map.",
    highlights: [
      "Offline-first with conflict-free sync (CRDTs) for shared trail logs",
      "Custom contour renderer built from raw elevation data",
      "Used by three local hiking groups to track unmarked trails",
    ],
    skills: ["React Native", "SQLite", "Rust (WASM)", "Mapbox GL"],
    github: "https://github.com/example/fieldnote",
    demo: "https://fieldnote.example.dev",
    images: [
      { src: "https://picsum.photos/id/28/900/560", caption: "Generative contour rendering for a trail with no official map." },
      { src: "https://picsum.photos/id/1043/900/560", caption: "Offline trail log, synced once back in range." },
    ],
  },
  {
    title: "Patchwork Synth",
    period: "2023",
    description:
      "A browser-based modular synthesizer for restoring and archiving patch recipes from vintage hardware I've repaired. Built to answer one question: what did this patch actually sound like before the unit broke?",
    highlights: [
      "Node-based patch editor compiled to the Web Audio API graph",
      "Shareable patch links that reconstruct the full signal chain",
      "Archived 30+ patches from three restored synthesizers",
    ],
    skills: ["TypeScript", "Web Audio API", "Svelte", "IndexedDB"],
    github: "https://github.com/example/patchwork-synth",
    demo: null,
    images: [
      { src: "https://picsum.photos/id/96/900/560", caption: "Node-based patch editor, compiled straight to a Web Audio graph." },
      { src: "https://picsum.photos/id/48/900/560", caption: "An archived patch recipe from a restored Juno-60." },
      { src: "https://picsum.photos/id/1025/900/560", caption: "Shareable link view - reconstructs the full signal chain." },
    ],
  },
];

// Alternating parallax speed per card: even cards drift slightly slower
// than scroll, odd cards slightly faster, so the grid has real depth as you
// scroll instead of moving as one flat block.
function ProjectCard({ project, index }) {
  const speed = index % 2 === 0 ? 0.88 : 1.12;
  const ref = useParallax(speed);

  return (
    <Card ref={ref} className="flex flex-col justify-between hover:border-brass/60 transition-colors">
      <div>
        <div className="p-6 pb-0">
          <Carousel items={project.images} />
        </div>
        <CardHeader className="flex flex-row items-baseline justify-between gap-4">
          <CardTitle>{project.title}</CardTitle>
          <span className="text-xs text-slate-muted whitespace-nowrap">
            {project.period}
          </span>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-slate-muted leading-relaxed text-sm">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="text-sm text-paper/90 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-teal-bright"
              >
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </CardContent>
      </div>

      <CardFooter className="gap-3">
        <Button variant="outline" size="sm" onClick={() => window.open(project.github, "_blank")}>
          <span className="flex items-center gap-2">
            <Github className="h-4 w-4" /> Code
          </span>
        </Button>
        {project.demo && (
          <Button variant="ghost" size="sm" onClick={() => window.open(project.demo, "_blank")}>
            <span className="flex items-center gap-2">
              Live demo <ArrowUpRight className="h-4 w-4" />
            </span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function Projects() {
  const headerRef = useParallax(0.9);

  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="max-w-content mx-auto">
        <div ref={headerRef} className="mb-10 max-w-xl">
          <p className="text-sm tracking-wide text-brass-bright mb-4">
            Personal projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Things I built because I wanted them to exist.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
