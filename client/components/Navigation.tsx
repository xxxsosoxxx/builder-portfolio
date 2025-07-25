import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll("section");
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) return; // En dark mode : ne rien changer, ton CSS gère déjà

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bg = window.getComputedStyle(entry.target).backgroundColor;
          const rgb = bg.match(/\d+/g)?.map(Number);
          const brightness =
            rgb && rgb.length === 3
              ? (rgb[0] + rgb[1] + rgb[2]) / 3
              : 255;
                    const logo = document.querySelector(".logo") as HTMLElement;

      if (logo) {
        const newColor =
          brightness < 128 ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.85)";
        const shadow =
          brightness < 128
            ? "0 1px 2px rgba(0,0,0,0.4)"
            : "0 1px 2px rgba(255,255,255,0.4)";

        logo.style.color = newColor;
        logo.style.textShadow = shadow;
      }

          nav!.style.color =
            brightness < 128
              ? "rgba(255,255,255,0.85)"
              : "rgba(0,0,0,0.85)";
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}, []);

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
          isScrolled ? "scrolled bg-[rgba(0,0,0,0.4)] backdrop-blur-md border-b border-border"
  : "unscrolled bg-transparent"
        )}
      >
        <div className={cn("section-padding", isScrolled ? "py-5" : "py-0")}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
            to="/"
            className="logo text-xl font-light tracking-wider text-foreground hover:text-muted-foreground transition-colors duration-300"
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
