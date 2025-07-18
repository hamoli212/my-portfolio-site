import { Award, Star, Percent } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-engineering">Education</h2>
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-portfolio-engineering">BSc in Electrical Engineering</h3>
                <span className="text-portfolio-primary font-semibold">Jan 2021 – Dec 2025</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-600 mb-2">
                University of Engineering and Technology, Taxila, Pakistan
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-portfolio-accent" />
                  <span>Specialization: Power Systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-portfolio-accent" />
                  <span>CGPA: 3.2 / 4</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-portfolio-engineering">Intermediate (FSc Pre-Engineering)</h3>
                <span className="text-portfolio-primary font-semibold">2021</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-600 mb-2">
                Spring Field School and College, Bagh AJK
              </h4>
              <div className="flex items-center space-x-2">
                <Percent className="h-5 w-5 text-portfolio-accent" />
                <span>Marks: 953 / 1100 (86.63%)</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-portfolio-engineering">Matriculation (Science)</h3>
                <span className="text-portfolio-primary font-semibold">2017</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-600 mb-2">
                Spring Field School and College, Bagh AJK
              </h4>
              <div className="flex items-center space-x-2">
                <Percent className="h-5 w-5 text-portfolio-accent" />
                <span>Marks: 1018 / 1100 (92.5%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
