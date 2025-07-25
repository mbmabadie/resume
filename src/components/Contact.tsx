import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mbmabadie@gmail.com",
      link: "mailto:mbmabadie@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone (France)",
      value: "+33 620 649 397",
      link: "tel:+33620649397"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone (Turkey)",
      value: "+90 539 305 3357", 
      link: "tel:+905393053357"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/badia-alfathi/",
      link: "https://linkedin.com/in/badia-alfathi/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next data science project? Let's discuss how I can help drive your organization's data initiatives forward.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">Information</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="group hover:shadow-[var(--portfolio-shadow)] transition-all duration-300">
                    <CardContent className="p-4">
                      <a 
                        href={contact.link}
                        target={contact.label === "LinkedIn" ? "_blank" : undefined}
                        rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="flex items-center space-x-4 group-hover:text-primary transition-colors"
                      >
                        <div className="text-primary">{contact.icon}</div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Location */}
              <Card className="bg-hsl(var(--portfolio-backdrop)) border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    Current Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Based in <span className="text-primary font-semibold">France</span>, 
                    with extensive experience in remote collaboration across 
                    <span className="text-primary font-semibold"> Europe, UK, and Turkey</span>.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's <span className="text-primary">Collaborate</span>
              </h3>
              
              <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Ready to Transform Your Data?
                      </h4>
                      <p className="text-muted-foreground">
                        Whether you need data engineering, AI consulting, or business intelligence solutions, 
                        I'm here to help turn your data into actionable insights.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--portfolio-shadow)]"
                        onClick={() => window.location.href = 'mailto:mbmabadie@gmail.com?subject=Data Science Collaboration Opportunity'}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open('https://linkedin.com/in/badia-alfathi/', '_blank')}
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expertise Summary */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    What I Bring to Your Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      4+ years of proven data engineering & analytics experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      CDMP certification & Google Cloud Professional Data Engineer
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Expertise in GCP, AI/ML, and Business Intelligence
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Track record of delivering 30-50% efficiency improvements
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      International experience across diverse industries
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;