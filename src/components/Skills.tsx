import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 },
        { name: "C++", level: 75 },
        { name: "MATLAB", level: 70 }
      ]
    },
    {
      title: "Data & Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MS SQL Server", level: 85 },
        { name: "Oracle", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Analytics & BI Tools",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 90 },
        { name: "Excel (Advanced)", level: 95 },
        { name: "Google Analytics", level: 85 },
        { name: "Looker", level: 70 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Statistical Modeling", level: 85 },
        { name: "Deep Learning", level: 75 }
      ]
    }
  ];

  const technologies = [
    "Python", "SQL", "Power BI", "Tableau", "Excel", "Machine Learning", 
    "Statistical Modeling", "Data Visualization", "ETL", "Data Warehousing",
    "Google Analytics", "Salesforce", "Apache Airflow", "Docker", "Git",
    "Jupyter", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly",
    "Apache Spark", "Kafka", "ElasticSearch", "AWS", "Azure"
  ];

  const certifications = [
    {
      name: "Data Science and Data Engineering Bootcamp 2024",
      issuer: "Umuzi.org",
      status: "Completed"
    },
    {
      name: "Data Analysis, Excel Skills for Business: Essentials",
      issuer: "Coursera",
      status: "Completed"
    },
    {
      name: "Data Visualization with Tableau",
      issuer: "Coursera",
      status: "Completed"
    },
    {
      name: "Introduction to Python Certificate",
      issuer: "SoloLearn",
      status: "Completed"
    },
    {
      name: "Intermediate Python Certificate",
      issuer: "SoloLearn",
      status: "Completed"
    },
    {
      name: "Power BI Data Analyst Associate",
      issuer: "Microsoft",
      status: "Completed"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Proficiencies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning data science, analytics, and business intelligence
          </p>
        </div>

        {/* Skill Categories with Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, idx) => {
                    const isExpert = skill.level >= 90;
                    const isAdvanced = skill.level >= 80 && skill.level < 90;
                    const isIntermediate = skill.level >= 70 && skill.level < 80;
                    
                    return (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg border-2 transition-all hover:scale-105 cursor-default ${
                          isExpert 
                            ? 'border-primary bg-primary/10 shadow-sm' 
                            : isAdvanced 
                              ? 'border-primary/60 bg-primary/5' 
                              : isIntermediate
                                ? 'border-muted bg-muted/50'
                                : 'border-muted bg-muted/30'
                        }`}
                      >
                        <div className="text-sm font-medium text-center">{skill.name}</div>
                        <div className="flex justify-center mt-1">
                          {isExpert && (
                            <Badge variant="default" className="text-xs px-2 py-0">Proficient</Badge>
                          )}
                          {isAdvanced && (
                            <Badge variant="secondary" className="text-xs px-2 py-0">Advanced</Badge>
                          )}
                          {isIntermediate && (
                            <Badge variant="outline" className="text-xs px-2 py-0">Intermediate</Badge>
                          )}
                          {!isExpert && !isAdvanced && !isIntermediate && (
                            <Badge variant="outline" className="text-xs px-2 py-0 opacity-60">Learning</Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Certifications & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-l-4 border-l-accent shadow-elegant">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Data Modeling</div>
              <p className="text-sm text-muted-foreground">Statistical & Predictive Analytics</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Data Visualization</div>
              <p className="text-sm text-muted-foreground">Interactive Dashboards & Reports</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Google Analytics</div>
              <p className="text-sm text-muted-foreground">Web Analytics & Digital Marketing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Data Analysis</div>
              <p className="text-sm text-muted-foreground">Business Intelligence & Insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;