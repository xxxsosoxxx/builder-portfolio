import { Navigation } from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-light mb-8 animate-fade-in-up">
                  About
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in-up">
                  Model based in Brussels, specializing in editorial and runway
                  work with a passion for timeless elegance.
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
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-3xl font-light mb-8">Background</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <div>
                    Souheila's work spans editorial, showroom, and runway, with
                    a focus on sculptural silhouettes and minimal aesthetics.
                  </div>
                  <div>
                    Her look and presence align with brands such as Alaïa, The
                    Row, and Saint Laurent.
                    <br />
                    <div>
                      <br />
                    </div>
                    <div>
                      Her aesthetic is defined by strong lines, quiet power, and
                      natural elegance, inspired by sculptural design and high
                      fashion imagery.
                    </div>
                    <div>
                      <br />
                    </div>
                    <div>
                      Open to editorial, showroom, and runway projects in Paris,
                      Antwerp, London, Milan, and beyond.
                      <br />
                    </div>
                  </div>
                </p>
              </div>

              <div className="space-y-8">
                <div className="font-semibold text-xl">
                  <h3 className="text-xl font-medium mb-6">Measurements</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Height</span>
                      <span>177 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bust</span>
                      <span>83 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Waist</span>
                      <span>65 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hips</span>
                      <span>86 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shoe Size</span>
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
    </div>
  );
}
