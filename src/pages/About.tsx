import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";
import infrastructureImage from "@/assets/infrastructure.jpg";

const About = () => {
  const values = [
    {
      title: "Safety First",
      description: "We put people and the environment above everything else.",
    },
    {
      title: "Integrity",
      description: "We act honestly and ethically in all our dealings.",
    },
    {
      title: "Excellence",
      description: "We aim to achieve the highest standards in performance and delivery.",
    },
    {
      title: "Partnership",
      description: "We collaborate openly with our host communities, partners, and government agencies.",
    },
    {
      title: "Sustainability",
      description: "Committed to responsible resource management and long-term development.",
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
            About EEPL
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Building Nigeria's Energy Future Through Responsible Resource Development
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ede Exploration & Production Limited (EEPL) is a Nigerian-owned upstream oil and gas company
                  engaged in the exploration, development, and production of petroleum resources. EEPL is the
                  Operator of Ede Field, PPL 229.
                </p>
                <p>
                  Founded in 2022, EEPL was established to contribute to Nigeria's energy security and to create
                  lasting value through responsible resource development. Our team brings together experienced
                  professionals and technical advisors with a shared goal of operating safely, efficiently and
                  sustainably.
                </p>
                <p>
                  At EEPL, we believe that success in the oil and gas industry must go hand in hand with safety,
                  environmental protection, and community partnership. We work closely with our host communities,
                  regulators, and partners to ensure that our operations deliver positive and sustainable impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={infrastructureImage} 
                alt="Modern oil and gas pipeline infrastructure" 
                className="rounded-3xl shadow-strong w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group border-2 hover:border-primary hover:shadow-strong transition-all duration-500 rounded-2xl overflow-hidden">
              <CardContent className="p-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a respected indigenous exploration and production Company in Nigeria, known for
                  operational excellence, transparency, and strong community relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-primary hover:shadow-strong transition-all duration-500 rounded-2xl overflow-hidden">
              <CardContent className="p-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>To responsibly explore and produce oil and gas in a safe and sustainable manner.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>To maximize value for all stakeholders through efficient operations and sound governance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>To support local capacity development and community growth wherever we operate.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Our Core Values</h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="group border-2 hover:border-primary hover:shadow-elegant transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-lg text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
