import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle } from "lucide-react";
import zoomerDogeHero from "@/assets/zoomer-doge-hero.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={zoomerDogeHero} alt="ZoomerDoge" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              🕶️ ZoomerDoge
            </h1>
            <p className="text-xs text-muted-foreground">$ZDOGE</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a href="https://x.com/zommerdogecoin?s=21" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a href="https://t.me/+e7-t4jUtajJlN2M1" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;