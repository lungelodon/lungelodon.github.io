import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Lungelo Sigudla</h3>
            <p className="text-primary-foreground/80 text-sm">
              Data Analyst & Scientist passionate about transforming complex data 
              into actionable insights that drive meaningful business decisions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/lungelodon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/lungelodon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:lungelosigudla@gmail.com"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Skills", id: "skills" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Skills & Technologies */}
          <div className="space-y-4">
            <h4 className="font-semibold">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "Power BI", "Tableau", "Machine Learning", "Excel"].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-primary-foreground/80">
              <p className="mb-2">Interests:</p>
              <p>
                Computer Science, Engineering, Entrepreneurship, Finance, and SDGs, 
                with an interest in organizational efficiency, business processes, 
                and data-driven decision-making in operations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Lungelo Sigudla. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2 sm:mt-0">
            Powered by data-driven insights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;