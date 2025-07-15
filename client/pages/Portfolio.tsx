import { Navigation } from "@/components/Navigation";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Portfolio() {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
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

      {/* Photo Gallery */}
      <section className="pb-0">
        <PhotoGallery />
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h2 className="text-section-title mb-6">
              Interested in working together?
            </h2>
            <a href="/contact" className="btn-minimal">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
