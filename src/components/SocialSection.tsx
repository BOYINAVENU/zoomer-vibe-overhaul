import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, MessageCircle } from "lucide-react";

const SocialSection = () => {
  const socials = [
    {
      title: "Follow on X",
      description: "Stay updated with the latest $ZDOGE news and memes.",
      icon: <Twitter className="h-8 w-8 text-primary" />,
      buttonText: "Follow @zommerdogecoin",
      buttonLink: "https://x.com/zommerdogecoin?s=21",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Join Telegram",
      description: "Chat with the community and get real-time updates.",
      icon: <MessageCircle className="h-8 w-8 text-secondary" />,
      buttonText: "Join Group",
      buttonLink: "https://t.me/+e7-t4jUtajJlN2M1",
      gradient: "from-secondary/20 to-secondary/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            🌐 Join the Movement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${social.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {social.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4 relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {social.description}
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <a 
                    href={social.buttonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {social.buttonText}
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

export default SocialSection;