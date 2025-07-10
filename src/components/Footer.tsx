import { Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              🕶️ ZoomerDoge
            </h3>
            <p className="text-muted-foreground">
              The meme coin revolution starts with Gen Z vibes
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/20"
            >
              <a href="https://x.com/zommerdogecoin?s=21" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-secondary/20"
            >
              <a href="https://t.me/+e7-t4jUtajJlN2M1" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © 2024 ZoomerDoge. Built for the culture, by the community.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Remember: This is a meme coin. Only invest what you can afford to lose. DYOR.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;