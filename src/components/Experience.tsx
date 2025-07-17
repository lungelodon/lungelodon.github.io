import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "UMUZI.ORG (AFRICAN CODING NETWORK)",
      position: "Data Science and Data Engineering Bootcamp",
      location: "Johannesburg / SOUTH AFRICA",
      period: "Jan 2024 - Dec 2024",
      description: "Undertook this program to transition from data analyst to data scientist and data engineering roles, strengthening my capabilities in advanced data processing, statistical modeling, and machine learning.",
      skills: ["Advanced data handling", "cleaning", "dataset transformation", "statistical modeling", "machine learning (Python, SQL)", "visualization and reporting (Excel, Tableau)", "AI/ML concepts and deployment"],
      type: "bootcamp"
    },
    {
      company: "ANTENNAR (PTY) LTD",
      position: "Financial Data Analyst",
      location: "Menlo Park, Pretoria / SOUTH AFRICA",
      period: "2021 – 2023",
      achievements: [
        "Delivered historical insights, predictive models, and scenario analyses for financial planning cycles.",
        "Maintained financial dashboards in Power BI to monitor KPIs, cashflow, and expenditure trends.",
        "Structured large volumes of financial data to support variance analysis, forecasting, and reconciliations"
      ],
      skills: ["Power BI", "Excel (advanced)", "SQL", "SAP", "Oracle", "financial modeling", "KPI reporting", "forecasting", "variance analysis", "master data management", "GAAP/IFRS compliance", "Lean Six Sigma foundations"],
      type: "work"
    },
    {
      company: "POLYGON (PTY) LTD",
      position: "Data Analyst",
      location: "Rosebank, Johannesburg / SOUTH AFRICA",
      period: "2019 – 2021",
      achievements: [
        "Tracked website traffic and user behavior using Google Analytics to improve marketing strategies.",
        "Built dashboards in Power BI to visualize trends in visits, bounce rates, and conversions.",
        "Worked with CRM data (Salesforce) to segment users and refine email campaign targeting",
        "Automated reports for teams to monitor KPIs like session duration and traffic sources.",
        "Developed Python scripts to automate data retrieval and extraction from structured sources"
      ],
      skills: ["Web Analytics", "Google Analytics", "Power BI", "Tableau", "Excel", "Salesforce", "SQL", "A/B testing", "APIs", "Python: NumPy, Pandas, Matplotlib, Seaborn, Selenium, tensorflow, statsmodels"],
      type: "work"
    },
    {
      company: "BESTMED MEDICAL SCHEME",
      position: "Database Administrator",
      location: "Faerie Glen, Pretoria / SOUTH AFRICA",
      period: "2016 – 2018",
      description: "Recorded membership information for insurance applications, including personal details and ID numbers. Ensured accuracy and completeness of forms, verifying all data before processing. Digitized handwritten forms and transmitted data to the head office for further processing.",
      skills: ["Database Management", "Data Entry", "Updating and Data Migration", "Excel (VLOOKUP, Macros, PivotTables)", "Data Validation", "ETL Process", "Data Analysis", "Data Report Generation"],
      type: "work"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Professional Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Career Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise across data analytics, financial modeling, and business intelligence
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={exp.type === 'bootcamp' ? 'default' : 'secondary'}
                    className={exp.type === 'bootcamp' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {exp.type === 'bootcamp' ? 'Education' : 'Professional'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {exp.description && (
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                )}
                
                {exp.achievements && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-2">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;