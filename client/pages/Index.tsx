import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Souheila Said – Model & Creative</title>
        <meta
          name="description"
          content="Discover the editorial and visual universe of Souheila Said — a model and creative voice based in Brussels. Sculptural presence between fashion, art and body architecture."
        />
        <meta
          name="keywords"
          content="Souheila Said, fashion model, creative, editorial portfolio, Brussels, sculptural fashion, runway presence, body narrative"
        />
        <meta name="author" content="Souheila Said" />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F7f99b673551e42f7a1aa9f5d299383b4"
              alt="Souheila Said Fashion Model"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Text Overlay */}
          <div
            className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              className="text-hero mb-6 leading-none"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "64px",
                lineHeight: "64px",
              }}
            >
              SOUHEILA SAID
            </h1>
            <p className="text-subhero max-w-2xl mx-auto">
              Model based in Brussels.
              <br />
              Available for editorial and runway.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <div className="w-px h-12 bg-foreground/30 mx-auto mb-2" />
              <div className="w-1 h-1 bg-foreground/30 rounded-full" />

            </div>
          </div>
        </section>

        {/* Brief Introduction Section */}
        <section className="py-24 bg-background">
          <div className="section-padding">
            <div className="container-narrow">
              <div
                className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-300 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="space-y-6">
                  <h2 className="text-section-title text-foreground">
                    Long legs don't care.
                  </h2>
                  <p className="text-body-large text-muted-foreground">
                    Too tall to hide.
                    <br />
                    Too tired to conform.
                  </p>
                  <div className="pt-4">
                    <a
                      href="/portfolio"
                      className="btn-minimal inline-block"
                      style={{
                        cursor: "pointer",
                        fontFamily: "Orbitron, sans-serif",
                        fontSize: "14px",
                        lineHeight: "22.4px",
                        fontWeight: 400,
                      }}
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2Fd50b715b548f4eaca830b5aa1af7221e"
                    alt="Souheila Said Portrait"
                    className="w-full h-[600px] object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section
          className="py-20 border-t border-border"
          style={{ backgroundColor: "#d3d3d3" }}
        >
          <div className="section-padding">
            <div className="container-wide">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                {/* Portfolio Link */}
                <div className="group">
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    Portfolio
                  </h3>
                  <p className="text-body text-muted-foreground mb-6">
                    Editorial shoots and polaroïds
                  </p>
                  <a
                    href="/portfolio"
                    className="tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Explore Work →
                  </a>
                </div>

                {/* About Link */}
                <div className="group">
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    About
                  </h3>
                  <p
                    className="text-body mb-6"
                    style={{ color: "rgba(74, 74, 74, 1)" }}
                  >
                    Background and measurements
                  </p>
                  <a
                    href="/about"
                    className="tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Learn More →
                  </a>
                </div>

                {/* Contact Link */}
                <div className="group">
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    Contact
                  </h3>
                  <p className="text-body mb-6">
                    <span style={{ color: "rgba(74, 74, 74, 1)" }}>
                      Ready to collaborate?
                    </span>
                  </p>
                  <a
                    href="/contact"
                    className="tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Get In Touch →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

