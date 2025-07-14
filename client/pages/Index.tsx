import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Souheila Said Fashion Model"
            className="w-full h-full object-cover object-center"
            onLoad={() => setIsLoaded(true)}
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text Overlay */}
        <div
          className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-hero font-light mb-6 leading-none">
            Souheila Said
          </h1>
          <p className="text-subhero max-w-2xl mx-auto leading-relaxed">
            Fashion model based in Brussels.
            <br />
            Available for editorial and runway.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-px h-12 bg-white/60 mx-auto mb-2" />
            <div className="w-1 h-1 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Brief Introduction Section */}
      <section className="py-24 bg-background">
        <div className="section-padding">
          <div className="container-narrow">
            <div
              className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light text-foreground">
                  Editorial Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bringing sophistication and grace to every frame. Specializing
                  in high-fashion editorial work and runway presentations with a
                  focus on timeless elegance.
                </p>
                <div className="pt-4">
                  <a href="/portfolio" className="btn-minimal inline-block">
                    View Portfolio
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
                  alt="Souheila Said Portrait"
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-secondary/30">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <h3 className="text-xl font-medium mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                  Portfolio
                </h3>
                <p className="text-muted-foreground mb-6">
                  Editorial shoots, runway moments, and behind-the-scenes
                  captures
                </p>
                <a
                  href="/portfolio"
                  className="text-sm font-medium tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                >
                  Explore Work →
                </a>
              </div>

              <div className="group">
                <h3 className="text-xl font-medium mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                  About
                </h3>
                <p className="text-muted-foreground mb-6">
                  Professional background, measurements, and modeling
                  aspirations
                </p>
                <a
                  href="/about"
                  className="text-sm font-medium tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                >
                  Learn More →
                </a>
              </div>

              <div className="group">
                <h3 className="text-xl font-medium mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                  Contact
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready to collaborate? Let's create something beautiful
                  together
                </p>
                <a
                  href="/contact"
                  className="text-sm font-medium tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                >
                  Get In Touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
