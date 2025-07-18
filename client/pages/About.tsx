import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 bg-background pt-32 pb-16">
        <div className="section-padding">
          <div className="container-narrow">
            {/* Conteneur flex horizontal */}
            <div className="flex flex-col md:flex-row gap-16">
              {/* Colonne gauche : About + Background */}
              <div className="flex-1 flex flex-col" style={{ minHeight: "420px" }}>
                {/* Texte About */}
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">About</h1>
                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up">
                    <br />
                    <br />
                    I believe in fashion as form, not distraction.
                    <br />
                    <span className="block mt-4 mb-6 font-semibold text-base leading-relaxed text-gray-900">
                      My body is not a product. It is an expression.
                      <br />
                      It belongs to form, to movement, to substance.
                    </span>
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

                {/* Bloc Background */}
                <div className="mt-12">
                  <h2 className="text-3xl font-semibold mb-6">Background</h2>
                  <div className="text-body text-muted-foreground max-w-xl text-base leading-relaxed space-y-4">
                    <p>
                      Souheila collaborates on editorial, conceptual, and runway projects, focusing on sculptural silhouettes and quiet power.
                    </p>
                    <p>Her presence is precise and instinctive, where structure meets sensuality.</p>
                    <p>She gravitates towards creative directions that value strength, elegance, and intention.</p>
                    <p>Based in Brussels, available for opportunities in Paris, Antwerp, and beyond.</p>
                  </div>
                </div>
              </div>

              {/* Colonne droite : photo + measurements */}
              <div className="flex-1 flex flex-col" style={{ minHeight: "420px" }}>
                {/* Photo avec hauteur 100% pour matcher la hauteur de la colonne gauche */}
                <div className="w-full flex justify-center mb-6" style={{ height: "60%" }}>
                  <img
                    src="/DSC_0666.jpg"
                    alt="Souheila"
                    className="rounded-lg shadow-lg w-auto h-full object-cover"
                  />
                </div>

                {/* Conteneur flex horizontal pour measurements aligné avec Background */}
                <div className="flex justify-between items-start w-full mt-12 gap-8">
                  {/* Bloc Measurements */}
                  <div className="flex-1 max-w-xs">
                    <h3 className="text-3xl font-semibold mb-6">Measurements</h3>
                    <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
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
                        <span>39 EU</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hair</span>
                        <span>Dark Brown</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Eyes</span>
                        <span>Brown</span>
                      </div>
                    </div>
                  </div>

                  {/* Bloc Background vide, pour forcer la hauteur identique */}
                  <div className="flex-1 max-w-xl invisible">
                    {/* On peut y mettre une copie du Background si besoin,
                        sinon invisible pour forcer l'alignement */}
                    Background placeholder
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
