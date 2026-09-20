import { Badge } from "@/components/ui/badge";
import { useParallax } from "@/hooks/useParallax";

const groups = [
  {
    label: "Languages",
    items: ["TypeScript", "Go", "Python", "Rust", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Tailwind CSS", "Svelte", "React Native"],
  },
  {
    label: "Backend & data",
    items: ["Postgres", "Redis", "Kafka", "gRPC", "Docker"],
  },
  {
    label: "Practices",
    items: ["System design", "On-call & incident response", "Mentoring", "Technical writing"],
  },
];

export default function Skills() {
  const headerRef = useParallax(0.9);

  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="max-w-content mx-auto">
        <div ref={headerRef} className="mb-10 max-w-xl">
          <p className="text-sm tracking-wide text-brass-bright mb-4">
            Skills
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            The toolkit I reach for most.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-2xl">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm text-slate-muted mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} className="text-paper/90 border-ink-line">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
