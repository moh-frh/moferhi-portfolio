import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { projectsData } from "../../data/projects"

export function FeaturedProjects() {
  const featuredProjects = projectsData.filter(project => project.featured)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <Badge variant="outline" className="mb-4">
            <ArrowRight className="w-3 h-3 mr-2 text-primary" />
            Featured Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Showcasing <span className="text-primary">Innovation</span> & Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects that demonstrate my expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}