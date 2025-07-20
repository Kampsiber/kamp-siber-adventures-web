import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Mountain, TreePine, Camera, Fish, Bike } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Wasser-Aktivitäten",
      description: "Schwimmen, Kajakfahren und Angeln in kristallklarem Flusswasser",
      includes: ["Kajak-Verleih", "Angel-Ausrüstung", "Schwimmbereiche", "Fluss-Tubes"]
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Wander-Abenteuer",
      description: "Erkunden Sie malerische Wanderwege mit atemberaubenden Aussichten und Wildtierbeobachtung",
      includes: ["Wanderkarten", "Geführte Touren", "Wildtierbeobachtung", "Foto-Spots"]
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Wald-Erkundung",
      description: "Entdecken Sie die Wunder unseres unberührten Wald-Ökosystems",
      includes: ["Naturwanderungen", "Vogelbeobachtung", "Pflanzenbestimmung", "Waldwege"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Fotografie-Touren",
      description: "Fangen Sie atemberaubende Landschaften und Wildtiere mit unseren Experten-Führern ein",
      includes: ["Professionelle Führer", "Beste Foto-Spots", "Goldene Stunde Touren", "Ausrüstungstipps"]
    },
    {
      icon: <Fish className="h-8 w-8" />,
      title: "Angel-Erlebnisse",
      description: "Versuchen Sie Ihr Glück beim Fangen von Forellen und anderen lokalen Fischarten",
      includes: ["Ruten & Rollen Verleih", "Köder & Tackle", "Angel-Genehmigungen", "Reinigungs-Station"]
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Mountainbiking",
      description: "Fahren Sie durch Waldwege und Flusswege auf hochwertigen Fahrrädern",
      includes: ["Fahrrad-Verleih", "Helm & Ausrüstung", "Wanderkarten", "Wartungs-Set"]
    }
  ];

  return (
    <section id="activities" className="py-20 bg-forest-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Outdoor-Aktivitäten
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Machen Sie das Beste aus Ihrem Aufenthalt mit unserem breiten Angebot an Outdoor-Aktivitäten. 
            Von Wassersport bis hin zu Wald-Abenteuern ist für jeden etwas dabei.
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
            Aktivitäts-Pakete
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background/95 backdrop-blur-sm shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Abenteuer-Tag</CardTitle>
                <div className="text-2xl font-bold text-foreground">85€</div>
                <CardDescription>pro Person</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 3-stündige geführte Wanderung</li>
                  <li>• Kajak-Verleih (2 Stunden)</li>
                  <li>• Angel-Ausrüstung</li>
                  <li>• Wandermittagessen inklusive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur-sm shadow-warm border-sunset/30">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Familien-Spaß</CardTitle>
                <div className="text-2xl font-bold text-foreground">60€</div>
                <CardDescription>pro Person</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Natur-Schnitzeljagd</li>
                  <li>• Fluss-Tubing</li>
                  <li>• Mini-Fahrradtour</li>
                  <li>• S'mores Set inklusive</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur-sm shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Fotografie-Tour</CardTitle>
                <div className="text-2xl font-bold text-foreground">120€</div>
                <CardDescription>pro Person</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professioneller Führer</li>
                  <li>• Goldene Stunde Session</li>
                  <li>• Wildtier-Fotografie</li>
                  <li>• Foto-Bearbeitungstipps</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            Aktivitäten Buchen
          </Button>
          <Button variant="outline" size="lg">
            Aktivitäts-Guide Herunterladen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;