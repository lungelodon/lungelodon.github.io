import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Download, BarChart3, TrendingUp, Database, Brain, Target, PieChart, Activity, FileText, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/lib/projectsData";

const Projects = () => {
  const navigate = useNavigate();

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Portfolio Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Data Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of data science and analytics projects showcasing my skills in dashboards,
            data storytelling, and automation. Each project is designed to demonstrate practical,
            real-world problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex gap-2">
                    {project.powerBi && (
                      <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 border-orange-200">
                        Power BI
                      </Badge>
                    )}
                    {project.tableau && (
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                        Tableau
                      </Badge>
                    )}
                    {!project.powerBi && !project.tableau && (
                      <Badge variant="outline" className="border-primary/20 text-xs">
                        {project.tools.join(', ')}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.shortDescription}
                </p>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                  <div className="flex gap-2">
                    <Button 
                      variant="portfolio" 
                      size="sm" 
                      asChild
                      className="flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.hasLiveDashboard && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="flex-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a 
                          href={project.dashboardUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Play className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      asChild
                      className="flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a 
                        href={project.downloadUrl} 
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Files
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex-1"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to present impactful data insights that drive business decisions.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a 
              href="https://github.com/lungelodon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;