import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";
import zoomerDogeHero from "@/assets/zoomer-doge-hero.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,transparent_50%)] opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 relative">
            <div className="w-64 h-64 mx-auto relative">
              <img 
                src={zoomerDogeHero} 
                alt="ZoomerDoge Hero" 
                className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-glow animate-pulse"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced text instead of rectangle */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-hero/20 backdrop-blur-sm border border-primary/30 shadow-card">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-hero bg-clip-text animate-pulse">
              🔮 Airdrops, contests & meme battles coming soon. Stay tuned.
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
            🕶️ ZoomerDoge
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              The Shiba Inu with shades. Born to zoom. Made for Gen Z.
            </p>
            <p className="text-lg md:text-xl font-semibold text-secondary">
              🚀 $ZDOGE is the meme coin Solana's been waiting for.
            </p>
            <p className="text-lg text-accent">
              Early. Viral. Vibes only.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg px-8 py-4 h-14"
            >
              <a href="https://pump.fun/HU9EdSmFhJbiAg5xWyAEAZmsM9ZWRNtjtv7viPXmpump" target="_blank" rel="noopener noreferrer">
                🛒 Buy $ZDOGE Now <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="neon"
              size="lg"
              asChild
              className="text-lg px-8 py-4 h-14"
            >
              <a href="https://pump.fun/HU9EdSmFhJbiAg5xWyAEAZmsM9ZWRNtjtv7viPXmpump" target="_blank" rel="noopener noreferrer">
                📈 View Chart <TrendingUp className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;