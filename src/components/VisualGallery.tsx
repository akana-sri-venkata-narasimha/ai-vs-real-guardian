import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Eye, RotateCcw } from "lucide-react";
import realVsFakeImage from "@/assets/real-vs-fake.jpg";

const VisualGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const imageComparisons = [
    {
      id: 1,
      title: "Portrait Comparison",
      real: realVsFakeImage,
      fake: realVsFakeImage,
      confidence: 94.2,
      artifacts: ["Skin texture inconsistency", "Eye reflection mismatch", "Hair detail anomalies"]
    },
    {
      id: 2, 
      title: "Landscape Scene",
      real: realVsFakeImage,
      fake: realVsFakeImage,
      confidence: 87.6,
      artifacts: ["Shadow direction errors", "Lighting inconsistency", "Texture repetition patterns"]
    },
    {
      id: 3,
      title: "Object Detection",
      real: realVsFakeImage,
      fake: realVsFakeImage,
      confidence: 91.8,
      artifacts: ["Edge artifacts", "Color bleeding", "Compression anomalies"]
    }
  ];

  const resetDemo = () => {
    setSelectedImage(null);
    setShowResults(false);
  };

  const analyzeImage = (imageId: number) => {
    setSelectedImage(imageId);
    setShowResults(true);
  };

  return (
    <section id="demo" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visual <span className="gradient-ai bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive examples showing real vs AI-generated image detection
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {imageComparisons.map((comparison) => (
            <Card key={comparison.id} className="gradient-card border-primary/20 shadow-ai hover:shadow-glow transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={comparison.real} 
                      alt="Real" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Real
                      </Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={comparison.fake} 
                      alt="AI Generated" 
                      className={`w-full h-48 object-cover ${selectedImage === comparison.id ? 'glitch-effect' : ''}`}
                      data-text="FAKE"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-glitch/90 text-white">
                        <XCircle className="h-3 w-3 mr-1" />
                        Fake
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">{comparison.title}</h3>
                
                {selectedImage === comparison.id && showResults ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Detection Confidence</span>
                      <Badge className="bg-primary/20 text-primary">
                        {comparison.confidence}%
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Detected Artifacts:</h4>
                      <ul className="space-y-1">
                        {comparison.artifacts.map((artifact, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-glitch rounded-full"></div>
                            {artifact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={() => analyzeImage(comparison.id)}
                    className="w-full gradient-ai shadow-ai hover:shadow-glow transition-all duration-300"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Analyze Image
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {showResults && (
          <div className="text-center">
            <Button 
              onClick={resetDemo}
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Demo
            </Button>
          </div>
        )}

        {/* Detection Explanation */}
        <Card className="gradient-card border-primary/20 p-8 shadow-ai mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">How Detection Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Pixel Analysis</h4>
              <p className="text-sm text-muted-foreground">
                CNN layers extract low-level features and detect compression artifacts
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Pattern Recognition</h4>
              <p className="text-sm text-muted-foreground">
                Transformer attention identifies inconsistencies across image regions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Classification</h4>
              <p className="text-sm text-muted-foreground">
                Final layers combine features to output confidence scores
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VisualGallery;