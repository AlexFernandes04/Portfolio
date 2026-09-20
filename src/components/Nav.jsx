const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "teams", label: "Teams" },
  { id: "experience", label: "Experience" },
  // { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile top bar */}
      <nav className="md:hidden sticky top-0 z-40 flex gap-5 overflow-x-auto bg-ink/95 backdrop-blur border-b border-ink-line px-5 py-4 text-sm">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="whitespace-nowrap text-slate-muted hover:text-brass-bright transition-colors"
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Desktop side rail */}
      <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-3 text-left"
          >
            <span className="h-px w-6 bg-ink-line group-hover:w-10 group-hover:bg-brass-bright transition-all" />
            <span className="text-xs tracking-wide text-slate-muted group-hover:text-brass-bright transition-colors">
              {s.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
