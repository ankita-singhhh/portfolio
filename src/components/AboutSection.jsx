import { Code, Palette, Sparkles, Download, Mail } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skills = [
    {
      id: 1,
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Architecting scalable applications with MERN stack, Next.js 15, and modern backend frameworks like FastAPI, with expertise in serverless deployments.",
      color: "from-primary/20 to-secondary/20",
    },
    {
      id: 2,
      icon: Palette,
      title: "AI Integration & Innovation",
      description:
        "Building intelligent features with Google Gemini, OpenAI APIs, and custom AI models—from music generation to multilingual voice assistants supporting 27+ languages.",
      color: "from-secondary/20 to-accent/20",
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Real-Time Systems",
      description:
        "Implementing WebSocket connections, Stream APIs, and real-time communication platforms with video calls, messaging, and live notifications.",
      color: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About{" "}
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Crafting Digital Experiences
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I'm a full-stack developer and AI enthusiast passionate about
              building innovative solutions that merge cutting-edge technology
              with real-world impact. From AI-powered music generation platforms
              to real-time communication systems, I transform complex ideas into
              seamless digital experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Specializing in the MERN stack, Next.js, and AI integration, I've
              developed production-ready applications featuring serverless
              architectures, LLM-powered features, and intelligent user
              experiences. Whether it's implementing payment systems, building
              multilingual voice assistants, or creating mental wellness
              companions, I bring technical depth and creative problem-solving
              to every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download="Ankita_Singh_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-3xl -z-10" />

            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isHovered = hoveredCard === skill.id;

              return (
                <div
                  key={skill.id}
                  className={`p-6 cursor-pointer transition-all duration-500 transform rounded-xl shadow-lg hover:shadow-2xl border-2 ${
                    isHovered
                      ? "scale-105 -translate-y-2 border-primary shadow-primary/50"
                      : "scale-100 border-border"
                  }`}
                  style={{
                    backgroundColor: "transparent",
                    backdropFilter: "blur(10px)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onMouseEnter={() => setHoveredCard(skill.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      skill.color
                    } rounded-xl opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : ""
                    }`}
                  />

                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={`p-3 rounded-xl flex-shrink-0 transition-all duration-500 ${
                        isHovered
                          ? "bg-primary/30 rotate-12 scale-110"
                          : "bg-primary/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 text-primary transition-all duration-500 ${
                          isHovered ? "scale-110" : ""
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                          isHovered ? "text-primary" : ""
                        }`}
                      >
                        {skill.title}
                      </h4>
                      <p
                        className={`text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
