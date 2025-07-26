import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        role="navigation"
        aria-label="Primary Navigation"
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent opacity-100"
        )}
        style={{
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
        }}
      >
        <div className={`section-padding ${isScrolled ? "py-4" : "py-0"} transition-all duration-500 ease-in-out`}>
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
                    "relative nav-link transition-opacity duration-300 hover:opacity-70",
                    location.pathname === item.href && "opacity-60"
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
              aria-expanded={isMenuOpen}
            >
              <span
                className={cn(
                  "w-6 h-px bg-current transition-all duration-300",
                  isMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-current transition-all duration-300",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-6 h-px bg-current transition-all duration-300",
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
          "absolute inset-0 z-50 bg-background/90 backdrop-blur-xl transition-transform duration-500 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-2xl font-light tracking-wide transition-opacity duration-300",
                location.pathname === item.href
                  ? "opacity-60"
                  : "opacity-100 hover:opacity-70"
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

