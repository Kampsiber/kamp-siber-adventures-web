import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Waves, TreePine, Flame, Tent } from "lucide-react";

const CampingSection = () => {
  const features = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Dostop do Reke",
      description: "Direkten dostop do čiste reke Soče za plavanje in ribarjenje"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Gozdno Okolje",
      description: "Obkroženi z nedotaknjeno naravo in stoletnimi drevesi"
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Mesta za Ogenj",
      description: "Varna mesta za ogenj za večerne družbe in kuhanje"
    },
    {
      icon: <Tent className="h-8 w-8" />,
      title: "Prostorni Parceli",
      description: "Veliki parceli z elektro priključki in senčnimi mesti"
    }
  ];

  return (
    <section id="camping" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kampiranje ob Reki
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Doživite pravi stik z naravo na naših prostornih parcelah ob reki. 
            Popolno za družine, pare in skupine pustolovcev.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Zakaj Izbrati Naš Kamp?
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
                Rezerviraj Parcelo
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    Poglej Načrt Kampa
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle>Načrt Kampa Siber</DialogTitle>
                    <DialogDescription>
                      Pregled vseh parcel in infrastrukture kampa
                    </DialogDescription>
                  </DialogHeader>
                  <div className="p-6 pt-0">
                    <img 
                      src="/lovable-uploads/d43b8665-ee8d-4633-8322-b8ef4b1f4e0f.png" 
                      alt="Načrt Kampa Siber" 
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
                  Zgodnja Sezona
                  <span className="text-2xl font-bold text-primary">25€</span>
                </CardTitle>
                <CardDescription>na noč • maj - junij</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Parcela do 6 oseb</li>
                  <li>• Elektrika 16A</li>
                  <li>• Dostop do sanitarij</li>
                  <li>• Brezplačen WiFi</li>
                  <li>• Parkirno mesto</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-natural hover:shadow-warm transition-shadow border-sunset/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Glavna Sezona
                  <span className="text-2xl font-bold text-primary">35€</span>
                </CardTitle>
                <CardDescription>na noč • julij - september</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Parcela do 6 oseb</li>
                  <li>• Elektrika 16A</li>
                  <li>• Premium sanitarije</li>
                  <li>• Brezplačen WiFi</li>
                  <li>• Parkirno mesto</li>
                  <li>• Dostop do bara</li>
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