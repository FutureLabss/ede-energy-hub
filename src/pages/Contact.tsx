import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-muted">
        <div className="relative z-10 container mx-auto px-4 text-center pt-16 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Contact us for inquiries, partnerships, or more information.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 rounded-2xl">
              <CardContent className="p-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+234 XXX XXX XXXX"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="w-full resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full rounded-full font-semibold">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  We welcome inquiries about our operations, partnership opportunities, and community
                  engagement initiatives. Our team is ready to assist you.
                </p>
              </div>

              <Card className="border-2 hover:border-primary hover:shadow-elegant transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">Office Location</h3>
                      <p className="text-muted-foreground">
                        Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary hover:shadow-elegant transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        Contact Number
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary hover:shadow-elegant transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@eepl.ng
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
