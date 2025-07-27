import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Code2, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import modelImage from "@/assets/model-architecture.jpg";

const ModelArchitecture = () => {
  const [showCode, setShowCode] = useState(false);
  const { toast } = useToast();

  const codeSnippet = `import torch
import torch.nn as nn
from transformers import ViTModel, ViTConfig

class HybridDetectionModel(nn.Module):
    def __init__(self, num_classes=2):
        super(HybridDetectionModel, self).__init__()
        
        # CNN Feature Extractor
        self.cnn_backbone = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(64, 128, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(128, 256, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.AdaptiveAvgPool2d((14, 14))
        )
        
        # Vision Transformer
        config = ViTConfig(
            image_size=224,
            patch_size=16,
            num_channels=256,
            hidden_size=768,
            num_hidden_layers=12,
            num_attention_heads=12
        )
        self.transformer = ViTModel(config)
        
        # Classification Head
        self.classifier = nn.Sequential(
            nn.Dropout(0.3),
            nn.Linear(768, 256),
            nn.ReLU(inplace=True),
            nn.Dropout(0.2),
            nn.Linear(256, num_classes)
        )
        
    def forward(self, x):
        # CNN feature extraction
        cnn_features = self.cnn_backbone(x)
        
        # Reshape for transformer
        b, c, h, w = cnn_features.shape
        cnn_features = cnn_features.view(b, c, h*w).permute(0, 2, 1)
        
        # Transformer processing
        transformer_output = self.transformer(
            pixel_values=cnn_features
        ).last_hidden_state
        
        # Global average pooling + classification
        features = transformer_output.mean(dim=1)
        output = self.classifier(features)
        
        return output`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    toast({
      title: "Code copied!",
      description: "Model architecture code copied to clipboard.",
    });
  };

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Model <span className="gradient-ai bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hybrid CNN + Transformer architecture for superior detection accuracy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Architecture Visualization */}
          <div className="space-y-6">
            <Card className="gradient-card border-primary/20 p-6 shadow-ai">
              <img 
                src={modelImage} 
                alt="Model Architecture"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Architecture Components</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/20 text-primary">CNN</Badge>
                  <span className="text-sm text-muted-foreground">Feature extraction from raw images</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-secondary/20 text-secondary">Transformer</Badge>
                  <span className="text-sm text-muted-foreground">Attention-based pattern recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-accent/20 text-accent">Classifier</Badge>
                  <span className="text-sm text-muted-foreground">Binary classification (Real/Fake)</span>
                </div>
              </div>
            </Card>

            <Card className="gradient-card border-secondary/20 p-6 shadow-ai">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Multi-scale feature extraction
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Self-attention mechanisms
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Adaptive pooling strategies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  Dropout regularization
                </li>
              </ul>
            </Card>
          </div>

          {/* Code Section */}
          <div className="space-y-6">
            <Card className="gradient-card border-primary/20 shadow-ai">
              <div className="p-6 border-b border-primary/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    PyTorch Implementation
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowCode(!showCode)}
                      className="border-primary/30 hover:border-primary"
                    >
                      {showCode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {showCode ? "Hide" : "Show"} Code
                    </Button>
                    {showCode && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyCode}
                        className="border-secondary/30 hover:border-secondary"
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              {showCode && (
                <div className="p-6">
                  <pre className="text-sm bg-muted/30 p-4 rounded-lg overflow-x-auto">
                    <code className="text-foreground">{codeSnippet}</code>
                  </pre>
                </div>
              )}

              {!showCode && (
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Our hybrid model combines the spatial feature extraction capabilities of CNNs 
                    with the global attention mechanisms of Vision Transformers.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">256</div>
                      <div className="text-sm text-muted-foreground">CNN Channels</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/10 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">768</div>
                      <div className="text-sm text-muted-foreground">Hidden Size</div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelArchitecture;