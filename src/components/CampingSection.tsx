import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tent, Waves, TreePine, Flame } from "lucide-react";

const CampingSection = () => {
  const features = [
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Riverside Access",
      description: "Direct access to crystal clear river waters for swimming and fishing"
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Forest Setting",
      description: "Surrounded by lush forest with hiking trails and wildlife viewing"
    },
    {
      icon: <Flame className="h-6 w-6" />,
      title: "Fire Pits",
      description: "Individual fire pits for each site with complimentary firewood"
    },
    {
      icon: <Tent className="h-6 w-6" />,
      title: "Premium Sites",
      description: "Level, spacious sites with picnic tables and water access"
    }
  ];

  return (
    <section id="camping" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Riverside Camping
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience authentic camping with modern amenities along our pristine riverbank. 
            Perfect for families, couples, and solo adventurers seeking nature's tranquility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Wake Up to Nature's Symphony
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our riverside camping sites offer the perfect blend of wilderness adventure and 
              comfort. Fall asleep to the gentle sounds of flowing water and wake up to 
              breathtaking sunrise views over the river.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="nature" size="lg">
                Reserve Camping Site
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    View Site Map
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                  <DialogHeader>
                    <DialogTitle>Campsite Map</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full h-[60vh] overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/d43b8665-ee8d-4633-8322-b8ef4b1f4e0f.png" 
                      alt="Aerial view of the campsite showing buildings, camping areas, and access roads"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-4">
            <Card className="shadow-natural hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Early Season
                  <span className="text-2xl font-bold text-primary">€15</span>
                </CardTitle>
                <CardDescription>per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Riverside location</li>
                  <li>• Fire pit & picnic table</li>
                  <li>• Water access nearby</li>
                  <li>• Up to 6 people</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-natural border-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Main Season
                  <span className="text-2xl font-bold text-primary">€17.50</span>
                </CardTitle>
                <CardDescription>per night</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Prime riverside frontage</li>
                  <li>• Large fire pit & premium table</li>
                  <li>• Private water access</li>
                  <li>• Electrical hookup</li>
                  <li>• Up to 8 people</li>
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