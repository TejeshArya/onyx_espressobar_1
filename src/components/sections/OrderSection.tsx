import { ShoppingBag, Truck, Check } from "lucide-react";

export function OrderSection() {
  const options = [
    {
      name: "Direct Pickup (Bopple)",
      type: "Pickup & Order Ahead",
      description: "Skip the queue. Order directly through Bopple for instant pickup. Zero markups, meaning 100% of your support goes directly to our team.",
      link: "https://bopple.app/onyx-espresso-bar", // Main Bopple website / client store
      cta: "Order Direct Pickup",
      accent: "#C49A3C", // Gold
      badge: "Highly Recommended",
      benefits: ["No third-party markups", "Real-time order tracking", "Supporting local business"],
      icon: ShoppingBag,
    },
    {
      name: "Uber Eats",
      type: "Home Delivery",
      description: "Craving Onyx at home? Have your favorite brews, wraps, and sweet pancakes delivered directly to your doorstep via Uber Eats.",
      link: "https://www.ubereats.com/store-browse-uuid/63cf91bc-5cdb-5934-ba14-808fc7f811e4?diningMode=DELIVERY",
      cta: "Order on Uber Eats",
      accent: "#06C167", // Uber Eats Green
      benefits: ["Fast contact-free delivery", "Uber One eligible", "Track your rider"],
      icon: Truck,
    },
    {
      name: "DoorDash",
      type: "Home Delivery",
      description: "Enjoy Onyx Espresso Bar delivered fresh to Newcastle & Mayfield suburbs. Order your breakfast and morning coffee on DoorDash.",
      link: "https://www.doordash.com/store/24833758?utm_source=mx_share&aw=n5Epql1lYKwSD-q5",
      cta: "Order on DoorDash",
      accent: "#FF3008", // DoorDash Red
      benefits: ["Convenient local delivery", "DashPass eligible", "Scheduled delivery slots"],
      icon: Truck,
    },
  ];

  return (
    <section
      id="order"
      style={{
        background: "#1A1512",
        color: "#F7F2EC",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-20%",
          width: "80%",
          height: "150%",
          background: "radial-gradient(ellipse at center, rgba(196,154,60,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50%",
          right: "-20%",
          width: "80%",
          height: "150%",
          background: "radial-gradient(ellipse at center, rgba(196,154,60,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
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
            Savor Onyx Anywhere
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
              color: "#F7F2EC",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Order Now
          </h2>
          <div
            style={{
              width: "80px",
              height: "2.5px",
              background: "#C49A3C",
              margin: "0 auto 1.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(247,242,236,0.7)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Get Onyx Espresso Bar freshly prepared for you. Choose pickup to support local directly, or select a delivery partner to enjoy in your comfort.
          </p>
        </div>

        {/* Channels Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "stretch",
          }}
        >
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1.5px solid rgba(247,242,236,0.08)",
                  padding: "3rem 2.25rem 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(5px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = opt.accent;
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 15px 35px rgba(0,0,0,0.4), 0 0 15px ${opt.accent}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(247,242,236,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.2)";
                }}
              >
                {/* Header Tag */}
                {opt.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.5rem",
                      background: opt.accent,
                      color: "#1A1512",
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.62rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.8rem",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    }}
                  >
                    {opt.badge}
                  </span>
                )}

                <div>
                  {/* Category Type */}
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: opt.accent,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {opt.type}
                  </p>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.6rem",
                      color: "#F7F2EC",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {opt.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "rgba(247,242,236,0.65)",
                      marginBottom: "2rem",
                      minHeight: "75px",
                    }}
                  >
                    {opt.description}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "rgba(247,242,236,0.08)",
                      marginBottom: "1.75rem",
                    }}
                  />

                  {/* Benefits */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {opt.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.65rem",
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: "0.85rem",
                          color: "rgba(247,242,236,0.8)",
                        }}
                      >
                        <Check size={14} color={opt.accent} style={{ flexShrink: 0 }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={opt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    background: opt.accent,
                    border: `1.5px solid ${opt.accent}`,
                    cursor: "pointer",
                    padding: "1rem 1.5rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = opt.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = opt.accent;
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                >
                  <Icon size={16} />
                  {opt.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
