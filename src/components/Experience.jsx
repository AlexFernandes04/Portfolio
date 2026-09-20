import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

// Minimal on purpose - title, company, time span. Add roles here as they
// happen; the connecting line and reveal animation scale automatically.
const roles = [
  { title: "Senior Technical Student", company: "Toronto Hydro", period: "May 2025 – August 2026" },
  { title: "Research Assistant", company: "Western University", period: "May 2024 – August 2024" },
];

function TimelineItem({ role, index }) {
  const [ref, visible] = useReveal(0.3);
  const alignRight = index % 2 === 1;

  return (
    <div ref={ref} className="relative flex items-center md:justify-center">
      <div
        className={cn(
          "md:w-1/2 pl-12 md:pl-0",
          alignRight ? "md:pl-14 md:ml-auto md:text-left" : "md:pr-14 md:text-right"
        )}
      >
        <div
          className={cn(
            "inline-block transition-all duration-700 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <h3 className="font-display text-2xl md:text-3xl leading-tight">
            {role.title}
          </h3>
          <p className="text-slate-muted text-base md:text-lg mt-1.5">
            {role.company}
          </p>
          <p className="text-sm text-brass-bright mt-1.5">{role.period}</p>
        </div>
      </div>

      <span
        className={cn(
          "absolute left-[4px] md:left-1/2 md:-translate-x-1/2 h-4 w-4 rounded-full border-4 border-ink bg-ink-line transition-all duration-500",
          visible && "bg-brass-bright scale-110"
        )}
      />
    </div>
  );
}

export default function Experience() {

  return (
    <section id="experience" className="relative py-16 md:py-20">
      <div className="max-w-content mx-auto">
        <h1 class="md:text-7xl text-3xl font-extrabold py-4 leading-20 title pb-4 md:mb-12 text-center" data-scroll data-scroll-speed="1">
          Work Experience
        </h1>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1 bottom-1 w-0.5 bg-ink-line" />
          <div className="space-y-16 md:space-y-20">
            {roles.map((role, i) => (
              <TimelineItem key={role.title + role.company} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
