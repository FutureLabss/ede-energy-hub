import { ArrowRight, Shield, Target, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We put people and the environment above everything else.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We aim to achieve the highest standards in performance and delivery.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We collaborate openly with communities, partners, and agencies.",
    },
    {
      icon: Lightbulb,
      title: "Sustainability",
      description: "Committed to responsible resource management and long-term development.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Powering Nigeria's Energy Future
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            A Nigerian-owned upstream oil and gas company committed to operational excellence,
            safety, and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button variant="hero" size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/operations">
              <Button variant="hero" size="lg">
                Our Operations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About EEPL
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ede Exploration & Production Limited (EEPL) is engaged in the exploration, development,
              and production of petroleum resources. As the Operator of Ede Field, PPL 229, we are
              committed to contributing to Nigeria's energy security and creating lasting value through
              responsible resource development.
            </p>
            <Link to="/about">
              <Button size="lg">
                Discover Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at EEPL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join us in building a sustainable energy future for Nigeria
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
