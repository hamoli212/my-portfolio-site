import { CheckCircle } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-engineering">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-primary"></div>
            <div className="ml-16 pb-12">
              <div className="absolute left-6 w-4 h-4 bg-portfolio-primary rounded-full"></div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-portfolio-engineering">Intern</h3>
                  <span className="text-portfolio-primary font-semibold">Jun 2024 – Jul 2024</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-600 mb-4">
                  Islamabad Electric Supply Company (IESCO), Islamabad, Pakistan
                </h4>
                <p className="text-slate-600 mb-6">
                  Comprehensive internship at 132KV Grid Station focusing on real-time electrical operations, 
                  monitoring, and control systems under professional supervision. Gained hands-on experience 
                  with high-voltage equipment and safety protocols.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-portfolio-accent" />
                    <span className="text-sm">Grid Station Operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-portfolio-accent" />
                    <span className="text-sm">Control Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-portfolio-accent" />
                    <span className="text-sm">Safety Protocols</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-portfolio-accent" />
                    <span className="text-sm">Real-time Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
