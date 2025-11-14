import { ArrowRight, Shield, Target, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import drillingImage from "@/assets/drilling-operations.jpg";
import safetyImage from "@/assets/safety-team.jpg";

const Home = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We put people and the environment above everything else.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We aim to achieve the highest standards in performance and delivery.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We collaborate openly with communities, partners, and agencies.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Lightbulb,
      title: "Sustainability",
      description: "Committed to responsible resource management and long-term development.",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-left max-w-3xl animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Ede Exploration & Production Limited
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">
            Responsible Energy Development in Nigeria
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed">
            A Nigerian-owned upstream oil and gas company engaged in the exploration, development, 
            and production of petroleum resources. Operator of Ede Field, PPL 229.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <Button size="lg" variant="default" asChild className="rounded-full text-base px-8 py-6 shadow-strong bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/about">LEARN MORE</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full text-base px-8 py-6 border-2 border-foreground/20 text-foreground hover:bg-foreground/10">
              <Link to="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                About EEPL
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Ede Exploration & Production Limited (EEPL) is engaged in the exploration, development,
                and production of petroleum resources. As the Operator of Ede Field, PPL 229, we are
                committed to contributing to Nigeria's energy security and creating lasting value through
                responsible resource development.
              </p>
              <Link to="/about">
                <Button size="lg" className="rounded-full px-8 font-semibold">
                  Discover Our Story
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={drillingImage} 
                alt="Offshore drilling operations at sunset" 
                className="rounded-3xl shadow-strong w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at EEPL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group border-2 hover:border-primary hover:shadow-strong transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={safetyImage} 
            alt="EEPL team collaboration at facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/90 to-primary-dark/95"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto font-medium">
            Join us in building a sustainable energy future for Nigeria
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="rounded-full px-10 font-semibold shadow-xl hover:shadow-2xl">
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
