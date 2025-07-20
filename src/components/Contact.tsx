import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lungelosigudla@gmail.com",
      href: "mailto:lungelosigudla@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 83-426-7848",
      href: "tel:+27834267848"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "South Africa",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lungelodon",
      href: "https://linkedin.com/in/lungelodon"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/lungelodon",
      href: "https://github.com/lungelodon"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how I can help 
            drive your business forward with data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.filter(info => info.label !== "Location").map((info, index) => (
                  <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-xs text-muted-foreground uppercase tracking-wide">
                            {info.label}
                          </div>
                          {info.href ? (
                            <a 
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-sm text-foreground hover:text-primary transition-colors font-medium truncate block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-sm text-foreground font-medium truncate">{info.value}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="border-l-4 border-l-accent shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Available for Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for full-time and part-time opportunities 
                  in data analyst, data scientist, and business intelligence specialist roles.
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold">Specializing in:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Data Analytics", "Machine Learning", "Business Intelligence", "Data Engineering"].map((specialty) => (
                      <Badge key={specialty} variant="outline" className="border-primary/20">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                  />
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Prefer email? Reach out directly at{" "}
                  <a 
                    href="mailto:lungelosigudla@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    lungelosigudla@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;