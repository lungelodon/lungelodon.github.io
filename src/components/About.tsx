import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Brain, Database, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Expert in statistical modeling, predictive analytics, and business intelligence solutions"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced experience with Python, SQL, and ML frameworks for data-driven insights"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Skilled in data pipeline development, ETL processes, and database management"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Power BI and Tableau expertise for creating compelling data visualizations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Passionate About <span className="bg-gradient-primary bg-clip-text text-transparent">Data Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a data analyst with extensive experience in different analytics environments. 
            I value insights gained through rigorous data-driven work and always ensure that 
            data informs meaningful decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I possess strong skills in computer science and mathematics, specializing in data analytics 
                across diverse sectors including e-commerce, financial services, and business intelligence. 
                My expertise spans multiple analytical domains where I consistently deliver 
                data-driven solutions that create meaningful business impact.
              </p>
              <p className="text-muted-foreground mb-6">
                From financial data analysis at Antennar (PTY) LTD to web analytics at Polygon (PTY) LTD, 
                I've honed my skills in turning complex datasets into actionable insights that drive 
                strategic decision-making.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Power BI", "Tableau", "Excel", "Machine Learning", "Statistical Modeling"].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;