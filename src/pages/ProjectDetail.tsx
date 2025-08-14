import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Download, Play, ArrowLeft, ExternalLink, FileText, BarChart, Target, Users, TrendingUp } from "lucide-react";
import { projects } from "@/lib/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
              <project.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <Badge variant="outline">{project.category}</Badge>
                {project.powerBi && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                    Power BI
                  </Badge>
                )}
                {project.tableau && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                    Tableau
                  </Badge>
                )}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                {project.hasLiveDashboard && (
                  <Button variant="outline" asChild>
                    <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-2" />
                      Live Dashboard
                    </a>
                  </Button>
                )}
                <Button variant="secondary" asChild>
                  <a href={project.downloadUrl}>
                    <Download className="h-4 w-4 mr-2" />
                    Download Project Files
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Project Goal
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.projectGoal || `This project demonstrates advanced ${project.category.toLowerCase()} capabilities through comprehensive data analysis and visualization. The primary objective is to deliver actionable insights that drive business decision-making and optimize operational performance.`}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-primary" />
                    Data Source & Acquisition
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.dataSource || `The analysis is based on realistic datasets sourced from industry-standard repositories. Data preprocessing involved comprehensive cleaning, transformation, and validation processes to ensure analytical accuracy and reliability.`}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Key Insights & Findings
                  </h3>
                  <ul className="space-y-3">
                    {project.insights?.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{insight}</span>
                      </li>
                    )) || [
                      "Identified key performance indicators and trends within the dataset",
                      "Developed actionable recommendations based on comprehensive data analysis",
                      "Created interactive visualizations to communicate findings effectively",
                      "Established data-driven insights to support strategic decision-making"
                    ].map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Preview */}
            {project.hasLiveDashboard && (
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Interactive Dashboard</h3>
                    <p className="text-muted-foreground mb-4">
                      Click below to view the live, interactive dashboard with real-time data connections.
                    </p>
                    <Button asChild>
                      <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open Live Dashboard
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tools & Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Source Files */}
            <Card>
              <CardHeader>
                <CardTitle>Source Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Project Report (.pdf)</p>
                        <p className="text-xs text-muted-foreground">Complete analysis with findings</p>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.downloadUrl}>
                          <Download className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {project.powerBi && (
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Power BI File (.pbix)</p>
                          <p className="text-xs text-muted-foreground">Source dashboard file</p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.downloadUrl}>
                            <Download className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}

                  {project.tableau && (
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Tableau File (.twbx)</p>
                          <p className="text-xs text-muted-foreground">Source workbook</p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.downloadUrl}>
                            <Download className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Data Source (IBM)</p>
                        <p className="text-xs text-muted-foreground">Raw dataset files</p>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.downloadUrl}>
                          <Download className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-4" asChild>
                  <a href={project.downloadUrl}>
                    <Download className="h-4 w-4 mr-2" />
                    Download All Files (.zip)
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* GitHub Repository */}
            <Card>
              <CardHeader>
                <CardTitle>GitHub Repository</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View the complete source code, documentation, and project structure on GitHub.
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;