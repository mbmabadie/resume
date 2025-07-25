import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Machine Learning for AI, M.Sc.",
      institution: "Université Lumière Lyon 2",
      location: "France",
      period: "Sep 2023 - Aug 2024",
      specialization: "Advanced Machine Learning, AI Systems, Data Engineering"
    },
    {
      degree: "Machine Learning & Data Mining (MLDM), M.Sc.",
      institution: "Jean Monnet University",
      location: "France", 
      period: "Sep 2021 - Aug 2023",
      specialization: "Data Mining, Statistical Learning, Big Data Analytics"
    },
    {
      degree: "Computer & Data Science, Postgraduate Diploma",
      institution: "MIT University",
      location: "US (Remote)",
      period: "Jan 2022 – Jan 2023",
      specialization: "Computer Science, Computational Thinking & Data Science, Data Science for Healthcare"
    },
    {
      degree: "Computer Engineering (with honors), B.Eng.",
      institution: "Karabuk University",
      location: "Turkey",
      period: "Sep 2017 - July 2021",
      specialization: "Computer Systems, Software Engineering, Data Structures"
    }
  ];

  const certifications = [
    {
      name: "Certified Data Management Professional (CDMP)",
      issuer: "DAMA",
      date: "December 2024",
      type: "Professional Certification",
      link: "https://certificates.cdmp.info/b5a0fec5-585c-40f0-8696-0d4e8efa02c7#acc.dO4QYDC3"
    },
    {
      name: "Take The Lead Program",
      issuer: "Cornell University",
      date: "August 2024",
      type: "Professional Development"
    },
    {
      name: "Google Certified Professional Data Engineer",
      issuer: "Google Cloud Platform",
      date: "2024",
      type: "Cloud Certification"
    },
    {
      name: "Google Business Intelligence Certificate",
      issuer: "Google Cloud Platform",
      date: "2024",
      type: "Specialization",
      embed: '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9039d1c0-704b-407a-a0cb-1092596e3a90" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>'
    },
    {
      name: "Google IT Automation with Python Professional Certificate",
      issuer: "Google Cloud Platform",
      date: "2024",
      type: "Specialization",
      embed: '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9039d1c0-704b-407a-a0cb-1092596e3a90" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>'
    },
    {
      name: "Google Project Management Certificate (v1)",
      issuer: "Google Cloud Platform",
      date: "2024",
      type: "Specialization",
      embed: '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ba54566e-313f-4b4f-b4b2-b9c8341ed8d3" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>'
    },
    {
      name: "Data Engineering, Big Data, and ML on GCP",
      issuer: "Google Cloud Platform",
      date: "2024",
      type: "Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/AK232YJLJ6K5"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced academic credentials and professional certifications in data science and AI
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Academic <span className="text-primary ml-2">Background</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="group hover:shadow-[var(--portfolio-shadow-lg)] transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                      <div className="flex items-center text-primary font-medium">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Specializations:</span> {edu.specialization}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Badge className="h-6 w-6 text-primary mr-3 p-0 bg-transparent">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </Badge>
              Professional <span className="text-primary ml-2">Certifications</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="group hover:shadow-[var(--portfolio-shadow)] transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {cert.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <CardTitle className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-foreground">Issued by:</span> {cert.issuer}
                    </p>
                    {cert.embed && (
                      <div dangerouslySetInnerHTML={{ __html: cert.embed }} className="flex justify-center" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Certification Links */}
            <div className="mt-8 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">View All Certifications</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.credly.com/users/badia-alfathi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Credly Profile
                </a>
                <a 
                  href="https://www.credly.com/users/badia-alfathi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Coursera Profile
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1woCxEQN2JX99XciFeipm87PjNc7vB258?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  All Certificates Drive
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;