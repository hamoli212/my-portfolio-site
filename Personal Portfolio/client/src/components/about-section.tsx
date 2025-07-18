import { Cake, MapPin, Languages } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-engineering">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                I am an Electrical Engineering graduate from the University of Engineering and Technology, Taxila, 
                with specialization in Power Systems. My academic journey has been complemented by hands-on experience 
                in real-world electrical operations.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                During my internship at IESCO's 132KV Grid Station, I gained practical experience in monitoring 
                and control systems, which deepened my understanding of power system operations and safety protocols.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-portfolio-primary">3.2/4</div>
                  <div className="text-sm text-slate-600">CGPA</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-portfolio-primary">12+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-primary rounded-full flex items-center justify-center">
                  <Cake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Date of Birth</div>
                  <div className="text-slate-600">06 September 2000</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-secondary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-slate-600">Bagh, Azad Kashmir, Pakistan</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Languages</div>
                  <div className="text-slate-600">English (Professional), Urdu (Native)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
