import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Gestion du scroll pour changer le fond de la nav
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu à chaque changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Bloque/autorise le scroll du body
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navItems = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about",     label: "About"     },
    { href: "/contact",   label: "Contact"   },
  ];

  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/70 backdrop-blur-2xl shadow-lg"
            : "bg-transparent"
        )}
        style={{
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
        }}
      >
        <div className="section-padding py-6 transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-light tracking-wider text-foreground hover:text-muted-foreground transition-colors duration-300"
              style={{ font: "25px/28px Orbitron, sans-serif" }}
            >
              SOUHEILA SAID
            </Link>

            {/* Menu Desktop */}
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

            {/* Bouton Mobile */}
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

      {/* Overlay Mobile */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/60 backdrop-blur-2xl transition-transform duration-500 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-screen space-y-8 px-4">
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


