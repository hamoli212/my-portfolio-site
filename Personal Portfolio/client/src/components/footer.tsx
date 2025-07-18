import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-portfolio-engineering text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Muhammad Hammad Khan</p>
          <p className="text-slate-300 mb-4">Electrical Engineer | Power Systems Specialist</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mhkhan.engineer@gmail.com" 
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-600">
            <p className="text-slate-400 text-sm">© 2025 Muhammad Hammad Khan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
