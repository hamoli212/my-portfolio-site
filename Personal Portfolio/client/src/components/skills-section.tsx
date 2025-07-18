import { Monitor, Code, Compass, Users } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Simulation & Analysis",
      icon: Monitor,
      color: "bg-portfolio-primary",
      skills: [
        { name: "MATLAB", level: 90 },
        { name: "ETAP", level: 85 },
        { name: "Simulink", level: 80 },
        { name: "MULTISIM", level: 75 },
        { name: "Proteus", level: 90 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      color: "bg-portfolio-secondary",
      skills: [
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "PIC Microcontroller", level: 75 },
        { name: "Embedded Systems", level: 70 },
        { name: "IoT", level: 65 },
      ],
    },
    {
      title: "Design & CAD",
      icon: Compass,
      color: "bg-portfolio-accent",
      skills: [
        { name: "AutoCAD Electrical", level: 85 },
        { name: "PCB Design", level: 80 },
        { name: "Circuit Design", level: 85 },
        { name: "Microcontroller Design", level: 75 },
      ],
    },
    {
      title: "Professional",
      icon: Users,
      color: "bg-yellow-500",
      skills: [
        { name: "Project Management", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Technical Reporting", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Time Management", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-engineering">Skills & Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${category.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
