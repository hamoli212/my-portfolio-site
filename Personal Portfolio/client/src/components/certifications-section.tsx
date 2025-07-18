import { CheckSquare, Leaf, Search, HardHat } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Foundations of Project Management",
      provider: "Coursera",
      date: "Feb 2025",
      description: "Project management fundamentals including life cycles, scope definition, scheduling, and risk assessment.",
      icon: CheckSquare,
      color: "bg-portfolio-primary",
    },
    {
      title: "The Sustainable Development Goals",
      provider: "Coursera",
      date: "Dec 2024",
      description: "Global sustainability frameworks and engineering applications focused on clean energy and infrastructure.",
      icon: Leaf,
      color: "bg-portfolio-accent",
    },
    {
      title: "Understanding Research Methods",
      provider: "Coursera",
      date: "Jan 2025",
      description: "Research principles, hypothesis formulation, and data analysis for evidence-based engineering decisions.",
      icon: Search,
      color: "bg-portfolio-secondary",
    },
    {
      title: "Safety in the Utility Industry",
      provider: "Coursera",
      date: "Jun 2025",
      description: "Safety protocols and hazard mitigation for utility environments with emphasis on high-voltage equipment.",
      icon: HardHat,
      color: "bg-yellow-500",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-engineering">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center mr-4`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <p className="text-slate-600">{cert.provider} • {cert.date}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
