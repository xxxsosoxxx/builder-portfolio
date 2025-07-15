import { Navigation } from "@/components/Navigation";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-hero mb-8 animate-fade-in-up">Portfolio</h1>
            <p className="text-subhero text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              A curated collection of editorial shoots, runway moments, and
              creative collaborations
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="pb-24">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Gallery Items */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <div
                  key={index}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[3/4] bg-muted overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        1469334031218 + index * 1000
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={`Portfolio Image ${index}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-caption">Editorial {index}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/30">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h2 className="text-section-title mb-6">
              Interested in working together?
            </h2>
            <p className="text-body-large text-muted-foreground mb-8">
              Let's create something beautiful
            </p>
            <a href="/contact" className="btn-minimal">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
