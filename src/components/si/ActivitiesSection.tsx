import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Mountain, TreePine, Camera, Fish, Bike } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Vodne Aktivnosti",
      description: "Plavanje, kajakaštvo in ribolov v kristalno čisti reki",
      includes: ["Izposoja kajakov", "Ribolovna oprema", "Kopalna mesta", "Rečne gume"]
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Planinske Pustolovščine",
      description: "Raziščite slikovite poti z osupljivimi razgledi in opazovanjem divjih živali",
      includes: ["Zemljevidi poti", "Vodeni izleti", "Opazovanje živali", "Foto mesta"]
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Raziskovanje Gozda",
      description: "Odkrijte čudeže našega nedotaknjenega gozdnega ekosistema",
      includes: ["Naravni sprehodi", "Opazovanje ptic", "Identifikacija rastlin", "Gozdne poti"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Foto Izleti",
      description: "Ujemite osupljive pokrajine in divje živali z našimi strokovnimi vodniki",
      includes: ["Strokovni vodniki", "Najboljša foto mesta", "Izleti ob zlati uri", "Nasveti za opremo"]
    },
    {
      icon: <Fish className="h-8 w-8" />,
      title: "Ribolovna Doživetja",
      description: "Preizkusite srečo pri lovu na postrvi in druge lokalne vrste rib",
      includes: ["Izposoja palice", "Vaba in oprema", "Ribolovna dovoljenja", "Čistilna postaja"]
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Gorsko Kolesarjenje",
      description: "Vozite se po gozdnih poteh in poteh ob reki na kakovostnih kolesih",
      includes: ["Izposoja koles", "Čelada in oprema", "Zemljevidi poti", "Komplet za vzdrževanje"]
    }
  ];

  return (
    <section id="activities" className="py-20 bg-forest-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Aktivnosti v Naravi
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Izkoristite svoje bivanje z našo široko paleto aktivnosti v naravi. 
            Od vodnih športov do gozdnih pustolovščin je tu nekaj za vsakogar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-background/95 backdrop-blur-sm shadow-warm border-primary/10">
              <CardHeader className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {activity.icon}
                </div>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {activity.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {activity.includes.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Packages */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">
            Paketi Aktivnosti
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background/95 backdrop-blur-sm shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Dan Pustolovščin</CardTitle>
                <div className="text-2xl font-bold text-foreground">85€</div>
                <CardDescription>na osebo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 3-urni vodeni pohod</li>
                  <li>• Izposoja kajaka (2 uri)</li>
                  <li>• Ribolovna oprema</li>
                  <li>• Malica na poti vključena</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur-sm shadow-warm border-sunset/30">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Družinsko Veselje</CardTitle>
                <div className="text-2xl font-bold text-foreground">60€</div>
                <CardDescription>na osebo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Naravni lov na zaklad</li>
                  <li>• Spuščanje po reki</li>
                  <li>• Mini kolesarski izlet</li>
                  <li>• S'mores komplet vključen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur-sm shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Foto Izlet</CardTitle>
                <div className="text-2xl font-bold text-foreground">120€</div>
                <CardDescription>na osebo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strokovni vodnik</li>
                  <li>• Seja ob zlati uri</li>
                  <li>• Fotografiranje divjih živali</li>
                  <li>• Nasveti za urejanje fotografij</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            Rezerviraj Aktivnosti
          </Button>
          <Button variant="outline" size="lg">
            Prenesi Vodnik Aktivnosti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;