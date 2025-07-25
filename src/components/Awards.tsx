import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Lightbulb } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "MENA ML Winter School 2025",
      organization: "Hamad Bin Khalifa University & QCRI, Qatar",
      date: "February 2025",
      type: "Academic Program",
      icon: <Trophy className="h-5 w-5" />
    }
  ];

  const fellowships = [
    {
      title: "Bloom EMEA Fellowship",
      description: "Selective fellowship program for emerging leaders in EMEA region",
      type: "Leadership Fellowship"
    },
    {
      title: "Tabadol Fellowship", 
      description: "Cross-cultural exchange and professional development program",
      type: "Cultural Fellowship"
    },
    {
      title: "Erasmus+ Mobility for Traineeship",
      description: "European Union mobility program for professional training",
      type: "EU Mobility Program"
    }
  ];

  const hackathons = [
    {
      title: "MIT Policy Hackathon 2022",
      achievement: "Top 3 Finalist",
      description: "Competed among hundreds of participants to develop innovative policy solutions",
      type: "Policy Innovation"
    }
  ];

  const funding = [
    {
      title: "Jusoor Business Incubator",
      description: "Selected for business development and mentorship program",
      type: "Business Incubator"
    },
    {
      title: "Jordan Start Accelerator",
      description: "Startup acceleration program for innovative business solutions",
      type: "Startup Accelerator"
    },
    {
      title: "Switchboard Hackathon",
      description: "Technology innovation challenge focusing on digital solutions",
      type: "Tech Innovation"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-hsl(var(--portfolio-backdrop))">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in data science, innovation, and leadership across international programs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Awards Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Trophy className="h-6 w-6 text-primary mr-3" />
              Recent <span className="text-primary ml-2">Awards</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="group hover:shadow-[var(--portfolio-shadow-lg)] transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary mt-1">{award.icon}</div>
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {award.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">{award.organization}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {award.type}
                        </Badge>
                        <p className="text-sm text-primary font-medium mt-1">{award.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Fellowships Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              <span className="text-primary">Fellowships</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fellowships.map((fellowship, index) => (
                <Card key={index} className="group hover:shadow-[var(--portfolio-shadow)] transition-all duration-300">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit border-primary text-primary mb-2">
                      {fellowship.type}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {fellowship.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{fellowship.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hackathons Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Lightbulb className="h-6 w-6 text-primary mr-3" />
              Innovation <span className="text-primary ml-2">Challenges</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {hackathons.map((hackathon, index) => (
                <Card key={index} className="group hover:shadow-[var(--portfolio-shadow-lg)] transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {hackathon.title}
                        </CardTitle>
                        <div className="flex items-center mt-2">
                          <Badge className="bg-primary text-primary-foreground mr-3">
                            {hackathon.achievement}
                          </Badge>
                          <Badge variant="outline" className="border-primary text-primary">
                            {hackathon.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{hackathon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Funding Programs Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Funding <span className="text-primary ml-2">Programs</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {funding.map((program, index) => (
                <Card key={index} className="group hover:shadow-[var(--portfolio-shadow)] transition-all duration-300">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit border-primary text-primary mb-2">
                      {program.type}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;