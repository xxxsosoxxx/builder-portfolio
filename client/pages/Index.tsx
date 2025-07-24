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
    <div className="min-h-screen relative overflow-x-hidden bg-background text-foreground transition-colors">
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

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F7f99b673551e42f7a1aa9f5d299383b4"
            alt="Souheila Said Fashion Model"
            className="w-full h-full object-cover object-center"
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text Overlay */}
        <div
          className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-hero mb-6 leading-none"
            style={{ font: "64px/64px Orbitron, sans-serif" }}
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
            <div className="w-px h-12 bg-white/60 mx-auto mb-2" />
            <div className="w-1 h-1 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="section-padding">
          <div className="container-narrow">
            <div
              className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-section-title">Long legs don't care.</h2>
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
                      font: "400 14px/22.4px Orbitron, sans-serif",
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 border-t border-border bg-muted text-foreground dark:bg-[#1f1f1f]">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                {
                  title: "Portfolio",
                  desc: "Editorial shoots and polaroïds",
                  link: "/portfolio",
                  linkText: "Explore Work →",
                },
                {
                  title: "About",
                  desc: "Background and measurements",
                  link: "/about",
                  linkText: "Learn More →",
                },
                {
                  title: "Contact",
                  desc: "Ready to collaborate?",
                  link: "/contact",
                  linkText: "Get In Touch →",
                },
              ].map(({ title, desc, link, linkText }) => (
                <div className="group" key={title}>
                  <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-6">{desc}</p>
                  <a
                    href={link}
                    className="tracking-wider uppercase hover:text-muted-foreground transition-colors duration-300"
                    style={{
                      font: "500 14px/20px Orbitron, sans-serif",
                    }}
                  >
                    {linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
