import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Brain, Code, Zap } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "Deep Learning",
      icon: <Brain className="h-8 w-8" />,
      items: ["PyTorch", "Transformers", "OpenCV", "TensorBoard"],
      color: "from-primary to-primary-glow"
    },
    {
      category: "Data & Preprocessing", 
      icon: <Database className="h-8 w-8" />,
      items: ["Kaggle Deepfake", "Midjourney Dataset", "DALL·E Images", "Sora Samples"],
      color: "from-secondary to-secondary-glow"
    },
    {
      category: "Development",
      icon: <Code className="h-8 w-8" />,
      items: ["Python", "Jupyter", "HuggingFace", "Scikit-learn"],
      color: "from-accent to-muted-foreground"
    },
    {
      category: "Performance",
      icon: <Zap className="h-8 w-8" />,
      items: ["CUDA", "Mixed Precision", "Model Optimization", "Real-time Inference"],
      color: "from-glitch to-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech Stack & <span className="gradient-ai bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Data</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge AI frameworks and trained on diverse datasets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="gradient-card border-primary/20 p-6 shadow-ai hover:shadow-glow transition-all duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-background">
                  {tech.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, itemIndex) => (
                  <Badge 
                    key={itemIndex} 
                    variant="secondary" 
                    className="bg-muted/50 hover:bg-primary/20 transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="gradient-card border-primary/20 p-8 max-w-4xl mx-auto shadow-ai">
            <h3 className="text-2xl font-semibold mb-4">Dataset Composition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-primary mb-2">Real Images</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Professional photography</li>
                  <li>• Social media content</li>
                  <li>• News & journalism</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-secondary mb-2">AI-Generated</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Deepfake portraits</li>
                  <li>• Midjourney artwork</li>
                  <li>• DALL·E compositions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;