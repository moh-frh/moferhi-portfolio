import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MO FERHI</h3>
            <p className="text-sm text-muted-foreground">
              Senior Data Analyst/Data Scientist & Software Engineer
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mohamedfrh213"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/moh-frh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MO FERHI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}