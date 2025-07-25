import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "Correlation One US, Remote",
      period: "Jan 2024 - Present",
      technologies: ["Python", "SQL", "Excel", "Tableau", "BI Tools"],
      achievements: [
        "Achieved a +9.8 TA rating, the highest among all TAs in the last 2 cohorts, by mentoring over 80 learners in several Amazon Data Analysis and T4J (funded by USAID) programs",
        "Elevated learners' proficiency in data analysis by conducting comprehensive training sessions in advanced Excel, BI tools, SQL, and Python, resulting in a 30% improvement in data manipulation and visualization capabilities",
        "Enhanced program impact by actively engaging in launches, meticulously grading deliverables, and collaborating with instructors to refine course materials, contributing to a 20% increase in participant satisfaction and completion rates"
      ]
    },
    {
      title: "Data Officer (Part-time)",
      company: "MASSAR - France, Remote",
      period: "Jan 2025 - Present",
      technologies: ["Python", "Dataverse", "Power BI", "Excel"],
      achievements: [
        "Led end-to-end data architecture and management for a legal justice initiative, overseeing secure data collection of +700 incidents",
        "Performed advanced text analytics and statistical analysis to extract insights from complex legal narratives",
        "Designed and implemented data governance protocols, reporting frameworks, and dynamic dashboards to support litigation teams",
        "Managed inputs of a data entry team of 6 members"
      ]
    },
    {
      title: "IT & Data Consultant (Part-time)",
      company: "MADANIYA NGO - UK, Remote",
      period: "Jan 2024 - Present",
      technologies: ["Python", "Excel", "Tableau", "Data management"],
      achievements: [
        "Orchestrated a successful digital transformation, significantly enhancing organizational effectiveness and policy development",
        "Achieved optimization of Madaniya's data infrastructure, website, and membership platform",
        "Developed and implemented a data governance strategy, ensuring data accuracy, security, and compliance"
      ]
    },
    {
      title: "Data/Business Analyst Engineer",
      company: "ORANGE/EUROPE – France",
      period: "Jan 2023 – Dec 2024",
      technologies: ["Python", "GCP (BQ, Workflows, Functions)", "AzureAI", "GenAI", "Looker"],
      achievements: [
        "Led the end-to-end design, implementation, and monitoring of a scalable data warehouse in GCP, improving team efficiency by 50%",
        "Owned the development and maintenance of complex data models and orchestrated ETL/ELT pipelines",
        "Integrated automated comment generation and trend analysis systems using Generative AI & LLMs, cutting manual reporting efforts by ~35%",
        "Spearheaded the design and deployment of a KPI dashboard for ITN Europe executives, contributing to a 40% boost in data-driven decision-making",
        "Designed and launched the Sunset dashboard to manage multi-country transition from 2G/3G to 4G/5G networks, reducing transition timelines by 30%"
      ]
    },
    {
      title: "Data Scientist (Project Contract)",
      company: "TALANTA – UK, Remote",
      period: "Jun 2022 - Jan 2023",
      technologies: ["Python", "NLP", "OCR", "Looker", "PowerBI"],
      achievements: [
        "Generated actionable insights through comprehensive data analysis, improving operational efficiency by 40%",
        "Revamped the UI/UX and backend functionality of the Talanta Job platform, leading to a 50% increase in user engagement",
        "Implemented NLP, OCR, and predictive models to optimize job descriptions and resumes, resulting in a 30% increase in candidate matching accuracy and 25% reduction in recruitment cycle time"
      ]
    },
    {
      title: "AI & ML Researcher R&D (Project Contract)",
      company: "ENES LAB – France",
      period: "Jan 2022 - Aug 2022",
      technologies: ["Python", "UMAP", "CNN", "TensorFlow", "Pytorch", "SLURM"],
      achievements: [
        "Analyzed 0.96-second samples from approximately 2,750 recording hours of eco-acoustic data",
        "Utilized UMAP visualization & pre-trained CNN from Google's AudioSet dataset to enhance acoustic biodiversity study",
        "Automated data processing tasks within a SLURM cluster environment, resulting in 60% increase in research efficiency and 40% reduction in processing time",
        "Co-authored research reports and publications submitted to the EU Research Funds center"
      ]
    },
    {
      title: "Software Engineer (Erasmus Traineeship)",
      company: "EMEA TRADE SPRL – Belgium",
      period: "Aug 2021 – Feb 2022",
      technologies: ["Python", "SQL", "Time Series", "Tableau"],
      achievements: [
        "Analyzed and forecasted customer demand and sales, leading to a 20% improvement in inventory management",
        "Developed and maintained database analysis and monitoring interfaces for stakeholders, enhancing data accessibility by 30%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven track record of delivering data-driven solutions across diverse industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-8 w-4 h-4 bg-primary rounded-full shadow-[var(--portfolio-shadow)] hidden md:block" />
                
                <Card className="group hover:shadow-[var(--portfolio-shadow-lg)] transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center text-primary font-medium">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;