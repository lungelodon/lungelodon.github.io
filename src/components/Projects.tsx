import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, BarChart3, TrendingUp, Database, Brain, Target, PieChart, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Built a machine learning model using Python and scikit-learn to predict customer churn for a telecommunications company. Achieved 92% accuracy using ensemble methods including Random Forest and Gradient Boosting.",
      icon: Brain,
      category: "Machine Learning",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      githubUrl: "https://github.com/lungelodon/customer-churn-prediction",
      liveUrl: null,
      features: [
        "Feature engineering with RFM analysis",
        "Hyperparameter tuning with GridSearchCV",
        "SHAP values for model interpretability",
        "Interactive dashboard with Streamlit"
      ]
    },
    {
      title: "Financial Portfolio Dashboard",
      description: "Created an interactive Power BI dashboard for portfolio management, integrating real-time stock data APIs. Includes risk analysis, performance metrics, and automated reporting features.",
      icon: TrendingUp,
      category: "Business Intelligence",
      technologies: ["Power BI", "Python", "SQL Server", "Yahoo Finance API", "DAX"],
      githubUrl: "https://github.com/lungelodon/portfolio-dashboard",
      liveUrl: "https://app.powerbi.com/view?r=portfolio-demo",
      features: [
        "Real-time market data integration",
        "Risk-return analysis visualization",
        "Automated performance reports",
        "Mobile-responsive design"
      ]
    },
    {
      title: "E-commerce Sales Analytics",
      description: "Comprehensive analysis of e-commerce sales data using SQL and Python. Built predictive models for demand forecasting and created automated ETL pipelines for daily data processing.",
      icon: BarChart3,
      category: "Data Analytics",
      technologies: ["Python", "SQL", "Apache Airflow", "PostgreSQL", "Tableau", "Docker"],
      githubUrl: "https://github.com/lungelodon/ecommerce-analytics",
      liveUrl: null,
      features: [
        "Automated ETL pipeline with Airflow",
        "Seasonal demand forecasting",
        "Customer segmentation analysis",
        "Real-time sales monitoring"
      ]
    },
    {
      title: "Banking Risk Analytics Platform",
      description: "Developed a comprehensive risk assessment platform for banking operations, analyzing credit risk, market volatility, and regulatory compliance metrics.",
      icon: Database,
      category: "Financial Analytics",
      technologies: ["Python", "PostgreSQL", "Tableau", "Docker"],
      githubUrl: "https://github.com/lungelodon/banking-risk-analytics",
      liveUrl: "https://banking-risk-demo.vercel.app",
      features: [
        "Credit risk modeling",
        "Market volatility analysis",
        "Compliance reporting",
        "Real-time monitoring"
      ]
    },
    {
      title: "Cryptocurrency Portfolio Tracker",
      description: "Built an advanced portfolio management system for cryptocurrency investments with real-time price tracking and performance analytics.",
      icon: TrendingUp,
      category: "Financial Analytics",
      technologies: ["React", "Node.js", "MongoDB", "CoinGecko API"],
      githubUrl: "https://github.com/lungelodon/crypto-portfolio-tracker",
      liveUrl: "https://crypto-tracker-demo.vercel.app",
      features: [
        "Real-time price tracking",
        "Portfolio performance metrics",
        "Risk assessment tools",
        "Advanced charting"
      ]
    },
    {
      title: "Marketing Campaign Optimization",
      description: "Analyzed marketing campaign performance using A/B testing and statistical analysis. Built recommendation engine for optimal campaign targeting and budget allocation across channels.",
      icon: Target,
      category: "Marketing Analytics",
      technologies: ["Python", "Google Analytics API", "Facebook Ads API", "Plotly", "Streamlit"],
      githubUrl: "https://github.com/lungelodon/marketing-optimization",
      liveUrl: "https://marketing-optimizer.streamlit.app",
      features: [
        "Multi-channel attribution modeling",
        "A/B test statistical significance",
        "Campaign ROI optimization",
        "Automated reporting dashboard"
      ]
    },
    {
      title: "Supply Chain Analytics Platform",
      description: "Developed a comprehensive supply chain analytics solution using Python and Tableau. Optimized inventory management and predicted supply chain disruptions using time series analysis.",
      icon: PieChart,
      category: "Operations Analytics",
      technologies: ["Python", "Tableau", "PostgreSQL", "Scikit-learn", "Plotly", "FastAPI"],
      githubUrl: "https://github.com/lungelodon/supply-chain-analytics",
      liveUrl: null,
      features: [
        "Inventory optimization algorithms",
        "Demand forecasting models",
        "Supplier performance tracking",
        "Risk assessment framework"
      ]
    },
    {
      title: "Real-time IoT Data Pipeline",
      description: "Built a scalable real-time data pipeline for IoT sensor data using Apache Kafka and Spark. Created anomaly detection system for predictive maintenance in manufacturing.",
      icon: Activity,
      category: "Data Engineering",
      technologies: ["Apache Kafka", "Apache Spark", "Python", "ElasticSearch", "Kibana", "Docker"],
      githubUrl: "https://github.com/lungelodon/iot-data-pipeline",
      liveUrl: null,
      features: [
        "Real-time stream processing",
        "Anomaly detection algorithms",
        "Scalable microservices architecture",
        "Interactive monitoring dashboard"
      ]
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Portfolio Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Data Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my data science and analytics projects showcasing expertise in machine learning, 
            business intelligence, and data engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className="border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
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
                  <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="portfolio" 
                    size="sm" 
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
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