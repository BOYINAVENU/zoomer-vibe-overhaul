import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, TrendingUp, Building, Coins } from "lucide-react";

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Community",
      description: "Fair launch on Pump.fun, build initial community",
      icon: <Rocket className="h-8 w-8" />,
      status: "completed",
      statusText: "Live"
    },
    {
      phase: "Phase 2",
      title: "Viral Marketing",
      description: "Meme campaigns, influencer partnerships, social explosion",
      icon: <TrendingUp className="h-8 w-8" />,
      status: "coming",
      statusText: "Coming Soon"
    },
    {
      phase: "Phase 3",
      title: "Exchange Listings",
      description: "Major CEX listings, increased liquidity and accessibility",
      icon: <Building className="h-8 w-8" />,
      status: "coming",
      statusText: "Coming Soon"
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Expansion",
      description: "NFTs, staking, partnerships with major brands",
      icon: <Coins className="h-8 w-8" />,
      status: "coming",
      statusText: "Coming Soon"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            🚀 Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-card ${
                phase.status === 'completed' 
                  ? 'bg-gradient-primary/10 border-primary/40' 
                  : 'bg-card/50 border-primary/20 hover:border-primary/40'
              }`}
            >
              <CardHeader className="text-center pb-4">
                <Badge 
                  variant={phase.status === 'completed' ? 'default' : 'secondary'}
                  className="w-fit mx-auto mb-2"
                >
                  {phase.phase}
                </Badge>
                <div className={`flex justify-center mb-4 ${
                  phase.status === 'completed' ? 'text-primary' : 'text-secondary'
                }`}>
                  {phase.icon}
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {phase.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {phase.description}
                </p>
                <Badge 
                  variant={phase.status === 'completed' ? 'default' : 'outline'}
                  className="w-full justify-center"
                >
                  {phase.statusText}
                </Badge>
              </CardContent>
              
              {phase.status === 'completed' && (
                <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;