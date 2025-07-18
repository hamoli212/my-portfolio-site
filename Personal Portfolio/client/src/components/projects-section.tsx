import { 
  Droplets, 
  Zap, 
  Home, 
  Satellite, 
  Flame, 
  BarChart3, 
  Heart, 
  Brain, 
  Shield,
  Activity,
  Settings,
  Lightbulb
} from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Wireless Water Level Indicator",
      description: "Automated water level monitoring system with wireless communication and automatic control features.",
      icon: Droplets,
      color: "bg-portfolio-primary",
      tags: ["IoT", "Sensors", "Automation"],
    },
    {
      title: "150VA 4-Tap Transformer",
      description: "Design and construction of a multi-tap transformer with 150VA capacity for various voltage outputs.",
      icon: Zap,
      color: "bg-portfolio-secondary",
      tags: ["Power", "Design", "Testing"],
    },
    {
      title: "Smart Home Automation",
      description: "PIC microcontroller-based home automation system with remote control capabilities.",
      icon: Home,
      color: "bg-portfolio-accent",
      tags: ["PIC", "Automation", "Control"],
    },
    {
      title: "Antenna Azimuth Control System",
      description: "Automated antenna positioning system with precise azimuth control for optimal signal reception.",
      icon: Satellite,
      color: "bg-yellow-500",
      tags: ["Control", "Motors", "Precision"],
    },
    {
      title: "Steam Boiler Control System",
      description: "Automated monitoring and control system for steam boiler operations with safety features.",
      icon: Flame,
      color: "bg-red-500",
      tags: ["Safety", "Monitoring", "Control"],
    },
    {
      title: "6-Bus Power System Analysis",
      description: "Comprehensive load flow and fault analysis of a 6-bus power system using simulation tools.",
      icon: BarChart3,
      color: "bg-green-500",
      tags: ["ETAP", "Analysis", "Power Systems"],
    },
    {
      title: "ECG Signal Processing",
      description: "Digital filter implementation for noise removal from ECG signals using MATLAB.",
      icon: Heart,
      color: "bg-purple-500",
      tags: ["MATLAB", "DSP", "Filters"],
    },
    {
      title: "Smart Energy Management",
      description: "Real-time NILM system for appliance identification and energy management.",
      icon: Brain,
      color: "bg-indigo-500",
      tags: ["AI", "Energy", "Smart Grid"],
    },
    {
      title: "Transformer Protection",
      description: "Overcurrent protection system design for transformer safety and reliability.",
      icon: Shield,
      color: "bg-orange-500",
      tags: ["Protection", "Safety", "Relays"],
    },
    {
      title: "Voice Analysis in MATLAB",
      description: "Sampling, modulation, and analysis of human voice signals using MATLAB.",
      icon: Activity,
      color: "bg-pink-500",
      tags: ["MATLAB", "Signal Processing", "Audio"],
    },
    {
      title: "Load Bank with Energy Analyzer",
      description: "Configurable load bank with integrated energy analyzer for testing applications.",
      icon: Settings,
      color: "bg-teal-500",
      tags: ["Testing", "Energy", "Measurement"],
    },
    {
      title: "Transmission Line Modeling",
      description: "200km transmission line modeling and analysis for power system studies.",
      icon: Lightbulb,
      color: "bg-blue-600",
      tags: ["Modeling", "Analysis", "Transmission"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-engineering">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className={`w-12 h-12 ${project.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`${project.color} text-white px-2 py-1 rounded text-xs`}>
                      {tag}
                    </span>
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
