import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/Carousel";


import Plane from "../assets/Plane.jpg"
import Frontend from "../assets/Ground Station Frontend.png"
import PCB from "../assets/Ground Station PCB.png"

import CubeSat from "../assets/CubeSat1.png"
import D2S2 from "../assets/D2S2 software.png"

// Add more entries here any time - built for 2 now, scales the same way
// personal projects does.
const teams = [
  {
    name: "Western Sklark Team",
    period: "Jan 2025 — Present",
    role: "Attitude Determination and Control System (ADCS) Team Member",
    description:
      "The Western Skylark CubeSat team is building a 3U CubeSat that will enhance wildlife tracking by collecting space-based data on migratory songbirds, waterbirds, and shorebirds. The ADCS subsystem is responsible for managing the spacecraft's orientation during the missing, including detumbling after deployment and maintaining accurate Nadir-pointing throughout the operational phase.",
    focus: ["Matlab", "D2S2 Simulator", "SIL & HIL Testing"],
    link: "https://space.uwo.ca/research/Missions%20and%20Instruments/Skylark.html",
    images: [
      { src: CubeSat, caption: "Simulation model of CubeSat" },
      { src: D2S2, caption: "CubeSat simulation environment" },
    ],
  },
  {
    name: "Western Aero Design Team",
    period: "Sept 2022 – May 2025",
    role: "Ground Station Lead",
    description:
      "The Western Aero Design Team is a completely student-run mega project in the department of Engineering at Western University. Our team designs, fabricates, and flies remote-controlled, heavy-lift aircraft for the SAE Aero Design East competition. As Ground Station Lead, I'm responsible for designing the system that communicates with the plane to send commands and receive and display telemetry.",
    focus: ["React.js", "Express", "MongoDB", "Docker", "Kafka"],
    link: "https://westernaerodesign.com/",
    images: [
      { src: Plane, caption: "Plane" },
      { src: Frontend, caption: "Ground Station Frontend" },
      { src: PCB, caption: "Ground Station PCB" },
    ],
  },
];

function TeamCard({ team, index }) {
  return (
    <Card className="flex flex-col justify-between hover:border-teal-bright/60 transition-colors">
      <div>
        <div className="p-6 pb-0">
          <Carousel items={team.images} />
        </div>
        <CardHeader className="flex flex-row items-baseline justify-between gap-4">
          <CardTitle>{team.name}</CardTitle>
          <span className="text-xs text-slate-muted whitespace-nowrap">
            {team.period}
          </span>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-xs text-teal-bright mb-3">
            {team.role}
          </p>
          <p className="text-slate-muted leading-relaxed text-sm">
            {team.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {team.focus.map((f) => (
              <Badge key={f}>{f}</Badge>
            ))}
          </div>
        </CardContent>
      </div>

      {team.link && (
        <div className="p-6 pt-0">
          <Button variant="ghost" size="sm" onClick={() => window.open(team.link, "_blank")}>
            <span className="flex items-center gap-2">
              Team page <ArrowUpRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      )}
    </Card>
  );
}

export default function Teams() {
  return (
    <section id="teams" className="relative md:py-20">
      <div className="max-w-content mx-auto">
        <h1 class="md:text-7xl text-3xl font-extrabold py-4 leading-20 title pb-4 md:mb-12 text-center" data-scroll data-scroll-speed="1">
          Engineering Teams
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teams.map((team, i) => (
            <TeamCard key={team.name} team={team} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
