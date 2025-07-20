import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Tent, Globe } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/si')) return 'SI';
    if (location.pathname.startsWith('/de')) return 'DE';
    return 'EN';
  };
  
  const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLanguage());

  const languages = [
    { code: "EN", name: "English" },
    { code: "SI", name: "Slovenian" },
    { code: "DE", name: "German" }
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Camping", href: "#camping" },
    { name: "Glamping", href: "#glamping" },
    { name: "Bar", href: "#bar" },
    { name: "Activities", href: "#activities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Tent className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Kamp Siber</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="sm">
                Book Now
              </Button>
              
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Globe className="h-4 w-4" />
                    <span>{selectedLanguage}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border border-border">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => {
                        setSelectedLanguage(language.code);
                        if (language.code === 'EN') navigate('/');
                        else navigate(`/${language.code.toLowerCase()}`);
                      }}
                      className="hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      {language.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="hero" size="sm" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;