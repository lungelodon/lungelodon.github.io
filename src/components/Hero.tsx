import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, BarChart3, TrendingUp, Database } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import profilePhoto from "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
import dataAnalyticsBg from "@/assets/data-analytics-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aiInfluencers = [
    {
      name: "Andrew Ng",
      role: "Founder of Coursera, Ex-Baidu AI Chief, Stanford Professor",
      quote: "AI is the new electricity. Just as electricity transformed industries, AI will now do the same.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alex Karp",
      role: "CEO of Palantir Technologies",
      quote: "The future belongs to those who can harness data to make better decisions faster.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jeff Dean",
      role: "Senior Fellow at Google, Head of Google AI",
      quote: "Machine learning is not just about algorithms, it's about changing how we think about problems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sam Altman",
      role: "CEO of OpenAI",
      quote: "The development of AI will be the most important technological development in human history.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aravind Srinivas",
      role: "CEO of Perplexity AI",
      quote: "The future of search is conversational, powered by AI that truly understands context.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Geoffrey Hinton",
      role: "Godfather of Deep Learning, Turing Award Winner",
      quote: "I think it's very important that we develop AI in a way that's beneficial for humanity.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Yoshua Bengio",
      role: "Professor at University of Montreal, Turing Award Winner",
      quote: "We need to make sure AI systems are aligned with human values and beneficial for society.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Yann LeCun",
      role: "Chief AI Scientist at Meta, Turing Award Winner",
      quote: "Intelligence is the ability to predict. Everything else is just a consequence of that.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Demis Hassabis",
      role: "CEO of Google DeepMind",
      quote: "AI has the potential to solve some of humanity's most pressing challenges.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fei-Fei Li",
      role: "Professor at Stanford, Co-Founder of AI4ALL",
      quote: "AI is not just about making machines smarter, it's about making humans more capable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b03c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Hilary Mason",
      role: "Founder of Hidden Door, Former Chief Scientist at Bitly",
      quote: "Data science is about turning data into products and insights that create value.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "DJ Patil",
      role: "Former US Chief Data Scientist",
      quote: "Data science is about extracting knowledge and insights from data to solve real problems.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Cathy O'Neil",
      role: "Author of 'Weapons of Math Destruction', Data Scientist",
      quote: "Algorithms are opinions embedded in code, and we must ensure they serve humanity fairly.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

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

          {/* AI Influencers Carousel */}
          <div className="pt-16 max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {aiInfluencers.map((person, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center border-2 border-primary/20">
                          <span className="text-2xl font-bold text-primary-foreground">
                            {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-foreground">{person.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{person.role}</p>
                        </div>
                        <blockquote className="text-sm italic text-muted-foreground leading-relaxed">
                          "{person.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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