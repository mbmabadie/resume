import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, User } from "lucide-react";

const Recommendations = () => {
  const recommendations = [
    {
      name: "Michel Puharré",
      title: "Senior manager @Orange Europe",
      content: "I'm thrilled to endorse Badia for any future opportunities. As a Data Analyst intern in Orange Europe, he collaborated with the Marketing team. Badia showcased exceptional skills in data analysis, Python automation, and innovative report creation. His efficiency, adaptability, and collaborative spirit were truly impressive. Without hesitation, I highly recommend Badia for his remarkable contributions and professionalism.",
      rating: 5
    },
    {
      name: "Viviana Márquez",
      title: "AI Community Lead @ Prolific",
      content: "I have the pleasure of working with Badia as a TA for the Amazon Career Choice Data Analytics programs at Correlation One, where I'm the Lead Instructor. Badia stood out for his deep understanding of data analytics, not just in theory but also in the context of industry applications. His strong skills in SQL, Excel, Tableau, and Python were matched by his ability to communicate complex technical concepts clearly, making learning enjoyable for everyone. Badia's professionalism is evident not only in his work but also in how he presents himself. I frequently use his LinkedIn, website, and resume as examples for learners to model. He is proactive, knowledgeable, and a natural mentor. He is a great asset to our team, and I'm confident he would bring tremendous value to any data analytics role.",
      rating: 5
    }
  ];

  return (
    <section id="recommendations" className="py-20 bg-hsl(var(--portfolio-backdrop))">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trust & <span className="text-primary">Recommendations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What colleagues and industry leaders say about working with me
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recommendations.map((rec, index) => (
              <Card key={index} className="group hover:shadow-[var(--portfolio-shadow-lg)] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {rec.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {rec.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Quote className="h-6 w-6 text-primary/60 mr-2" />
                      <div className="flex">
                        {[...Array(rec.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{rec.content}"
                  </blockquote>
                  <div className="mt-4 flex justify-end">
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      Verified Recommendation
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;