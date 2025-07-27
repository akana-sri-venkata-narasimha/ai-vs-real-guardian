import { Button } from "@/components/ui/button";
import { Github, Mail, Globe, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 gradient-ai bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fake Image Detection
            </h3>
            <p className="text-muted-foreground mb-4">
              Advanced AI-powered detection of deepfakes and synthetic images using hybrid CNN + Transformer architecture.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
              <Button variant="outline" size="sm" className="border-secondary/30 hover:border-secondary">
                <Globe className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Project</a></li>
              <li><a href="#tech-stack" className="hover:text-primary transition-colors">Tech Stack</a></li>
              <li><a href="#workflow" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#model" className="hover:text-primary transition-colors">Model Architecture</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Try Demo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-muted-foreground mb-4">
              Interested in collaboration or have questions about the project?
            </p>
            <Button className="gradient-ai shadow-ai hover:shadow-glow transition-all duration-300">
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 Fake Image Detection Project. Built with AI ethics in mind.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-glitch" /> for a safer digital world
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;