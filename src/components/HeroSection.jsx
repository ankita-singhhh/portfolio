import { ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Greeting Badge */}
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-in_forwards] mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-semibold text-sm border border-primary/30">
              <Sparkles className="w-4 h-4" />
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="inline-block animate-[fadeIn_0.8s_ease-in_forwards] opacity-0 hover:scale-110 transition-transform duration-300">
              Hey, I'm
            </span>{" "}
            <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text animate-[fadeIn_0.8s_ease-in_0.3s_forwards] opacity-0 hover:scale-110 transition-transform duration-300 cursor-default">
              Ankita
            </span>{" "}
            <span className="inline-block animate-[fadeIn_0.8s_ease-in_0.6s_forwards] opacity-0 hover:scale-110 transition-transform duration-300">
              Singh
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-in_0.9s_forwards] leading-relaxed">
            Designing. Developing.{" "}
            <span className="text-primary font-semibold">
              Delivering experiences
            </span>{" "}
            that feel seamless, modern, and meaningful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeIn_0.8s_ease-in_1.2s_forwards] mt-8">
            <a
              href="#projects"
              className="cosmic-button group inline-flex items-center gap-2 shadow-lg shadow-primary/50"
            >
              <span className="inline-block group-hover:scale-110 transition-transform duration-300">
                View My Work
              </span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold shadow-lg hover:shadow-primary/50 hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16 opacity-0 animate-[fadeIn_0.8s_ease-in_1.5s_forwards]">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                5+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Projects
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-secondary">
                32+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Skills
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-accent">
                2+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Awards
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                3+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Years
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer group"
      >
        <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors duration-300 font-medium">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary group-hover:translate-y-1 transition-transform duration-300" />
      </a>

      <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
    </section>
  );
};
