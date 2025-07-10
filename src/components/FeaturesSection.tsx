import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-secondary" />,
      title: "Shiba with Zoomer Energy",
      description: "Built for the Gen Z crypto generation with unstoppable vibes and meme power."
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Community-Powered",
      description: "Driven by an active community of diamond-handed holders and meme creators."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Fair Launch",
      description: "Launched fairly on Pump.fun with no team allocation or hidden premines."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            ✅ Why $ZDOGE?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;