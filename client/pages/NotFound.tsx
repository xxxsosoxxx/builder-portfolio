import { Navigation } from "@/components/Navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24 bg-background">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-6xl md:text-8xl font-light mb-8 text-muted-foreground">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <a href="/" className="btn-minimal">
              Return Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
