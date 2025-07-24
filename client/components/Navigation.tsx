import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "scrolled bg-nav backdrop-blur-md border-b border-border" : "unscrolled"
        )}
      >
        <div className={cn("section-padding", isScrolled ? "py-5" : "py-0")}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-light tracking-wider text-foreground hover:text-muted-foreground transition-colors duration-300"
              style={{ font: "25px/28px Orbitron, sans-serif" }}
            >
              SOUHEILA SAID
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "nav-link",
                    location.pathname === item.href && "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "w-6 h-px bg-foreground transition-all duration-300",
                  isMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-foreground transition-all duration-300",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-foreground transition-all duration-300",
                  isMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-transform duration-300 md:hidden",
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-2xl font-light tracking-wider transition-colors duration-300",
                location.pathname === item.href
                  ? "text-muted-foreground"
                  : "text-foreground hover:text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
