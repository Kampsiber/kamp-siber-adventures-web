import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-campsite.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Rating */}
          <div className="flex items-center justify-center space-x-1 text-sunset">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            <span className="ml-2 text-background font-medium">4.9/5 Rating</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight">
            Welcome to{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent text-6xl">
              Kamp Siber
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-background/90 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of adventure and comfort along the pristine riverside. 
            From traditional camping to luxury glamping, we offer unforgettable outdoor experiences.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-background/80">
            <MapPin className="h-5 w-5" />
            <span className="font-medium mx-[5px] px-[2px] my-0 py-0 text-base">Tolmin • Soča Valley</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Book Your Stay
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Amenities
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8">
            <a href="#camping" className="inline-flex flex-col items-center text-background/70 hover:text-background transition-smooth">
              <span className="text-sm font-medium mb-2">Discover More</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[{
          number: "100+",
          label: "Happy Campers"
        }, {
          number: "15",
          label: "Riverside Spots"
        }, {
          number: "8",
          label: "Luxury Pods"
        }, {
          number: "24/7",
          label: "Bar Service"
        }].map((stat, index) => <div key={index} className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg px-4 py-3 text-center min-w-[100px]">
              <div className="text-lg font-bold text-background">{stat.number}</div>
              <div className="text-sm text-background/80">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Hero;