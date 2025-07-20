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
      details: ["+386 (5) 123-KAMP", "Na voljo 24/7"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-pošta",
      details: ["info@kampsiber.com", "Hiter odziv zagotovljen"]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Lokacija",
      details: ["123 Riverside Drive", "Tolmin, Slovenija"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Prijava",
      details: ["15:00 - 20:00", "Pozni prihodi dobrodošli"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Stopite v Stik
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pripravljeni za rezervacijo pustolovščine ali imate vprašanja? Tu smo, da pomagamo narediti 
            vaše bivanje v Kamp Siber nepozabno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-natural">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Pošljite nam Sporočilo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ime</Label>
                  <Input id="firstName" placeholder="Janez" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Priimek</Label>
                  <Input id="lastName" placeholder="Novak" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-pošta</Label>
                <Input id="email" type="email" placeholder="janez@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" placeholder="+386 (40) 123-456" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dates">Želeni Datumi</Label>
                <Input id="dates" placeholder="Prijava do Odjava" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accommodation">Tip Nastanitve</Label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option value="">Izberite nastanitev</option>
                  <option value="camping">Standardno Kampiranje</option>
                  <option value="premium-camping">Premium Kampiranje</option>
                  <option value="riverside-pod">Glamping Šotor ob Reki</option>
                  <option value="family-pod">Družinski Glamping Šotor</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Sporočilo</Label>
                <Textarea 
                  id="message" 
                  placeholder="Povejte nam o načrtovanem bivanju, posebnih zahtevah ali vprašanjih..."
                  rows={4}
                />
              </div>

              <Button variant="nature" size="lg" className="w-full">
                Pošlji Sporočilo
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
                <CardTitle className="text-xl text-foreground">Pripravljeni za Rezervacijo?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Preskočite obrazec in rezervirajte neposredno z našo rezervacijsko ekipo za takojšnjo potrditev.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" className="flex-1">
                    Pokličite za Rezervacijo
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Spletna Rezervacija
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