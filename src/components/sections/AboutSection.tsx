import { MapPin, Clock, Dog } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function AboutSection() {
  return (
    <section
      className="section-padding"
      style={{
        background: "#1A1512",
      }}
    >
      <div
        className="responsive-grid-about"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative" }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1776437209596-8c96f7c6dcda?w=700&h=550&fit=crop&auto=format"
            alt="Interior of Onyx Espresso Bar with warm lighting and hanging lamps"
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
            }}
          />
          {/* Gold frame accent */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              width: "180px",
              height: "180px",
              border: "2px solid #C49A3C",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          {/* Est badge */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              left: "1.5rem",
              background: "#C49A3C",
              padding: "1rem 1.25rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "0.15rem",
              }}
            >
              Est.
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "1.6rem",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              2016
            </p>
          </div>
        </div>

        {/* Text content */}
        <div>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "1rem",
            }}
          >
            Our Story
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#F7F2EC",
              lineHeight: 1.2,
              marginBottom: "1.75rem",
            }}
          >
            A Unique Café in the
            <br />
            <em style={{ color: "#C49A3C", fontStyle: "italic" }}>Heart of Mayfield</em>
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(247,242,236,0.75)",
              marginBottom: "1.25rem",
            }}
          >
            Onyx Espresso Bar has been a beloved fixture in the Mayfield community since 2016.
            We opened with a simple belief: that a great café is more than just a place to get
            coffee — it's a space where people connect, slow down, and feel at home.
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(247,242,236,0.75)",
              marginBottom: "2.5rem",
            }}
          >
            Our all-day menu showcases fresh, locally sourced ingredients prepared with care.
            Whether you're joining us for a weekday flat white or a lazy Sunday breakfast,
            you'll always leave feeling looked after.
          </p>

          {/* Quick facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: MapPin, text: "Located in Mayfield, Newcastle NSW" },
              { icon: Clock, text: "Open 7 days — All Day Breakfast & Lunch" },
              { icon: Dog, text: "Dog friendly — bring your furry friend!" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(196,154,60,0.15)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="#C49A3C" />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      color: "rgba(247,242,236,0.8)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
