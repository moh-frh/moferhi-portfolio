import { Mail, Phone, Linkedin, MapPin } from "lucide-react"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="/headshot/headshot-2024.jpg"
              alt="MO FERHI"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter">MO FERHI</h1>
            <p className="text-xl text-muted-foreground">
              Data Scientist & AI Specialist
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Results-driven Data Scientist with 6+ years of experience in data manipulation, 
              business intelligence, and advanced analytics. Let&apos;s connect and discuss 
              how we can work together.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">mohamed.ferhi97@gmail.com</p>
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:mohamed.ferhi97@gmail.com">
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Phone */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">(224) 566 2332</p>
                <Button asChild variant="outline" size="sm">
                  <a href="tel:+2245662332">
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* LinkedIn */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <p className="text-muted-foreground">mohamedfrh213</p>
                <Button asChild variant="outline" size="sm">
                  <a 
                    href="https://www.linkedin.com/in/mohamedfrh213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-muted-foreground">United States, Chicago</p>
                <p className="text-sm text-muted-foreground">
                  Open to relocation depending on the opportunity
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Work Together?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Need help with a project, 
            or want to discuss potential collaboration, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="mailto:mohamed.ferhi97@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a 
                href="https://www.linkedin.com/in/mohamedfrh213" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

