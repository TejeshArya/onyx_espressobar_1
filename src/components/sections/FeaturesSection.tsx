import { Leaf, Coffee, Star } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source the finest local produce daily. Every dish is crafted with seasonal, farm-fresh ingredients that celebrate the flavours of the Hunter Valley.",
  },
  {
    icon: Coffee,
    title: "Delicious Taste",
    description:
      "From our perfectly pulled espresso to our all-day breakfast menu, everything is made with passion and precision — just the way it should be.",
  },
  {
    icon: Star,
    title: "Excellent Service",
    description:
      "We believe a great café experience is about more than just food. Our team is committed to making every visit warm, personal, and memorable.",
  },
];

export function FeaturesSection() {
  return (
    <section
      style={{
        background: "#F7F2EC",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "0.75rem",
            }}
          >
            Why Choose Onyx
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#1A1512",
              lineHeight: 1.2,
            }}
          >
            A Cut Above the Rest
          </h2>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                style={{
                  textAlign: "center",
                  padding: "2.5rem 2rem",
                  background: "#FFFFFF",
                  borderTop: "3px solid #C49A3C",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,21,18,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "#F7F2EC",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <Icon size={28} color="#C49A3C" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#1A1512",
                    marginBottom: "1rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: "#7A6A5A",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
