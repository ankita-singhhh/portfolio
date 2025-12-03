import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useState } from "react";

export const EducationSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const education = [
    {
      id: 1,
      degree: "B.Tech - CSE (Data Science)",
      institution: "Buddha Institute of Technology",
      location: "Gorakhpur, Uttar Pradesh",
      period: "December 2023 - June 2027",
      score: "CGPA: 7.5 / 10",
      icon: GraduationCap,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
    },
    {
      id: 2,
      degree: "Intermediate (12th) - PCM",
      institution: "H.R. College, Mairwa, Siwan",
      location: "Siwan, Bihar",
      period: "April 2020 - April 2022",
      score: "Bihar Board: 72.8%",
      icon: Award,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4" />
            Academic Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>

        {/* Tree Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-16">
            {education.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isHovered = hoveredItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    animation: `slide-up 0.6s ease-out ${
                      index * 0.2
                    }s backwards`,
                  }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div
                      className={`w-12 h-12 rounded-full bg-card border-4 flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? `${item.borderColor} shadow-lg shadow-primary/50 scale-110`
                          : "border-primary/30"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isHovered ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 ${
                        isHovered
                          ? `${item.borderColor} shadow-xl shadow-primary/20 scale-105`
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          item.color
                        } rounded-2xl opacity-0 transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : ""
                        }`}
                      />

                      {/* Connecting Line */}
                      <div
                        className={`hidden md:block absolute top-1/2 ${
                          isLeft ? "left-full" : "right-full"
                        } w-12 h-0.5 bg-gradient-to-r ${
                          isLeft
                            ? "from-primary to-transparent"
                            : "from-transparent to-primary"
                        }`}
                      />

                      <div className="relative z-10">
                        {/* Degree */}
                        <h3
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            isHovered ? "text-primary" : ""
                          }`}
                        >
                          {item.degree}
                        </h3>

                        {/* Institution */}
                        <p className="text-lg font-semibold text-foreground mb-3">
                          {item.institution}
                        </p>

                        {/* Details */}
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Score Badge */}
                        <div className="mt-4 inline-block">
                          <div
                            className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                              isHovered
                                ? "bg-primary/20 text-primary border-2 border-primary/50"
                                : "bg-primary/10 text-primary border-2 border-primary/30"
                            }`}
                          >
                            {item.score}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/30">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">
              Continuous Learning Journey
            </span>
          </div>
        </div>
      </div>

      <style>{`
                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
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
