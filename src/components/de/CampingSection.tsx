import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Waves, TreePine, Flame, Tent } from "lucide-react";

const CampingSection = () => {
  const features = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Fluss-Zugang",
      description: "Direkter Zugang zum kristallklaren Soča-Fluss zum Schwimmen und Angeln"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Wald-Umgebung",
      description: "Umgeben von unberührter Natur und jahrhundertealten Bäumen"
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Feuerstellen",
      description: "Sichere Feuerstellen für Abendgesellschaften und Kochen"
    },
    {
      icon: <Tent className="h-8 w-8" />,
      title: "Geräumige Stellplätze",
      description: "Große Stellplätze mit Stromanschluss und schattigen Plätzen"
    }
  ];

  return (
    <section id="camping" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Camping am Fluss
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erleben Sie echten Kontakt mit der Natur auf unseren geräumigen Stellplätzen am Fluss. 
            Perfekt für Familien, Paare und Abenteuergruppen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Warum Unser Campingplatz?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="nature" size="lg">
                Stellplatz Reservieren
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    Lageplan Ansehen
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle>Kamp Siber Lageplan</DialogTitle>
                    <DialogDescription>
                      Übersicht aller Stellplätze und Campinginfrastruktur
                    </DialogDescription>
                  </DialogHeader>
                  <div className="p-6 pt-0">
                    <img 
                      src="/lovable-uploads/d43b8665-ee8d-4633-8322-b8ef4b1f4e0f.png" 
                      alt="Kamp Siber Lageplan" 
                      className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-6">
            <Card className="shadow-natural hover:shadow-warm transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Frühe Saison
                  <span className="text-2xl font-bold text-primary">25€</span>
                </CardTitle>
                <CardDescription>pro Nacht • Mai - Juni</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Stellplatz für bis zu 6 Personen</li>
                  <li>• Strom 16A</li>
                  <li>• Zugang zu Sanitäranlagen</li>
                  <li>• Kostenloses WiFi</li>
                  <li>• Parkplatz</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-natural hover:shadow-warm transition-shadow border-sunset/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Hauptsaison
                  <span className="text-2xl font-bold text-primary">35€</span>
                </CardTitle>
                <CardDescription>pro Nacht • Juli - September</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Stellplatz für bis zu 6 Personen</li>
                  <li>• Strom 16A</li>
                  <li>• Premium Sanitäranlagen</li>
                  <li>• Kostenloses WiFi</li>
                  <li>• Parkplatz</li>
                  <li>• Bar-Zugang</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampingSection;