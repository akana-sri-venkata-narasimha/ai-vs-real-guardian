import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ImageIcon, Cpu, BarChart3 } from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      title: "Preprocessing",
      icon: <ImageIcon className="h-8 w-8" />,
      description: "Image normalization, augmentation, and feature extraction preparation",
      details: ["Resize & normalize", "Data augmentation", "Noise reduction", "Format standardization"],
      color: "from-primary to-primary-glow"
    },
    {
      title: "Training",
      icon: <Cpu className="h-8 w-8" />,
      description: "Hybrid CNN + Transformer model training with multi-stage optimization",
      details: ["CNN feature extraction", "Transformer attention", "Multi-head processing", "Gradient optimization"],
      color: "from-secondary to-secondary-glow"
    },
    {
      title: "Evaluation",
      icon: <BarChart3 className="h-8 w-8" />,
      description: "Performance metrics and validation on test datasets",
      details: ["Accuracy: 94.2%", "F1-Score: 0.923", "AUC: 0.967", "Precision: 92.8%"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-ai bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our detection pipeline follows a systematic approach for optimal accuracy
          </p>
        </div>

        <div className="relative">
          {/* Workflow Steps */}
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="gradient-card border-primary/20 p-8 shadow-ai hover:shadow-glow transition-all duration-300 group h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-background">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <Badge 
                        key={detailIndex} 
                        variant="secondary" 
                        className="bg-muted/30 hover:bg-primary/20 transition-colors mr-2 mb-2"
                      >
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </Card>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Summary */}
        <div className="mt-16">
          <Card className="gradient-card border-primary/20 p-8 shadow-ai">
            <h3 className="text-2xl font-semibold text-center mb-8">Performance Metrics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Accuracy", value: "94.2%", color: "text-primary" },
                { label: "F1-Score", value: "0.923", color: "text-secondary" },
                { label: "AUC-ROC", value: "0.967", color: "text-accent" },
                { label: "Precision", value: "92.8%", color: "text-primary-glow" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Workflow;