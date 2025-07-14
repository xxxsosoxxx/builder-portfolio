import { useState } from "react";
import { Navigation } from "@/components/Navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-8 animate-fade-in-up">
              Contact
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Ready to collaborate? Let's create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <div className="section-padding">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-light mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-minimal w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="animate-fade-in space-y-8">
                <div>
                  <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email</h3>
                      <a
                        href="mailto:hello@souheila-said.com"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        hello@souheila-said.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Location</h3>
                      <p className="text-muted-foreground">Brussels, Belgium</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Social</h3>
                      <div className="space-y-2">
                        <a
                          href="https://instagram.com/souheila.said"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://linkedin.com/in/souheila-said"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-medium mb-4">
                    Professional Inquiries
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Available for editorial shoots, runway shows, and creative
                    collaborations. Based in Brussels with availability for
                    travel across Europe and internationally.
                  </p>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-medium mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    I typically respond to inquiries within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
