import { useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      id: 0,
      role: "Software Development Intern",
      company: "String AI India",
      type: "Internship",
      location: "Remote",
      duration: "Jan 2026 - Present",
      status: "Current",
      description: "Selected for a paid internship position focusing on full-stack development and system architecture.",
      responsibilities: [
        "Developing and maintaining web applications using modern frameworks",
        "Contributing to system architecture and technical design decisions",
        "Collaborating with cross-functional teams on product features",
        "Participating in code reviews and ensuring code quality standards"
      ],
      technologies: ["React.js", "Node.js", "REST APIs", "System Design"]
    }
  ];

  const activeData = experiences[activeExp];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and industry exposure
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-border">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold">{activeData.role}</h3>
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                      {activeData.status}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-primary mb-3">
                    {activeData.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{activeData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activeData.location}</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      {activeData.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {activeData.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Key Responsibilities
              </h4>
              <div className="space-y-2">
                {activeData.responsibilities.map((resp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{resp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-base font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {activeData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-sm font-medium border border-primary/10 hover:bg-primary/10 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
            <div className="text-2xl font-bold text-primary mb-1">2026</div>
            <div className="text-xs text-muted-foreground">Started</div>
          </div>
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
            <div className="text-2xl font-bold text-primary mb-1">Remote</div>
            <div className="text-xs text-muted-foreground">Work Mode</div>
          </div>
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
            <div className="text-2xl font-bold text-primary mb-1">Full-Stack</div>
            <div className="text-xs text-muted-foreground">Development</div>
          </div>
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
            <div className="text-2xl font-bold text-primary mb-1">PPO</div>
            <div className="text-xs text-muted-foreground">Opportunity</div>
          </div>
        </div>
      </div>
    </section>
  );
}