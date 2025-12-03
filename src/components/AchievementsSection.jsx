import { Trophy, Award, Star, Zap, MapPin } from "lucide-react";
import { useState } from "react";

export const AchievementsSection = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      title: "techYuva 10.0 - Innovative Model Presentation Competition",
      position: "1st Place Winner",
      icon: Trophy,
      year: "2025",
      institution: "Buddha Institute of Technology",
      description:
        "Won first place in innovative model presentation showcasing cutting-edge technology solutions",
      color: "from-red-500/20 via-rose-500/20 to-pink-500/20",
      iconColor: "text-red-500",
      borderColor: "border-red-500/50",
      badgeColor: "bg-red-500/20 text-red-500 border-red-500/30",
    },
    {
      id: 2,
      title: "techYuva 9.0 - Innovative Model Presentation Competition",
      position: "2nd Place Runner Up",
      icon: Award,
      year: "2024",
      institution: "Buddha Institute of Technology",
      description:
        "Secured second place for innovative technology demonstration and presentation skills",
      color: "from-gray-400/20 via-slate-400/20 to-zinc-400/20",
      iconColor: "text-gray-400",
      borderColor: "border-gray-400/50",
      badgeColor: "bg-gray-400/20 text-gray-300 border-gray-400/30",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-rose-500/10 text-red-500 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
            <Star className="w-4 h-4" />
            Recognition & Awards
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-red-500 to-rose-500 text-transparent bg-clip-text">
              Recognition
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and accomplishments in technology and
            innovation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isHovered = hoveredAchievement === achievement.id;

            return (
              <div
                key={achievement.id}
                className="relative group"
                onMouseEnter={() => setHoveredAchievement(achievement.id)}
                onMouseLeave={() => setHoveredAchievement(null)}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${
                    index * 0.2
                  }s backwards`,
                }}
              >
                {/* Card */}
                <div
                  className={`relative bg-card/50 backdrop-blur-md rounded-2xl p-8 border-2 transition-all duration-500 h-full ${
                    isHovered
                      ? `${achievement.borderColor} shadow-2xl shadow-red-500/20 scale-105`
                      : "border-border hover:border-red-500/30"
                  }`}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      achievement.color
                    } rounded-2xl opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : ""
                    }`}
                  />

                  {/* Sparkle effect */}
                  {isHovered && (
                    <>
                      <Zap className="absolute top-4 right-4 w-6 h-6 text-red-500 animate-pulse" />
                      <Star
                        className="absolute top-8 right-12 w-4 h-4 text-rose-500 animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </>
                  )}

                  <div className="relative z-10">
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br transition-all duration-500 ${
                          isHovered
                            ? `${achievement.color} scale-110 rotate-6`
                            : "bg-card"
                        }`}
                      >
                        <Icon
                          className={`w-10 h-10 ${
                            achievement.iconColor
                          } transition-transform duration-500 ${
                            isHovered ? "scale-110" : ""
                          }`}
                        />
                      </div>

                      <div
                        className={`px-4 py-2 rounded-full text-xs font-bold border-2 transition-all duration-300 ${achievement.badgeColor}`}
                      >
                        {achievement.year}
                      </div>
                    </div>

                    {/* Position Badge */}
                    <div
                      className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 transition-all duration-300 ${
                        isHovered
                          ? `${achievement.badgeColor} scale-105`
                          : "bg-primary/10 text-primary border border-primary/30"
                      }`}
                    >
                      {achievement.position}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-4 leading-tight transition-colors duration-300 ${
                        isHovered ? "text-red-500" : ""
                      }`}
                    >
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Institution */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{achievement.institution}</span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${
                      achievement.color
                    } rounded-tl-full opacity-20 transition-opacity duration-300 ${
                      isHovered ? "opacity-40" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <Trophy className="w-10 h-10 mx-auto mb-3 text-red-500" />
            <div className="text-3xl font-bold text-red-500 mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <Star className="w-10 h-10 mx-auto mb-3 text-rose-500" />
            <div className="text-3xl font-bold text-rose-500 mb-2">1st</div>
            <div className="text-sm text-muted-foreground">Place Winner</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <Zap className="w-10 h-10 mx-auto mb-3 text-pink-500" />
            <div className="text-3xl font-bold text-pink-500 mb-2">2</div>
            <div className="text-sm text-muted-foreground">Years Competing</div>
          </div>
        </div>
      </div>

      <style>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
    </section>
  );
};
