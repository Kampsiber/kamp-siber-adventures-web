import { Tent, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Tent className="h-8 w-8" />
              <span className="text-xl font-bold">Kamp Siber</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your perfect riverside escape where adventure meets comfort. Experience nature 
              like never before at our premium camping and glamping destination.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#camping" className="hover:text-primary-foreground transition-smooth">Riverside Camping</a></li>
              <li><a href="#glamping" className="hover:text-primary-foreground transition-smooth">Luxury Glamping</a></li>
              <li><a href="#bar" className="hover:text-primary-foreground transition-smooth">Bar & Café</a></li>
              <li><a href="#activities" className="hover:text-primary-foreground transition-smooth">Activities</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-CAMP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@kampsiber.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Riverside Drive<br />Nature Valley, State 12345</span>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">Subscribe for updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-md text-primary-foreground placeholder-primary-foreground/50"
                />
                <button className="px-4 py-2 bg-sunset text-sunset-foreground text-sm font-medium rounded-r-md hover:bg-sunset/90 transition-smooth">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 Kamp Siber. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;