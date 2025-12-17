import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Building2, TrendingUp, Target } from "lucide-react";
import thomasPhoto from "@/assets/thomas-huyghe.jfif";

const About = () => {
  const timeline = [
    {
      icon: GraduationCap,
      title: "MSc Supply Chain Management",
      organization: "University of Antwerp",
      description: "Foundation in logistics and operations",
    },
    {
      icon: GraduationCap,
      title: "MSc Global Business & Sustainability",
      organization: "Rotterdam School of Management",
      description: "Specialized in sustainable business practices",
    },
    {
      icon: Building2,
      title: "ESG Consultant",
      organization: "BDO",
      description: "Co-founded sustainability department; scaled team from 2 to 13 people in 2.5 years",
    },
    {
      icon: TrendingUp,
      title: "ESG Specialist",
      organization: "Manuchar",
      description: "Carbon footprinting, responsible sourcing programs, decarbonisation roadmap; contributed to Ecovadis Platinum achievement",
    },
    {
      icon: Target,
      title: "Founder",
      organization: "Sustavision",
      description: "Helping SMEs implement pragmatic ESG solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img 
                  src={thomasPhoto} 
                  alt="Thomas Huyghe" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg flex-shrink-0"
                />
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold">Hi — I'm Thomas Huyghe. I make ESG practical.</h1>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      I hold an MSc in Supply Chain Management (University of Antwerp) and an MSc in Global Business 
                      & Sustainability (Rotterdam School of Management). At BDO, I co-founded the sustainability 
                      department, growing it from 2 to 13 people in 2.5 years.
                    </p>
                    <p>
                      Later at Manuchar, I rolled out carbon footprinting, responsible sourcing, and the 
                      decarbonisation roadmap — contributing to the company achieving Ecovadis Platinum.
                    </p>
                    <p>
                      Now, through Sustavision, I help SMEs take pragmatic ESG actions without overwhelming their teams.
                    </p>
                  </div>
                  <Button size="lg" asChild>
                    <Link to="/contact">Book your free ESG consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Experience Timeline</h2>
              
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-md"
                    >
                      <div className="flex-shrink-0">
                        <div className="rounded-lg bg-accent p-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-primary font-medium">{item.organization}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Let's work together</h2>
              <p className="text-lg text-muted-foreground">
                Ready to make ESG practical for your business? Let's discuss how I can help.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
