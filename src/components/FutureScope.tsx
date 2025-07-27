import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Clock, Shield, AlertCircle, Users } from "lucide-react";

const FutureScope = () => {
  const useCases = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Social Media Verification",
      description: "Real-time detection of deepfakes on platforms like Twitter, Facebook, and Instagram",
      status: "In Development",
      color: "from-primary to-primary-glow"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "News & Journalism",
      description: "Helping news organizations verify the authenticity of submitted visual content",
      status: "Ready",
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Detection",
      description: "Browser extensions and mobile apps for instant image verification",
      status: "Planned",
      color: "from-accent to-primary"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Integration",
      description: "On-device detection for privacy-focused verification without cloud processing",
      status: "Research",
      color: "from-glitch to-secondary"
    }
  ];

  const ethicalPoints = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Transparency",
      description: "Open-source methodology and clear documentation of detection capabilities"
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-secondary" />,
      title: "Bias Mitigation", 
      description: "Continuous testing across diverse demographics and image types"
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Responsible Deployment",
      description: "Preventing misuse while maximizing beneficial applications"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-primary/20 text-primary";
      case "In Development": return "bg-secondary/20 text-secondary";
      case "Planned": return "bg-accent/20 text-accent";
      case "Research": return "bg-glitch/20 text-glitch";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Future Scope & <span className="gradient-ai bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ethics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expanding detection capabilities while maintaining ethical standards
          </p>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Applications & Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="gradient-card border-primary/20 p-6 shadow-ai hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${useCase.color} group-hover:scale-110 transition-transform`}>
                    <div className="text-background">
                      {useCase.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold">{useCase.title}</h4>
                      <Badge className={getStatusColor(useCase.status)}>
                        {useCase.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ethical Considerations */}
        <div className="mb-16">
          <Card className="gradient-card border-primary/20 p-8 shadow-ai">
            <h3 className="text-2xl font-semibold mb-8 text-center">Ethical AI Principles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {ethicalPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-muted/30">
                      {point.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{point.title}</h4>
                  <p className="text-muted-foreground text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Technical Roadmap */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Roadmap</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="gradient-card border-primary/20 p-6 shadow-ai">
              <h4 className="text-lg font-semibold mb-4 text-primary">Phase 1: Optimization</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Model compression for mobile</li>
                <li>• Edge computing deployment</li>
                <li>• Real-time inference optimization</li>
                <li>• API development</li>
              </ul>
            </Card>

            <Card className="gradient-card border-secondary/20 p-6 shadow-ai">
              <h4 className="text-lg font-semibold mb-4 text-secondary">Phase 2: Integration</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Browser extension development</li>
                <li>• Social media platform APIs</li>
                <li>• News organization partnerships</li>
                <li>• Mobile app release</li>
              </ul>
            </Card>

            <Card className="gradient-card border-accent/20 p-6 shadow-ai">
              <h4 className="text-lg font-semibold mb-4 text-accent">Phase 3: Research</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Video deepfake detection</li>
                <li>• Audio synthesis detection</li>
                <li>• Multi-modal analysis</li>
                <li>• Adversarial robustness</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;