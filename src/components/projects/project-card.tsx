import { TechBadge } from "@/components/shared/tech-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn("bg-card rounded-lg shadow-lg overflow-hidden", className)}>
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          {project.featured && (
            <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">
              Featured Project
            </div>
          )}
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} size="sm" />
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          {project.links.github && (
            <Button variant="outline" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button asChild>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {project.links.demo && (
            <Button asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
