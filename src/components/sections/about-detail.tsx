// React component for about detail page

import { motion } from "framer-motion";
import { Award, Brain, Building2, Cloud, Code, GraduationCap, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { hobbies } from "@/data/hobbies";
import { skillCategories } from "@/data/skills";
import { professionalSummary } from "@/data/professionalSummary";
import type { 
  SkillCategory, 
  Experience, 
  Certification, 
  Hobby, 
  Education 
} from "@/types";

export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        {/* Profile Section - First thing recruiters see */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <img
                src="/headshot/headshot-2024.jpg"
                alt="MO FERHI"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">MO FERHI</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Data Scientist & AI Specialist
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" /> Data Science
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Python & SQL
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Building2 className="w-3 h-3 mr-2" /> Business Intelligence
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Cloud className="w-3 h-3 mr-2" /> AWS & Azure
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Sparkles className="w-3 h-3 mr-2" /> Machine Learning
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary - Quick overview of value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {professionalSummary.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category: SkillCategory) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string) => (
                    <Badge key={skill} variant="outline" className={`${category.color}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Work Experience - Most important for recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp: Experience) => (
              <Card
                key={`${exp.title}-${exp.startDate}`}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                      {exp.isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement: { text: string }) => (
                    <li key={`${exp.title}-${achievement.text}`} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill: { name: string }) => (
                      <Badge
                        key={`${exp.title}-${skill.name}`}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}

          </div>
        </motion.div>

        {/* Certifications - Shows current skills and continuous learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" />
            Certifications & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert: Certification) => (
              <motion.div key={cert.name} whileHover={{ scale: 1.02 }} className="relative">
                <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col gap-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4"
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-15 h-15 rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                        <p className="text-sm text-muted-foreground">Issued: {cert.issuedDate}</p>
                      </div>
                    </a>

                    {cert.earlyAdopterBadge && (
                      <>
                        <div className="border-t border-primary/10 my-2" />
                        <a
                          href={cert.earlyAdopterBadge.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <img
                            src={cert.earlyAdopterBadge.image}
                            alt={cert.earlyAdopterBadge.name}
                            className="w-10 h-10 rounded-lg"
                          />
                          <div>
                            <Badge variant="outline" className="bg-primary/5 mb-1">
                              Early Adopter
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                              {cert.earlyAdopterBadge.name}
                            </p>
                          </div>
                        </a>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education - Supporting qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{education.degree}</h3>
                    <p className="text-muted-foreground">{education.school}</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">
                      {education.startDate} - {education.endDate}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  {education.honors.map((honor: { name: string, date?: string }, index: number) => (
                    <Badge
                      key={honor.name}
                      variant="outline"
                      className={`bg-primary/5 mb-2 ${index > 0 ? "ml-2" : ""}`}
                    >
                      {honor.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Hobbies & Interests - Personal side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <title>Creative pursuits icon</title>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby: Hobby) => (
                <div key={hobby.name} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">{hobby.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
