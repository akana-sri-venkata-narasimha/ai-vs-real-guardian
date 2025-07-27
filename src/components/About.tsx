import { Card } from "@/components/ui/card";
import { Shield, Eye, AlertTriangle } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About the <span className="gradient-ai bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In an era where AI-generated content is becoming increasingly sophisticated, 
            our hybrid CNN + Transformer model helps distinguish between authentic and synthetic images.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="gradient-card border-primary/20 p-8 text-center shadow-ai hover:shadow-glow transition-all duration-300">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Security & Trust</h3>
            <p className="text-muted-foreground">
              Protecting journalism, legal evidence, and social media from deepfake manipulation.
            </p>
          </Card>

          <Card className="gradient-card border-secondary/20 p-8 text-center shadow-ai hover:shadow-glow transition-all duration-300">
            <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Advanced Detection</h3>
            <p className="text-muted-foreground">
              Hybrid architecture combining CNN feature extraction with Transformer attention mechanisms.
            </p>
          </Card>

          <Card className="gradient-card border-glitch/20 p-8 text-center shadow-ai hover:shadow-glow transition-all duration-300">
            <AlertTriangle className="h-12 w-12 text-glitch mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Ethical AI</h3>
            <p className="text-muted-foreground">
              Promoting transparency and preventing misuse while advancing detection capabilities.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
            Our model is trained on diverse datasets including Kaggle Deepfake, Midjourney, DALL·E, and Sora-generated images, 
            achieving high accuracy across multiple AI generation techniques. The system focuses on identifying subtle 
            artifacts and inconsistencies that human eyes might miss.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;