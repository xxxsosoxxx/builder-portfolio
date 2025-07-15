import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-padding">
          <div className="container-narrow">
            <div
              className="grid md:grid-cols-2 gap-16 items-center"
              style={{ marginTop: "-1px", paddingTop: "5px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <h1
                  className="text-hero animate-fade-in-up"
                  style={{ paddingTop: "74px", margin: "19px 0 -23px" }}
                >
                  About
                </h1>
                <p className="text-subhero text-muted-foreground animate-fade-in-up">
                  <br />
                  <br />I believe in fashion as form, not distraction.
                  <br />
                  <span
                    style={{
                      color: "inherit",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      letterSpacing: "inherit",
                      textAlign: "inherit",
                    }}
                  >
                    My body is not a product. It's a language.
                    <br />I belong to form. To tension. To matter.
                  </span>
                  <br />
                  <br />
                  I stand with those who cut, fold, build, and question.
                  <br />
                  Who see fabric as structure, and the body as statement.
                  <br />
                  <br />
                  Not a logo. Not a trend. Not an accessory.
                  <br />
                  <br />
                  I believe in silhouettes that hold space.
                  <br />
                  In vision that outlives hype.
                  <br />
                  In silence that resists noise.
                  <br />
                  <br />
                  I move for designers, not marketers.
                  <br />
                  For creators who shape futures, not followers.
                  <br />
                  <br />
                  I am not here to decorate.
                  <br />I am here to collaborate.
                </p>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F32dbebdc41de4f02a397c4bcb49e3699%2Fa9c6c355c3b34ef5af9ab0329c7dd443"
                  alt="Souheila Said"
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
                <h2 className="text-section-title mb-8">Background</h2>
                <div className="text-body text-muted-foreground leading-relaxed max-w-2xl">
                  <p>
                    Souheila moves fluidly between editorial, conceptual, and
                    runway projects, focusing on sculptural silhouettes and a
                    quiet power.
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

              <div className="space-y-8">
                <div className="font-semibold text-xl">
                  <h3 className="text-xl font-heading font-semibold mb-6">
                    Measurements
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Height</span>
                      <span>
                        <span style={{ fontWeight: "normal" }}>
                          177 cm | 5'9.5"
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Measurements</span>
                      <span>
                        <span style={{ fontWeight: "normal" }}>
                          81/63/81 cm (EU) — 32/25/32 in (US)
                        </span>
                      </span>
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

                <div>
                  <div className="space-y-4 text-muted-foreground">
                    <div></div>
                    <div></div>
                    <div></div>
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
