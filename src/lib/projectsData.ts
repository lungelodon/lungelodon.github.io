import { Database, BarChart3, TrendingUp, Activity, Target, PieChart, Brain } from "lucide-react";

export const projects = [
  {
    id: "telecom-churn-analysis",
    title: "Telecom Customer Churn Analysis",
    shortDescription: "This project involves a deep dive into telecom customer data to understand churn drivers. I used SQL for data manipulation and Python for exploratory analysis, presented in an Excel dashboard for broad accessibility.",
    description: "Advanced analysis of telecom customer data using SQL for data manipulation and Python for exploratory analysis. The project aims to identify key churn indicators and provide actionable insights through interactive visualizations.",
    icon: Database,
    category: "Data Analytics", 
    tools: ["SQL", "Excel", "Python", "Jupyter"],
    technologies: ["SQL", "Excel", "Python", "Jupyter"],
    githubUrl: "https://github.com/lungelodon/telecom-customer-churn-analysis",
    dashboardUrl: null,
    downloadUrl: "/project-files/telecom-churn-analysis.zip",
    features: [
      "Comprehensive SQL data analysis",
      "Python-based exploratory analysis", 
      "Interactive Excel dashboard",
      "Churn prediction insights"
    ],
    hasLiveDashboard: false,
    powerBi: false,
    tableau: false,
    projectGoal: "To analyze telecom customer data and identify key factors driving customer churn, providing actionable insights for retention strategies.",
    dataSource: "The analysis utilizes a comprehensive telecom customer dataset with over 7,000 customer records, including demographics, service usage patterns, billing information, and churn status.",
    insights: [
      "Customers with month-to-month contracts show 42% higher churn rates",
      "Electronic check payment methods correlate with increased churn probability",
      "Fiber optic internet service customers exhibit higher churn rates than DSL users",
      "Senior citizens demonstrate lower churn rates despite higher service costs"
    ]
  },
  {
    id: "global-sales-performance",
    title: "Global Sales Performance Analysis",
    shortDescription: "This comprehensive analysis provides a detailed examination of sales performance across different regions and product categories. My goal was to identify trends and opportunities for a global superstore.",
    description: "Comprehensive analysis of global sales performance using advanced analytics tools. The project provides insights into regional performance, product profitability, and customer segmentation through interactive visualizations.",
    icon: BarChart3,
    category: "Business Intelligence",
    tools: ["Power BI", "Excel", "DAX"],
    technologies: ["Power BI", "Excel", "DAX"],
    githubUrl: "https://github.com/lungelodon/global-sales-performance-analysis",
    dashboardUrl: "https://app.powerbi.com/view?r=global-sales-demo",
    downloadUrl: "/project-files/global-sales-performance.zip",
    features: [
      "Regional performance analysis",
      "Product profitability insights",
      "Customer segmentation",
      "Interactive Power BI visualizations"
    ],
    hasLiveDashboard: true,
    powerBi: true,
    tableau: false,
    projectGoal: "To analyze global sales performance across multiple dimensions and identify opportunities for revenue optimization and market expansion.",
    dataSource: "Analysis based on a comprehensive global superstore dataset containing over 9,000 transactions across 147 countries, spanning multiple product categories and customer segments.",
    insights: [
      "West region generates 32% of total revenue with highest profit margins",
      "Technology products show highest growth potential with 18% YoY increase",
      "Consumer segment accounts for 52% of sales but Corporate segment has higher profitability",
      "Q4 consistently outperforms other quarters with 28% of annual sales"
    ]
  },
  {
    id: "hr-employee-attrition",
    title: "HR Analytics: Employee Attrition Dashboard", 
    shortDescription: "I developed a Power BI dashboard to analyze and identify the key factors driving employee attrition. This project aims to provide the HR department with actionable insights to improve retention strategies and workplace satisfaction.",
    description: "Advanced HR analytics project focused on understanding employee attrition patterns. Uses comprehensive data analysis to identify key retention factors and provide strategic insights for HR decision-making.",
    icon: TrendingUp,
    category: "HR Analytics",
    tools: ["Power BI", "Excel", "DAX"],
    technologies: ["Power BI", "Excel", "DAX"],
    githubUrl: "https://github.com/lungelodon/hr-analytics-employee-attrition",
    dashboardUrl: "https://app.powerbi.com/view?r=hr-analytics-demo",
    downloadUrl: "/project-files/hr-employee-attrition.zip",
    features: [
      "Employee attrition analysis",
      "Key retention factor identification",
      "Department-wise insights",
      "Actionable HR recommendations"
    ],
    hasLiveDashboard: true,
    powerBi: true,
    tableau: false,
    projectGoal: "To analyze employee attrition patterns and identify key factors driving employee turnover, enabling HR departments to develop targeted retention strategies.",
    dataSource: "The analysis is based on a fictional but realistic HR dataset from an IBM Watson collection. It contained over 1,400 employee records with 35 variables, including demographics, job role, satisfaction levels, compensation, and attrition status.",
    insights: [
      "Employees aged 18-25 show the highest attrition rate at 23.8%",
      "Research & Development department has the highest retention rate",
      "Overtime requirements significantly impact attrition rates across all departments",
      "Job satisfaction scores below 3.0 correlate with 67% higher attrition probability"
    ]
  },
  {
    id: "api-driven-weather-sales",
    title: "API-Driven Weather & Sales Correlation Study",
    shortDescription: "In this project I demonstrate the power of data enrichment by correlating real-time weather data with daily retail sales. I built an automated pipeline using Google Apps Script to fetch weather data via API.",
    description: "Innovative data correlation study examining the relationship between weather patterns and retail sales performance. Features automated data pipeline and real-time weather API integration for comprehensive analysis.",
    icon: Activity,
    category: "Data Engineering", 
    tools: ["Power BI", "API", "Google Apps Script"],
    technologies: ["Power BI", "Google Apps Script", "Weather API"],
    githubUrl: "https://github.com/lungelodon/api-driven-weather-sales-correlation",
    dashboardUrl: "https://app.powerbi.com/view?r=weather-sales-demo",
    downloadUrl: "/project-files/weather-sales-correlation.zip",
    features: [
      "Real-time weather API integration",
      "Automated data pipeline",
      "Sales-weather correlation analysis",
      "Google Apps Script automation"
    ],
    hasLiveDashboard: true,
    powerBi: true,
    tableau: false,
    projectGoal: "To demonstrate the power of data enrichment by correlating real-time weather data with daily retail sales, showcasing automated data pipeline development.",
    dataSource: "The project combines retail sales data with real-time weather information fetched through automated Google Apps Script integration with weather APIs.",
    insights: [
      "Temperature increases above 75°F correlate with 15% higher beverage sales",
      "Rainy days show 23% increase in indoor entertainment product sales",
      "Weekend weather patterns have stronger sales correlation than weekday patterns",
      "Seasonal weather transitions create predictable sales opportunities"
    ]
  },
  {
    id: "social-media-engagement",
    title: "Social Media Content Engagement Analysis",
    shortDescription: "This analysis focuses on what content characteristics drive the most user engagement. Using Excel, I created a dynamic dashboard to provide clear insights for social media strategy.",
    description: "Comprehensive social media analytics project examining content engagement patterns. Features advanced Excel dashboard with dynamic visualizations to inform social media strategy and content optimization.",
    icon: Target,
    category: "Marketing Analytics",
    tools: ["Excel", "Pivot Tables", "Formulas"],
    technologies: ["Excel", "Pivot Tables", "Advanced Formulas"],
    githubUrl: "https://github.com/lungelodon/social-media-content-engagement",
    dashboardUrl: null,
    downloadUrl: "/project-files/social-media-engagement.zip",
    features: [
      "Content engagement analysis",
      "Dynamic Excel dashboard",
      "Social media strategy insights",
      "Advanced pivot table analysis"
    ],
    hasLiveDashboard: false,
    powerBi: false,
    tableau: false,
    projectGoal: "To analyze social media content characteristics that drive engagement and provide actionable insights for content strategy optimization.",
    dataSource: "Analysis based on social media engagement data across multiple platforms, examining content types, posting times, and audience interaction patterns.",
    insights: [
      "Video content generates 3x higher engagement rates than static images",
      "Posts published between 1-3 PM show optimal engagement rates",
      "User-generated content campaigns increase engagement by 45%",
      "Questions and polls drive 2.5x more comments than standard posts"
    ]
  },
  {
    id: "ecommerce-rfm-segmentation",
    title: "E-commerce RFM Customer Segmentation",
    shortDescription: "I performed an RFM (Recency, Frequency, Monetary) analysis to segment customers into actionable groups. This project demonstrates my ability to use SQL for complex cohort analysis and Tableau for visualization.",
    description: "Advanced customer segmentation analysis using RFM methodology. Combines SQL for complex data analysis with Tableau visualizations to provide actionable customer insights for e-commerce optimization.",
    icon: PieChart,
    category: "Customer Analytics",
    tools: ["SQL", "Tableau", "Python"],
    technologies: ["SQL", "Tableau", "Python"],
    githubUrl: "https://github.com/lungelodon/ecommerce-rfm-customer-segmentation",
    dashboardUrl: "https://public.tableau.com/views/ecommerce-rfm-demo",
    downloadUrl: "/project-files/ecommerce-rfm-segmentation.zip",
    features: [
      "RFM customer analysis",
      "Advanced SQL cohort analysis",
      "Tableau visualizations",
      "Actionable customer segments"
    ],
    hasLiveDashboard: true,
    powerBi: false,
    tableau: true,
    projectGoal: "To perform comprehensive RFM (Recency, Frequency, Monetary) analysis for customer segmentation, enabling targeted marketing strategies and improved customer lifetime value.",
    dataSource: "E-commerce transaction data spanning 12 months with over 25,000 customers and 500,000 transactions across multiple product categories.",
    insights: [
      "Champions segment (11% of customers) generates 35% of total revenue",
      "At-risk customers show 67% likelihood of churn within 90 days",
      "New customers segment has highest growth potential with proper nurturing",
      "Hibernating customers can be reactivated with targeted campaigns"
    ]
  },
  {
    id: "supply-chain-logistics",
    title: "Supply Chain Logistics Optimization",
    shortDescription: "This dashboard analyzes shipping data to identify bottlenecks and optimize delivery routes. I focused on tracking KPIs like on-time delivery rates and shipping costs to provide actionable insights for a logistics company.",
    description: "Comprehensive supply chain optimization project analyzing shipping performance and delivery efficiency. Features advanced analytics to identify bottlenecks and optimize logistics operations.",
    icon: Database,
    category: "Supply Chain Analytics",
    tools: ["Power BI", "SQL", "Power Query"],
    technologies: ["Power BI", "SQL", "Power Query"],
    githubUrl: "https://github.com/lungelodon/supply-chain-logistics-optimization",
    dashboardUrl: "https://app.powerbi.com/view?r=supply-chain-demo",
    downloadUrl: "/project-files/supply-chain-logistics.zip",
    features: [
      "Shipping performance analysis",
      "Delivery optimization insights",
      "KPI tracking dashboard",
      "Cost reduction recommendations"
    ],
    hasLiveDashboard: true,
    powerBi: true,
    tableau: false,
    projectGoal: "To analyze supply chain logistics data to identify bottlenecks, optimize delivery routes, and improve overall supply chain efficiency.",
    dataSource: "Comprehensive logistics dataset containing shipping records, delivery times, costs, and performance metrics across multiple distribution centers.",
    insights: [
      "Route optimization could reduce delivery costs by 18% annually",
      "Peak shipping hours create 34% longer delivery delays",
      "Express shipping method shows highest customer satisfaction at 94%",
      "Regional distribution centers reduce average delivery time by 2.3 days"
    ]
  },
  {
    id: "healthcare-patient-readmission",
    title: "Healthcare Patient Readmission Analysis",
    shortDescription: "I analyzed healthcare data to understand the factors contributing to hospital readmissions. The goal was to provide insights that could help improve patient care and reduce readmission rates.",
    description: "Comprehensive healthcare analytics project examining patient readmission patterns. Uses advanced statistical analysis to identify key factors affecting readmission rates and provide actionable healthcare insights.",
    icon: Brain,
    category: "Healthcare Analytics",
    tools: ["Tableau", "SQL"],
    technologies: ["Tableau", "SQL"],
    githubUrl: "https://github.com/lungelodon/healthcare-patient-readmission-analysis",
    dashboardUrl: "https://public.tableau.com/views/healthcare-readmission-demo",
    downloadUrl: "/project-files/healthcare-patient-readmission.zip",
    features: [
      "Patient readmission analysis",
      "Healthcare KPI tracking",
      "Risk factor identification",
      "Care improvement insights"
    ],
    hasLiveDashboard: true,
    powerBi: false,
    tableau: true,
    projectGoal: "To analyze healthcare data and identify factors contributing to hospital readmissions, providing insights to improve patient care and reduce readmission rates.",
    dataSource: "Healthcare dataset containing patient demographics, medical conditions, treatment history, and readmission outcomes across multiple hospital departments.",
    insights: [
      "Patients with diabetes show 23% higher readmission rates",
      "Length of stay under 3 days correlates with increased readmission risk",
      "Discharge during weekends has 15% higher readmission probability",
      "Patients aged 65+ account for 42% of all readmissions"
    ]
  },
  {
    id: "nyc-311-service-requests",
    title: "NYC 311 Service Request Analysis",
    shortDescription: "This WebFOCUS project provides a comprehensive analysis of New York City's 311 service requests. The goal is to deliver actionable insights to city agencies to improve service delivery, optimize resource allocation, and increase public satisfaction.",
    description: "Advanced municipal data analysis project examining NYC 311 service request patterns. Provides comprehensive insights for city service optimization and resource allocation using enterprise analytics tools.",
    icon: Target,
    category: "Government Analytics",
    tools: ["WebFOCUS", "SQL"],
    technologies: ["WebFOCUS", "SQL"],
    githubUrl: "https://github.com/lungelodon/nyc-311-service-request-analysis",
    dashboardUrl: null,
    downloadUrl: "/project-files/nyc-311-service-requests.zip",
    features: [
      "Municipal service analysis",
      "Resource allocation insights",
      "Service delivery optimization",
      "WebFOCUS enterprise reporting"
    ],
    hasLiveDashboard: false,
    powerBi: false,
    tableau: false,
    projectGoal: "To provide comprehensive analysis of New York City's 311 service requests, delivering actionable insights to improve service delivery and optimize resource allocation.",
    dataSource: "NYC 311 service request data containing millions of citizen requests across multiple service categories, agencies, and geographical locations.",
    insights: [
      "Noise complaints constitute 18% of all 311 requests citywide",
      "Brooklyn generates highest volume of service requests per capita",
      "Response times vary significantly by request type and borough",
      "Winter months show 35% increase in heating-related complaints"
    ]
  },
  {
    id: "us-airline-performance",
    title: "U.S. Airline On-Time Performance Analysis",
    shortDescription: "An in-depth analysis of U.S. domestic flight data to identify the key drivers of delays and cancellations. This WebFOCUS dashboard serves as a strategic tool for an airline to benchmark its performance and improve operational efficiency.",
    description: "Comprehensive airline performance analytics examining flight punctuality and operational efficiency. Features advanced dashboard capabilities to provide strategic insights for airline operations improvement.",
    icon: Activity,
    category: "Aviation Analytics",
    tools: ["WebFOCUS", "Python", "DAX"],
    technologies: ["WebFOCUS", "Python", "DAX"],
    githubUrl: "https://github.com/lungelodon/us-airline-on-time-performance",
    dashboardUrl: null,
    downloadUrl: "/project-files/us-airline-performance.zip",
    features: [
      "Flight performance analysis",
      "Delay pattern identification",
      "Operational efficiency metrics",
      "Strategic airline insights"
    ],
    hasLiveDashboard: false,
    powerBi: false,
    tableau: false,
    projectGoal: "To analyze U.S. domestic flight performance data to identify key drivers of delays and cancellations, providing strategic insights for operational efficiency improvement.",
    dataSource: "Comprehensive U.S. airline performance data including flight schedules, delay reasons, cancellations, and operational metrics across major domestic carriers.",
    insights: [
      "Weather-related delays account for 32% of all flight disruptions",
      "Hub airports show 25% higher delay rates during peak hours",
      "Morning flights have 15% better on-time performance than evening flights",
      "Carrier delays increase significantly during holiday travel periods"
    ]
  }
];