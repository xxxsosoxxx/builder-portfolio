import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutHeight, setAboutHeight] = useState<number | null>(null);

  useEffect(() => {
    function updateHeight() {
      if (aboutRef.current) {
        setAboutHeight(aboutRef.current.clientHeight);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 bg-background pt-32 pb-16">
        <div className="section-padding">
          <div className="container-narrow">
            <div
              className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] gap-16"
              // On enlève minHeight fixe ici
            >
              {/* About text */}
              <div
                ref={aboutRef}
                className="max-w-xl flex flex-col justify-center"
                style={{ fontSize: "16px", lineHeight: "24px" }}
              >
                <h1 className="text-4xl font-semibold mb-6">About</h1>
                <p className="text-subhero text-muted-foreground">
                  <br />
                  <br />I believe in fashion as form, not distraction.
                  <br />
                  <span className="about-text">
                    <span className="about-text-highlight">
                      My body is not a product. It is an expression.  
                      <br />It belongs to form, to movement, to substance.
                    </span>
                    <br />
                    <br />
                    I stand with those who design, construct, and reflect. Those who see fabric as structure, and the body as narrative.  
                    <br />
                    <br />
                    Not a label. Not a passing style. Not an accessory.  
                    <br />
                    <br />
                    I believe in silhouettes that create presence.  
                    <br />
                    In visions that endure.  
                    <br />
                    In quiet strength that speaks beyond the noise.  
                    <br />
                    <br />
                    I move with designers who imagine the future.  
                    <br />
                    With creators who build meaning.  
                    <br />
                    <br />
                    I am not here to embellish.  
                    <br />I am here to contribute.
                  </span>
                </p>
              </div>

              {/* Photo */}
              <div
                className="flex items-center justify-center"
                style={{ height: aboutHeight ?? "auto" }}
              >
                <img
                  src="/DSC_0666.jpg"
                  alt="Souheila"
                  className="rounded-lg shadow-lg w-auto object-contain max-h-full"
                />
              </div>

              {/* Background */}
              <div>
                {/* ... (garder inchangé) */}
              </div>

              {/* Measurements */}
              <div className="font-semibold text-xl">
                {/* ... (garder inchangé) */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
