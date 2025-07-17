import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Music, Coffee } from "lucide-react";

const BarSection = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Open 24/7",
      description: "Always available for your refreshment needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Hub",
      description: "Meet fellow campers and share stories"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Live Music",
      description: "Weekend acoustic sessions by the fire"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "All Day Menu",
      description: "From morning coffee to evening cocktails"
    }
  ];

  const menuItems = [
    { category: "Craft Beers", items: ["Local IPA", "River Lager", "Forest Porter"] },
    { category: "Signature Cocktails", items: ["Riverside Mojito", "Campfire Old Fashioned", "Forest Gin & Tonic"] },
    { category: "Hot Beverages", items: ["Artisan Coffee", "Hot Chocolate", "Herbal Teas"] },
    { category: "Snacks", items: ["Trail Mix", "Grilled Sandwiches", "S'mores Kit"] }
  ];

  return (
    <section id="bar" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Riverside Bar & Café
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relax and unwind at our cozy riverside bar. Enjoy craft beverages, local brews, 
            and delicious snacks while taking in the beautiful river views.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Your Campsite Social Hub
            </h3>
            <p className="text-muted-foreground">
              Whether you're starting your day with fresh coffee or ending it with a craft beer 
              by the fire, our bar is the heart of Kamp Siber's community.
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
              View Full Menu
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
              <CardTitle className="text-xl text-foreground">Operating Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coffee & Breakfast</span>
                <span className="font-medium">6:00 AM - 11:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">All Day Menu</span>
                <span className="font-medium">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Late Night Service</span>
                <span className="font-medium">10:00 PM - 6:00 AM</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Special Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Friday Night Music</span>
                <span className="font-medium">8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday Brunch</span>
                <span className="font-medium">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cocktail Hour</span>
                <span className="font-medium">5:00 PM - 7:00 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BarSection;