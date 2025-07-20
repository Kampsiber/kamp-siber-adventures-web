import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Music, Coffee } from "lucide-react";

const BarSection = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Odprto 24/7",
      description: "Vedno na voljo za vaše osvežilne potrebe"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Družabno Središče",
      description: "Spoznajte druge kampirajuće in delite zgodbe"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Živa Glasba",
      description: "Vikend akustični nastopi ob ognju"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Celodnevni Menu",
      description: "Od jutranje kave do večernih koktajlov"
    }
  ];

  const menuItems = [
    { category: "Craft Piva", items: ["Lokalni IPA", "River Lager", "Forest Porter"] },
    { category: "Posebni Koktajli", items: ["Riverside Mojito", "Campfire Old Fashioned", "Forest Gin & Tonic"] },
    { category: "Vroče Pijače", items: ["Artisan Kava", "Vroča Čokolada", "Zeliščni Čaji"] },
    { category: "Prigrizki", items: ["Trail Mix", "Grilovani Sendviči", "S'mores Komplet"] }
  ];

  return (
    <section id="bar" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bar & Kavarna ob Reki
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sprostite se v naši prijetni baru ob reki. Uživajte v obrtnih pijačah, lokalnih pivih 
            in okusnih prigrizkih ob čudovitih razgledih na reko.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Vaše Kamping Družabno Središče
            </h3>
            <p className="text-muted-foreground">
              Ne glede na to, ali začenjate dan s svežo kavo ali ga končujete z obrtnim pivom 
              ob ognju, naš bar je srce skupnosti Kamp Siber.
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
              Oglejte si Celoten Menu
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
              <CardTitle className="text-xl text-foreground">Obratovalni Časi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Kava & Zajtrk</span>
                <span className="font-medium">6:00 - 11:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Celodnevni Menu</span>
                <span className="font-medium">11:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nočna Storitev</span>
                <span className="font-medium">22:00 - 6:00</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Posebni Dogodki</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Petkov Večer Glasbe</span>
                <span className="font-medium">20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nedeljski Brunch</span>
                <span className="font-medium">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Koktajl Ura</span>
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