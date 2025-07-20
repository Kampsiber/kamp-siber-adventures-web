import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wifi, Coffee, Sparkles } from "lucide-react";

const GlampingSection = () => {
  const amenities = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Luksuzni Šotori",
      description: "Popolnoma opremljeni eko-šotori z udobnimi posteljami in klimatsko napravo"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Moderne Storitve",
      description: "Brezplačen WiFi, USB polnilne postaje in premium kopalniške storitve"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Zasebna Terasa",
      description: "Vaša lastna terasa ob reki z zunanjim pohištvom in žarom"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium Storitve",
      description: "Dnevno čiščenje, pozdravna košarica in concierge storitve"
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
            Luksuzni Glamping
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Doživite naravo brez žrtvovanja udobja. Naši luksuzni glamping šotori 
            združujejo lepoto narave s petzvezdičnimi storitvami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Glamping Pods */}
          <div className="space-y-4">
            <Card className="shadow-warm hover:shadow-[0_0_30px_hsl(var(--sunset)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Šotor ob Reki
                  <span className="text-2xl font-bold text-primary">120€</span>
                </CardTitle>
                <CardDescription>na noč • 2 osebi</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-warm border-sunset/20 hover:shadow-[0_0_30px_hsl(var(--sunset)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Družinski Šotor
                  <span className="text-2xl font-bold text-primary">180€</span>
                </CardTitle>
                <CardDescription>na noč • 4 osebe</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Narava Sreča Luksuz
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Naši glamping šotori ponujajo dvignjeno doživetje v naravi, kjer lahko uživate v 
              čudovitih razgledih na reko, poslušate zvoke narave in spite udobno v 
              postelji s hotelskimi posteljnimi rjuhami.
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
                Rezerviraj Glamping Šotor
              </Button>
              <Button variant="outline" size="lg">
                Virtualna Oglednja
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlampingSection;