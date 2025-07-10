import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Wallet, Coins, ShoppingCart } from "lucide-react";

const HowToBuySection = () => {
  const steps = [
    {
      step: "1️⃣",
      title: "Install Phantom",
      description: "Download and set up your Phantom wallet for Solana.",
      icon: <Wallet className="h-8 w-8 text-primary" />,
      buttonText: "Get Phantom",
      buttonLink: "https://phantom.app/"
    },
    {
      step: "2️⃣",
      title: "Load SOL",
      description: "Add Solana (SOL) to your wallet from any exchange.",
      icon: <Coins className="h-8 w-8 text-secondary" />,
      buttonText: "Buy SOL",
      buttonLink: "#"
    },
    {
      step: "3️⃣",
      title: "Buy on Pump.fun",
      description: "Swap your SOL for $ZDOGE on Pump.fun.",
      icon: <ShoppingCart className="h-8 w-8 text-accent" />,
      buttonText: "Buy Now",
      buttonLink: "https://pump.fun/HU9EdSmFhJbiAg5xWyAEAZmsM9ZWRNtjtv7viPXmpump"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            🛒 How to Buy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-3xl font-bold text-primary mb-2">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4 relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                <Button
                  variant="glass"
                  asChild
                  className="w-full"
                >
                  <a 
                    href={step.buttonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {step.buttonText}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;