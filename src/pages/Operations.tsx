import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-operations.jpg";
import refineryImage from "@/assets/refinery.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Operations = () => {
  const focusAreas = [
    {
      icon: Search,
      title: "Efficient Field Exploration",
      description: "Utilizing advanced technologies and best practices to identify and assess petroleum resources with precision and environmental responsibility.",
    },
    {
      icon: TrendingUp,
      title: "Production Growth",
      description: "Implementing strategic development plans to maximize resource recovery while maintaining operational excellence and safety standards.",
    },
    {
      icon: Users,
      title: "Local Participation",
      description: "Creating opportunities for local communities through employment, training, and capacity building initiatives that promote sustainable development.",
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Committed to minimizing environmental impact through responsible operations, continuous monitoring, and adherence to international standards.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Our Operations
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Excellence in Exploration, Development, and Production
          </p>
        </div>
      </section>

      {/* Operations Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Operational Excellence</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              EEPL focuses on efficient field exploration, development, production growth, and local
              participation. Our operations are guided by best practices in engineering, safety, and
              environmental protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className="group border-2 hover:border-primary hover:shadow-strong transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <area.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ede Field */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Ede Field, PPL 229</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <img 
                  src={refineryImage} 
                  alt="Oil refinery processing facility at dusk" 
                  className="rounded-3xl shadow-strong w-full h-[400px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  As the Operator of Ede Field, PPL 229, EEPL is committed to responsible resource development
                  that creates value for all stakeholders. Our operations at Ede Field represent our dedication
                  to operational excellence and sustainable practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through innovation and strong partnerships, we are building a Company that supports Nigeria's
                  energy future while empowering local communities and creating opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partnership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Community Partnership</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that success in the oil and gas industry must go hand in hand with safety,
                  environmental protection, and community partnership. Our commitment extends beyond operations
                  to meaningful engagement with host communities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work closely with our host communities, regulators, and partners to ensure that our
                  operations deliver positive and sustainable impact, contributing to local capacity development
                  and community growth.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-strong hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={sustainabilityImage} 
                  alt="Sustainable energy development with community integration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Operations;
