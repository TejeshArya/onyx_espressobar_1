import { Instagram, Facebook, Heart } from "lucide-react";

interface FooterProps {
  onBookNow: () => void;
}

export function Footer({ onBookNow }: FooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0E0C0A", color: "#F7F2EC" }}>
      {/* Top CTA band */}
      <div
        style={{
          background: "#C49A3C",
          padding: "2.5rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            color: "#FFFFFF",
            marginBottom: "1.25rem",
          }}
        >
          Ready for your next great coffee experience?
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onBookNow}
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C49A3C",
              background: "#FFFFFF",
              border: "none",
              cursor: "pointer",
              padding: "0.9rem 2.25rem",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1A1512";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.color = "#C49A3C";
            }}
          >
            Book a Table
          </button>
          <a
            href="#order"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.7)",
              cursor: "pointer",
              padding: "0.9rem 2.25rem",
              textDecoration: "none",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
          >
            Order Online
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand column */}
        <div>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.8rem",
              letterSpacing: "0.2em",
              color: "#F7F2EC",
              marginBottom: "0.5rem",
            }}
          >
            ONYX
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "1.25rem",
            }}
          >
            Espresso Bar
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "rgba(247,242,236,0.55)",
              marginBottom: "1.5rem",
            }}
          >
            A unique café in the heart of Mayfield, Newcastle. Open 7 days a week.
          </p>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            {[
              { icon: Instagram, href: "https://www.instagram.com/onyxespressobar", label: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/onyxespressobar", label: "Facebook" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(247,242,236,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(247,242,236,0.6)",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C49A3C";
                    e.currentTarget.style.color = "#C49A3C";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(247,242,236,0.15)";
                    e.currentTarget.style.color = "rgba(247,242,236,0.6)";
                  }}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "1.25rem",
            }}
          >
            Navigation
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
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
                  fontSize: "0.9rem",
                  color: "rgba(247,242,236,0.55)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C49A3C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,242,236,0.55)")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "1.25rem",
            }}
          >
            Opening Hours
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { label: "Mon – Fri", time: "7:00 AM – 3:00 PM" },
              { label: "Sat – Sun", time: "7:30 AM – 2:30 PM" },
            ].map((h) => (
              <div key={h.label} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.88rem", color: "rgba(247,242,236,0.55)" }}>
                  {h.label}
                </span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.88rem", color: "rgba(247,242,236,0.55)" }}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "1.25rem",
            }}
          >
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Mayfield, Newcastle NSW 2304",
              "(02) 4000 0000",
              "Onyxespressobar@gmail.com",
            ].map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "0.88rem",
                  color: "rgba(247,242,236,0.55)",
                  lineHeight: 1.5,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(247,242,236,0.06)",
          padding: "1.5rem 2rem",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(247,242,236,0.3)",
          }}
        >
          © {new Date().getFullYear()} Onyx Espresso Bar. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(247,242,236,0.3)",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          Made with <Heart size={12} fill="currentColor" color="#C49A3C" /> in Mayfield, NSW
        </p>
      </div>
    </footer>
  );
}
