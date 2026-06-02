import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface HeroSectionProps {
  onBookNow: () => void;
}

export function HeroSection({ onBookNow }: HeroSectionProps) {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1766767164066-d2f4571e75d1?w=1920&h=1080&fit=crop&auto=format"
        alt="Barista crafting coffee at Onyx Espresso Bar"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(26,21,18,0.55) 0%, rgba(26,21,18,0.7) 60%, rgba(26,21,18,0.92) 100%)",
        }}
      />

      {/* Gold accent line top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(to right, transparent, #C49A3C, transparent)",
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "860px",
        }}
      >
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C49A3C",
            marginBottom: "1.25rem",
          }}
        >
          Est. 2016 · Mayfield, Newcastle NSW
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.1,
            color: "#F7F2EC",
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Welcome to the
          <br />
          <em style={{ fontStyle: "italic", color: "#C49A3C" }}>Onyx</em> Espresso Bar
        </h1>

        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            lineHeight: 1.7,
            color: "rgba(247,242,236,0.8)",
            marginBottom: "2.5rem",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
          }}
        >
          A unique café in the heart of Mayfield — where every cup tells a story.
          Fresh ingredients, expertly crafted coffee, and a warm welcome every time.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
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
              color: "#FFFFFF",
              background: "#C49A3C",
              border: "none",
              cursor: "pointer",
              padding: "1rem 2.5rem",
              transition: "background 0.25s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#A07D2E";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C49A3C";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book a Table
          </button>

          <button
            onClick={scrollToMenu}
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F7F2EC",
              background: "transparent",
              border: "2px solid rgba(247,242,236,0.6)",
              cursor: "pointer",
              padding: "1rem 2.5rem",
              transition: "border-color 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C49A3C";
              e.currentTarget.style.color = "#C49A3C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,242,236,0.6)";
              e.currentTarget.style.color = "#F7F2EC";
            }}
          >
            View Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={scrollToMenu}
      >
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(247,242,236,0.5)",
          }}
        >
          Scroll
        </p>
        <ChevronDown
          size={20}
          color="rgba(247,242,236,0.5)"
          style={{ animation: "bounce 2s infinite" }}
        />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
