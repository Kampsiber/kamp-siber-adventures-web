import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Mountain, TreePine, Camera, Fish, Bike } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Water Activities",
      description: "Swimming, kayaking, and fishing in crystal clear river waters",
      includes: ["Kayak rentals", "Fishing equipment", "Swimming areas", "River tubes"]
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Hiking Adventures",
      description: "Explore scenic trails with breathtaking views and wildlife spotting",
      includes: ["Trail maps", "Guided tours", "Wildlife viewing", "Photo spots"]
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Forest Exploration",
      description: "Discover the wonders of our pristine forest ecosystem",
      includes: ["Nature walks", "Bird watching", "Plant identification", "Forest trails"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography Tours",
      description: "Capture stunning landscapes and wildlife with our expert guides",
      includes: ["Professional guides", "Best photo spots", "Golden hour tours", "Equipment tips"]
    },
    {
      icon: <Fish className="h-8 w-8" />,
      title: "Fishing Experiences",
      description: "Try your luck at catching trout and other local fish species",
      includes: ["Rod & reel rental", "Bait & tackle", "Fishing permits", "Cleaning station"]
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Mountain Biking",
      description: "Ride through forest trails and riverside paths on quality bikes",
      includes: ["Bike rentals", "Helmet & gear", "Trail maps", "Maintenance kit"]
    }
  ];

  return (
    <section id="activities" className="py-20 bg-forest-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Outdoor Activities
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Make the most of your stay with our wide range of outdoor activities. 
            From water sports to forest adventures, there's something for everyone.
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
            Activity Packages
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background/95 backdrop-blur-sm shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Adventure Day</CardTitle>
                <div className="text-2xl font-bold text-foreground">$85</div>
                <CardDescription>per person</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 3-hour guided hike</li>
                  <li>• Kayak rental (2 hours)</li>
                  <li>• Fishing equipment</li>
                  <li>• Trail lunch included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur-sm shadow-warm border-sunset/30">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Family Fun</CardTitle>
                <div className="text-2xl font-bold text-foreground">$60</div>
                <CardDescription>per person</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nature scavenger hunt</li>
                  <li>• River tubing</li>
                  <li>• Mini bike tour</li>
                  <li>• S'mores kit included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur-sm shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Photography Tour</CardTitle>
                <div className="text-2xl font-bold text-foreground">$120</div>
                <CardDescription>per person</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professional guide</li>
                  <li>• Golden hour session</li>
                  <li>• Wildlife photography</li>
                  <li>• Photo editing tips</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            Book Activities
          </Button>
          <Button variant="outline" size="lg">
            Download Activity Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;