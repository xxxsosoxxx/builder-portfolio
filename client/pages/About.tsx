import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 bg-background pt-32 pb-16">
        <div className="section-padding">
          <div className="container-narrow">
            <div
              className="grid md:grid-cols-2 gap-16 items-start"
              style={{ marginTop: "-1px", paddingTop: "5px" }}
            >
              {/* Left Column: About + Background */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h1
                    className="text-hero animate-fade-in-up"
                    style={{ margin: "0 0 24px" }}
                  >
                    About
                  </h1>
                  <p
                    className="text-subhero text-muted-foreground animate-fade-in-up"
                    style={{
                      borderRadius: "2px",
                      overflow: "hidden",
                      borderWidth: "2px",
                      borderStyle: "none",
                      fontSize: "20px",
                      lineHeight: "32px",
                      maxWidth: "480px",
                    }}
                  >
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
                {/* Background Section */}
                <div style={{ marginTop: "48px" }}>
                  <h2
                    className="font-heading font-semibold"
                    style={{
                      margin: "0 0 24px",
                      fontSize: "36px",
                      fontWeight: "600",
                      letterSpacing: "-0.2px",
                      lineHeight: "44px",
                    }}
                  >
                    Background
                  </h2>
                  <div
                    className="text-body text-muted-foreground max-w-xl"
                    style={{ fontSize: "18px", lineHeight: "28px" }}
                  >
                    <p>
                      Souheila collaborates on editorial, conceptual, and
                      runway projects, focusing on sculptural silhouettes and quiet power.
                      <br />
                      <br />
                    </p>
                    <p>
                      Her presence is precise and instinctive, where structure
                      meets sensuality.
                    </p>
                    <p>
                      She gravitates towards creative directions that value
                      strength, elegance, and intention.
                      <br />
                      <br />
                    </p>
                    <p>
                      Based in Brussels, available for opportunities in Paris,
                      Antwerp, and beyond.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo + Measurements */}
              <div className="flex flex-col justify-between h-full items-center">
                <div className="w-full flex justify-center" style={{ marginBottom: "24px" }}>
                  <img
                    src="/DSC_0666.jpg"
                    alt="Souheila"
                    className="rounded-lg shadow-lg"
                    style={{
                      maxWidth: "340px",
                      width: "100%",
                      height: "420px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="font-semibold text-xl self-stretch" style={{ marginTop: "48px" }}>
                  <h3
                    className="font-heading font-semibold"
                    style={{
                      margin: "0 0 24px",
                      fontSize: "36px",
                      fontWeight: "600",
                      letterSpacing: "-0.2px",
                      lineHeight: "44px",
                    }}
                  >
                    Measurements
                  </h3>
                  <div className="space-y-3 text-muted-foreground" style={{ fontSize: "18px" }}>
                    <div className="flex justify-between">
                      <span>Height</span>
                      <span>177 cm | 5'9.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chest</span>
                      <span>81 cm | 32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Waist</span>
                      <span>63 cm | 25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hips</span>
                      <span>81 cm | 32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shoes</span>
                      <span>
                        <span style={{ fontWeight: "normal" }}>39 </span>
                        <span style={{ fontWeight: "normal" }}>EU</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hair</span>
                      <span>
                        <span style={{ fontWeight: "normal" }}>Dark Brown</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Eyes</span>
                      <span>
                        <span style={{ fontWeight: "normal" }}>Brown</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
