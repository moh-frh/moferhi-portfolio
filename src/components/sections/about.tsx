import { ArrowRight, GraduationCap, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { skillCategories } from "../../data/skills"

export function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-2 text-primary" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Blending engineering, analysis  & <span className="text-primary">Smart solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          to deliver impactful, production-ready solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Skills */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category) => (
                  <Card key={category.name} className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <category.Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold">{category.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="lg:col-span-2">
            <Card className="p-6 sticky top-24">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src="/headshot/headshot-2024.jpg"
                      alt="MO FERHI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">MO FERHI</h3>
                  <p className="text-muted-foreground">Senior Data Scientist</p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>6+ Years Experience</span>
                  </div>
                  <p className="text-muted-foreground">
                    Results-driven professional with expertise in data manipulation, business intelligence, 
                    and advanced analytics. Proven track record of delivering actionable insights and 
                    driving data-driven decision-making.
                  </p>
                </div>

                <Link
                  to="/about"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Learn More About Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}