import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">EEPL</h3>
            <p className="text-primary-foreground/80 mb-4">
              Ede Exploration & Production Limited - A Nigerian-owned upstream oil and gas company
              committed to operational excellence and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/operations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Operations
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">Contact Number</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@eepl.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Ede Exploration & Production Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
