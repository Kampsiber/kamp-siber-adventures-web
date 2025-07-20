import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Music, Coffee } from "lucide-react";

const BarSection = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Geöffnet",
      description: "Immer verfügbar für Ihre Erfrischungsbedürfnisse"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sozialer Treffpunkt",
      description: "Treffen Sie andere Camper und teilen Sie Geschichten"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Live-Musik",
      description: "Wochenend-Akustiksessions am Lagerfeuer"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Ganztags-Menü",
      description: "Vom Morgenkaffee bis zu Abendcocktails"
    }
  ];

  const menuItems = [
    { category: "Craft-Biere", items: ["Lokales IPA", "River Lager", "Forest Porter"] },
    { category: "Signature Cocktails", items: ["Riverside Mojito", "Campfire Old Fashioned", "Forest Gin & Tonic"] },
    { category: "Heißgetränke", items: ["Artisan-Kaffee", "Heiße Schokolade", "Kräutertees"] },
    { category: "Snacks", items: ["Trail Mix", "Gegrillte Sandwiches", "S'mores Set"] }
  ];

  return (
    <section id="bar" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Fluss-Bar & Café
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entspannen Sie in unserer gemütlichen Fluss-Bar. Genießen Sie Craft-Getränke, lokale Biere 
            und köstliche Snacks mit wunderschönem Flussblick.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ihr Campingplatz-Treffpunkt
            </h3>
            <p className="text-muted-foreground">
              Ob Sie Ihren Tag mit frischem Kaffee beginnen oder ihn mit einem Craft-Bier 
              am Feuer beenden, unsere Bar ist das Herz der Kamp Siber Gemeinschaft.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-accent mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="nature" size="lg" className="w-full">
              Vollständige Speisekarte
            </Button>
          </div>

          {/* Menu Preview */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {menuItems.map((section, index) => (
              <Card key={index} className="shadow-natural">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hours & Events */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Öffnungszeiten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Kaffee & Frühstück</span>
                <span className="font-medium">6:00 - 11:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ganztags-Menü</span>
                <span className="font-medium">11:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nachtservice</span>
                <span className="font-medium">22:00 - 6:00</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Besondere Veranstaltungen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Freitag Abend Musik</span>
                <span className="font-medium">20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sonntags Brunch</span>
                <span className="font-medium">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cocktail-Stunde</span>
                <span className="font-medium">17:00 - 19:00</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BarSection;