import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Workflow from "@/components/Workflow";
import ModelArchitecture from "@/components/ModelArchitecture";
import FutureScope from "@/components/FutureScope";
import VisualGallery from "@/components/VisualGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-dark">
      <Hero />
      <About />
      <TechStack />
      <Workflow />
      <ModelArchitecture />
      <VisualGallery />
      <FutureScope />
      <Footer />
    </div>
  );
};

export default Index;
