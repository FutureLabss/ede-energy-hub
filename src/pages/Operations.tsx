import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-operations.jpg";
import communityImage from "@/assets/community.jpg";

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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Our Operations
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Excellence in Exploration, Development, and Production
          </p>
        </div>
      </section>

      {/* Operations Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Operational Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              EEPL focuses on efficient field exploration, development, production growth, and local
              participation. Our operations are guided by best practices in engineering, safety, and
              environmental protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className="border-2 hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                    <area.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ede Field */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Ede Field, PPL 229</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  As the Operator of Ede Field, PPL 229, EEPL is committed to responsible resource development
                  that creates value for all stakeholders. Our operations at Ede Field represent our dedication
                  to operational excellence and sustainable practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through innovation and strong partnerships, we are building a Company that supports Nigeria's
                  energy future while empowering local communities and creating opportunities for growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Partnership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Community Partnership</h2>
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
              <div className="rounded-lg overflow-hidden shadow-strong">
                <img 
                  src={communityImage} 
                  alt="Community Partnership" 
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
