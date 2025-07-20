import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wifi, Coffee, Sparkles } from "lucide-react";

const GlampingSection = () => {
  const amenities = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Luxus-Pods",
      description: "Voll ausgestattete Öko-Pods mit bequemen Betten und Klimaanlage"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Moderne Annehmlichkeiten",
      description: "Kostenloses WiFi, USB-Ladestationen und Premium-Badeinrichtungen"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Private Terrasse",
      description: "Ihre eigene Flussterrasse mit Außenmöbeln und Grillplatz"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium-Service",
      description: "Tägliche Reinigung, Willkommenskorb und Concierge-Services"
    }
  ];

  return (
    <section id="glamping" className="py-20 relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/lovable-uploads/f09da32a-ff1c-43d9-9c6a-662aea1d8fef.png')"
    }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Luxus Glamping
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erleben Sie die Natur ohne Komfortverzicht. Unsere Luxus-Glamping-Pods 
            verbinden die Schönheit der Natur mit Fünf-Sterne-Annehmlichkeiten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Glamping Pods */}
          <div className="space-y-4">
            <Card className="shadow-warm hover:shadow-[0_0_30px_hsl(var(--sunset)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Fluss-Pod
                  <span className="text-2xl font-bold text-primary">120€</span>
                </CardTitle>
                <CardDescription>pro Nacht • 2 Personen</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-warm border-sunset/20 hover:shadow-[0_0_30px_hsl(var(--sunset)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Familien-Pod
                  <span className="text-2xl font-bold text-primary">180€</span>
                </CardTitle>
                <CardDescription>pro Nacht • 4 Personen</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Natur Trifft Luxus
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unsere Glamping-Pods bieten ein gehobenes Outdoor-Erlebnis, bei dem Sie 
              atemberaubende Flussblicke genießen, die Geräusche der Natur hören und bequem in 
              einem Bett mit hochwertiger Bettwäsche schlafen können.
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
                Glamping-Pod Buchen
              </Button>
              <Button variant="outline" size="lg">
                Virtuelle Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlampingSection;