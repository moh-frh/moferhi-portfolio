import { ProjectGrid } from "../components/projects/project-grid"
import { projectsData } from "@/data/projects"

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects spanning data science, AI/ML, and full-stack development. 
            Each project showcases different aspects of my technical expertise and problem-solving approach.
          </p>
        </div>

        {/* Projects */}
        <ProjectGrid projects={projectsData} />
      </div>
    </main>
  )
}

