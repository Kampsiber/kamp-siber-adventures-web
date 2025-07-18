import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wifi, Coffee, Sparkles } from "lucide-react";

const GlampingSection = () => {
  const amenities = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Luxury Pods",
      description: "Fully furnished eco-pods with comfortable beds and climate control"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Modern Amenities",
      description: "Free WiFi, USB charging ports, and premium bathroom facilities"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Private Deck",
      description: "Your own riverside deck with outdoor furniture and BBQ grill"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium Service",
      description: "Daily housekeeping, welcome basket, and concierge services"
    }
  ];

  return (
    <section id="glamping" className="py-20 bg-earth-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Luxury Glamping
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the great outdoors without sacrificing comfort. Our luxury glamping pods 
            combine the beauty of nature with five-star amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Glamping Pods */}
          <div className="space-y-4">
            <Card className="shadow-warm hover:shadow-[0_0_30px_hsl(var(--sunset)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Riverside Pod
                  <span className="text-2xl font-bold text-primary">$120</span>
                </CardTitle>
                <CardDescription>per night • Sleeps 2</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• King-size bed with luxury linens</li>
                  <li>• Private bathroom with shower</li>
                  <li>• Climate control & heating</li>
                  <li>• Private riverside deck</li>
                  <li>• Mini-fridge & coffee station</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-warm border-sunset/20 hover:shadow-[0_0_30px_hsl(var(--sunset)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Family Pod
                  <span className="text-2xl font-bold text-primary">$180</span>
                </CardTitle>
                <CardDescription>per night • Sleeps 4</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Master bedroom + bunk beds</li>
                  <li>• Full bathroom with bathtub</li>
                  <li>• Kitchenette with dining area</li>
                  <li>• Large deck with BBQ grill</li>
                  <li>• Living area with sofa bed</li>
                  <li>• Kids' play corner</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Nature Meets Luxury
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our glamping pods offer an elevated outdoor experience where you can enjoy 
              stunning river views, hear the sounds of nature, and sleep comfortably in 
              a bed with hotel-quality linens.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-sunset mt-1">{amenity.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{amenity.title}</h4>
                    <p className="text-sm text-muted-foreground">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg">
                Book Glamping Pod
              </Button>
              <Button variant="outline" size="lg">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlampingSection;