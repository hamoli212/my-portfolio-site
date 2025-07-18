import { Button } from "@/components/ui/button";
import { Download, Mail, Zap, Settings } from "lucide-react";
import profileImage from "@assets/profile_1752597043494.jpg";

export function HeroSection() {
  const handleDownloadCV = () => {
    window.open("/api/cv/download", "_blank");
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Electrical Engineer
              <span className="block text-3xl text-blue-200 mt-2">Power Systems Specialist</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Passionate about sustainable energy solutions and innovative engineering. 
              Experienced in grid station operations, circuit design, and energy systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactClick}
                className="bg-white text-portfolio-primary hover:bg-blue-50 px-8 py-3 text-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadCV}
                className="border-white text-white hover:bg-white hover:text-portfolio-primary px-8 py-3 text-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-white/20 overflow-hidden bg-white/10">
                <img 
                  src={profileImage} 
                  alt="Muhammad Hammad Khan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
