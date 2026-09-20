import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

export default function Contact() {
  const headerRef = useParallax(0.9);

  return (
    <section id="contact" className="relative py-16 md:py-20 border-t border-ink-line">
      <div className="max-w-content mx-auto max-w-xl">
        <div ref={headerRef}>
          <p className="text-sm tracking-wide text-brass-bright mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
            Feel free to reach out!
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => (window.location.href = "mailto:alex@example.dev")}>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> alex.fernandes2604@gmail.com
            </span>
          </Button>
          <Button variant="outline" onClick={() => window.open("https://github.com/AlexFernandes04", "_blank")}>
            <span className="flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
            </span>
          </Button>
          <Button variant="outline" onClick={() => window.open("https://www.linkedin.com/in/alex-fernandes26/", "_blank")}>
            <span className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
