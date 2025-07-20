import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      details: ["+386 (5) 123-KAMP", "24/7 verfügbar"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail",
      details: ["info@kampsiber.com", "Schnelle Antwort garantiert"]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Standort",
      details: ["123 Riverside Drive", "Tolmin, Slowenien"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Check-in",
      details: ["15:00 - 20:00", "Späte Ankünfte willkommen"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bereit, Ihr Abenteuer zu buchen oder haben Sie Fragen? Wir sind hier, um Ihren 
            Aufenthalt im Kamp Siber unvergesslich zu machen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-natural">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Senden Sie uns eine Nachricht</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" placeholder="Hans" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" placeholder="Müller" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" placeholder="hans@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" placeholder="+49 (30) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dates">Gewünschte Termine</Label>
                <Input id="dates" placeholder="Check-in bis Check-out" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accommodation">Unterkunftstyp</Label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option value="">Unterkunft auswählen</option>
                  <option value="camping">Standard Camping</option>
                  <option value="premium-camping">Premium Camping</option>
                  <option value="riverside-pod">Fluss Glamping Pod</option>
                  <option value="family-pod">Familien Glamping Pod</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Erzählen Sie uns über Ihren geplanten Aufenthalt, besondere Wünsche oder Fragen..."
                  rows={4}
                />
              </div>

              <Button variant="nature" size="lg" className="w-full">
                Nachricht Senden
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-natural">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Booking */}
            <Card className="shadow-warm border-sunset/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Bereit zu Buchen?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Überspringen Sie das Formular und buchen Sie direkt mit unserem Reservierungsteam für sofortige Bestätigung.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" className="flex-1">
                    Anrufen zum Buchen
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Online-Buchung
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;