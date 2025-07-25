import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Phone, Linkedin } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-hsl(var(--portfolio-backdrop)) relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-[var(--portfolio-shadow-lg)] ring-4 ring-primary/20">
              <img src="/lovable-uploads/6705e07b-bb0c-4987-aee7-90ab59f1853c.png" alt="Badia Alfathi" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                CDMP Certified
              </Badge>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Badia <span className="text-primary">ALFATHI</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">Driving business performance with AI, automation, data engineering, and advanced analytics.</h2>

          {/* Professional Summary */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            CDMP certified Data Consultant with <span className="text-primary font-semibold">4+ years</span> of experience 
            in data analysis, engineering, and consultancy. Proven track record in optimizing data infrastructure 
            and automating workflows to enhance decision-making and operational efficiency.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-[var(--portfolio-shadow)]">
              <div className="text-2xl font-bold text-primary">2/4</div>
              <div className="text-sm text-muted-foreground">Master's degrees/ِAcademic degrees</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-[var(--portfolio-shadow)]">
              <div className="text-2xl font-bold text-primary">45+</div>
              <div className="text-sm text-muted-foreground">Completed Courses</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-[var(--portfolio-shadow)]">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-[var(--portfolio-shadow)]">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Countries of work</div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--portfolio-shadow)]" onClick={() => scrollToSection('contact')}>
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => scrollToSection('experience')}>
              View Experience
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <a 
                href="https://drive.google.com/drive/folders/1woCxEQN2JX99XciFeipm87PjNc7vB258?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shadow-[var(--portfolio-shadow)]"
              >
                📄 Access Resume
              </a>
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-8">
            <a href="mailto:mbmabadie@gmail.com" className="flex items-center hover:text-primary transition-colors">
              <Mail className="mr-2 h-4 w-4" />
              mbmabadie@gmail.com
            </a>
            <a href="tel:+33620649397" className="flex items-center hover:text-primary transition-colors">
              <Phone className="mr-2 h-4 w-4" />
              +33 620 649 397
            </a>
            <a href="https://linkedin.com/in/badia-alfathi/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn Profile
            </a>
          </div>

          {/* Scroll Indicator */}
          <Button variant="ghost" size="sm" onClick={() => scrollToSection('experience')} className="animate-bounce text-primary hover:text-primary/80">
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;