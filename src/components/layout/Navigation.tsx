import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/images/logo.jpg";

interface NavigationProps {
  onBookNow: () => void;
}

export function Navigation({ onBookNow }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.35s ease, box-shadow 0.35s ease",
        background: isScrolled ? "#1A1512" : "transparent",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div
        className="px-5 md:px-8"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: 0,
          }}
        >
          <img
            src={logoImg}
            alt="Onyx Espresso Bar Logo"
            style={{
              height: "48px",
              width: "auto",
              objectFit: "contain",
              border: "1.5px solid #C49A3C",
              borderRadius: "4px",
            }}
          />
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-[2.5rem]"
        >
          {[
            { label: "Home", id: "home" },
            { label: "Menu", id: "menu" },
            { label: "Order Now", id: "order" },
            { label: "Contact Us", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(247,242,236,0.85)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s ease",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C49A3C")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(247,242,236,0.85)")
              }
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onBookNow}
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "#C49A3C",
              border: "none",
              cursor: "pointer",
              padding: "0.65rem 1.6rem",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#A07D2E")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#C49A3C")
            }
          >
            Book Now
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            color: "#F7F2EC",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "#1A1512",
            borderTop: "1px solid rgba(247,242,236,0.1)",
          }}
          className="md:hidden"
        >
          <div
            className="px-5 py-6"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {[
              { label: "Home", id: "home" },
              { label: "Menu", id: "menu" },
              { label: "Order Now", id: "order" },
              { label: "Contact Us", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(247,242,236,0.85)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onBookNow(); setMobileOpen(false); }}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                background: "#C49A3C",
                border: "none",
                cursor: "pointer",
                padding: "0.85rem 1.6rem",
                textAlign: "left",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
