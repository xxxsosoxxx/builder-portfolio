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
                  Fashion model based in Brussels, specializing in editorial and
                  runway work with a passion for timeless elegance.
                </p>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based in Brussels, I bring a unique perspective to fashion
                  modeling with a focus on editorial excellence and runway
                  sophistication. My work spans across various creative
                  collaborations, always maintaining an aesthetic rooted in
                  timeless elegance.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in high-fashion editorial work and runway
                  presentations, drawing inspiration from the minimalist
                  sophistication of brands like Alaïa and The Row. My approach
                  to modeling emphasizes clean lines, natural movement, and the
                  ability to embody the essence of each creative vision.
                </p>

                <div className="pt-8">
                  <h3 className="text-xl font-medium mb-6">
                    Goals & Aspirations
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-4 flex-shrink-0" />
                      Walking for major fashion weeks in Paris, Milan, and New
                      York
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-4 flex-shrink-0" />
                      Collaborating with prestigious editorial brands and
                      magazines
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-4 flex-shrink-0" />
                      Building long-term relationships with creative teams
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-4 flex-shrink-0" />
                      Expanding into sustainable and conscious fashion advocacy
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-6">Measurements</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Height</span>
                      <span>175 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bust</span>
                      <span>86 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Waist</span>
                      <span>61 cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hips</span>
                      <span>89 cm</span>
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
                  <h3 className="text-xl font-medium mb-6">Experience</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground">
                        Editorial Work
                      </h4>
                      <p className="text-sm">Fashion magazines & campaigns</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Runway Shows
                      </h4>
                      <p className="text-sm">Local & international designers</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Commercial
                      </h4>
                      <p className="text-sm">Brand campaigns & lookbooks</p>
                    </div>
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
