import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, BarChart3, TrendingUp, Database } from "lucide-react";
import profilePhoto from "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
import dataAnalyticsBg from "@/assets/data-analytics-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background with data analytics visuals */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"
        style={{
          backgroundImage: `url(${dataAnalyticsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      {/* Floating data elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-20">
          <BarChart3 className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <TrendingUp className="h-12 w-12 text-primary animate-bounce" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20">
          <Database className="h-14 w-14 text-primary animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
            <img 
              src={profilePhoto} 
              alt="Lungelo Don Sigudla" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mx-auto px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground"
          >
            Data Analyst & Scientist
          </Badge>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight" style={{ lineHeight: '1.1' }}>
              <span className="block pb-2">Lungelo Don</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent pb-4">
                Sigudla
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming complex data into actionable insights that drive meaningful business decisions. 
              I specialize in advanced analytics, machine learning, and data visualization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-6 text-lg"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Data Tools Software Button */}
          <div className="pt-4">
            <Button 
              variant="portfolio" 
              size="lg"
              className="px-10 py-4 text-base font-semibold bg-gradient-to-r from-primary via-primary-glow to-accent text-primary-foreground hover:scale-105 transform transition-all duration-300 shadow-elegant hover:shadow-glow border-0"
            >
              <Database className="h-5 w-5 mr-2" />
              Access My Data Software Tools
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://linkedin.com/in/lungelodon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/lungelodon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:lungelosigudla@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <button 
              onClick={() => scrollToSection("about")}
              className="mx-auto p-2 rounded-full border border-border hover:bg-accent transition-colors"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;