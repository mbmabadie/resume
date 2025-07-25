import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  Cloud, 
  Brain, 
  Globe,
  Wrench,
  Shield
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "SQL", "R", "C"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Google Cloud Platform", "AWS", "Azure AI"]
    },
    {
      title: "Data & BI Tools",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: ["Looker Studio", "Power BI", "Tableau", "BigQuery"]
    },
    {
      title: "Dashboard Creation",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: ["Interactive Reports", "KPI Tracking", "Automated Dashboards"]
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "MySQL", "BigQuery", "GCP Data Storage", "Microsoft DataVerse"]
    }
  ];

  const coreCompetencies = [
    { name: "Data Analysis & Engineering", icon: <Database className="h-4 w-4" /> },
    { name: "Machine Learning & Deep Learning", icon: <Brain className="h-4 w-4" /> },
    { name: "Business Intelligence & Analytics", icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Data Management & Governance", icon: <Shield className="h-4 w-4" /> },
    { name: "Process Automation", icon: <Wrench className="h-4 w-4" /> },
    { name: "ETL/ELT Pipeline Development", icon: <Database className="h-4 w-4" /> },
    { name: "Statistical Analysis & Modeling", icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Natural Language Processing", icon: <Brain className="h-4 w-4" /> },
    { name: "Time Series Analysis", icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Data Visualization", icon: <BarChart3 className="h-4 w-4" /> }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Arabic", level: "Native" },
    { name: "Turkish", level: "Fluent" },
    { name: "French", level: "Intermediate" }
  ];

  return (
    <section id="skills" className="py-20 bg-hsl(var(--portfolio-backdrop))">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across data science, engineering, and AI technologies
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-[var(--portfolio-shadow-lg)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <div className="text-primary mr-3">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="border-primary/20 text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core <span className="text-primary">Competencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map((competency, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-card rounded-lg hover:shadow-[var(--portfolio-shadow)] transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary mr-3">{competency.icon}</div>
                <span className="text-sm font-medium text-foreground">{competency.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            <Globe className="inline h-6 w-6 mr-2 text-primary" />
            <span className="text-primary">Languages</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="text-lg py-2 px-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {language.name} - {language.level}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;