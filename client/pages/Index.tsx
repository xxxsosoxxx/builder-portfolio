import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  // déclenche les animations et le lazy-load de la hero
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Souheila Said – Model & Creative</title>
        <meta
          name="description"
          content="Discover the editorial and visual universe of Souheila Said — a model and creative voice based in Brussels."
        />
        <meta
          name="keywords"
          content="Souheila Said, fashion model, creative, editorial portfolio, Brussels"
        />
        <meta name="author" content="Souheila Said" />
      </Helmet>

      {/* 1. La nav est directement sous Helmet, hors de tout wrapper à overflow-hidden */}
      <Navigation />

      {/* 2. Main en overflow-clip (remplace overflow-hidden) pour ne plus craquer la hero */}
      <main className="relative overflow-clip">
        {/* Hero */}
        <section
          className={`relative h-screen flex items-center justify-center transition-opacity duration-700
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
        >
          {/* arrière-plan image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2F7f99b673551e42f7a1aa9f5d299383b4"
              alt="Souheila Said Fashion Model"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* texte hero */}
          <div
            className={`relative z-10 text-center text-white px-6 transition-transform duration-700
              ${isLoaded ? "translate-y-0" : "translate-y-8"}
            `}
          >
            <h1
              className="text-6xl md:text-7xl mb-4 leading-tight"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              SOUHEILA SAID
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Model based in Brussels. <br />
              Available for editorial and runway.
            </p>
          </div>
        </section>

        {/* Brief Introduction */}
        <section className="py-24 bg-background">
          <div className="container-narrow mx-auto px-6 md:px-8">
            <div className="md:grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-light">Long legs don't care.</h2>
                <p className="text-body-large text-muted-foreground">
                  Too tall to hide.<br />
                  Too tired to conform.
                </p>
                <a
                  href="/portfolio"
                  className="btn-minimal"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  View Portfolio
                </a>
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
        </section>

        {/* Quick Links */}
        <section className="py-20 border-t border-border bg-blurred">
          <div className="container-wide mx-auto px-6 md:px-8">
            <div className="md:grid md:grid-cols-3 gap-12 text-center">
              {[
                { title: "Portfolio", href: "/portfolio", desc: "Editorial shoots and polaroïds" },
                { title: "About",     href: "/about",     desc: "Background and measurements" },
                { title: "Contact",   href: "/contact",   desc: "Ready to collaborate?" },
              ].map((block) => (
                <div key={block.href} className="group">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                    {block.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-6">{block.desc}</p>
                  <a
                    href={block.href}
                    className="uppercase tracking-wide hover:text-muted-foreground transition-colors duration-300"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    {block.title === "Contact" ? "Get In Touch →" : block.title === "About" ? "Learn More →" : "Explore Work →"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}


