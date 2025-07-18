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
              className="flex flex-col md:flex-row gap-16"
              style={{ marginTop: "-1px", paddingTop: "5px" }}
            >
              {/* Left Column: About + Background */}
              <div className="flex-1 flex flex-col">
                {/* About uniquement */}
                <div
                  className="about-text flex-grow max-w-xl"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  <h1 className="text-4xl font-semibold mb-6">About</h1>
                  <p className="text-subhero text-muted-foreground">
                    <br />
                    <br />
                    I believe in fashion as form, not distraction.
                    <br />
                    <span className="about-text-highlight">
                      My body is not a product. It is an expression.
                      <br />
                      It belongs to form, to movement, to substance.
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
                    <br />
                    I am here to contribute.
                  </p>
                </div>

                {/* Background */}
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
              <div className="flex-1 flex flex-col">
                {/* Photo qui prend la hauteur du bloc About */}
                <div className="flex-grow" style={{ minHeight: 0 }}>
                  <img
                    src="/DSC_0666.jpg"
                    alt="Souheila"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ maxHeight: "100%" }}
                  />
                </div>

                {/* Measurements */}
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
