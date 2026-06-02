import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const hours = [
  { day: "Monday", time: "7:00 AM – 3:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 3:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 3:00 PM" },
  { day: "Thursday", time: "7:00 AM – 3:00 PM" },
  { day: "Friday", time: "7:00 AM – 3:00 PM" },
  { day: "Saturday", time: "7:30 AM – 2:30 PM" },
  { day: "Sunday", time: "7:30 AM – 2:30 PM" },
];

const today = new Date().toLocaleDateString("en-AU", { weekday: "long" });

export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "#F7F2EC",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
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
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#1A1512",
              lineHeight: 1.2,
            }}
          >
            Visit Us in Mayfield
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Opening Hours */}
          <div style={{ background: "#FFFFFF", padding: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#C49A3C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Clock size={20} color="#FFFFFF" />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: "#1A1512",
                }}
              >
                Opening Hours
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {hours.map((h) => {
                const isToday = h.day === today;
                return (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(26,21,18,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: isToday ? 700 : 500,
                        fontSize: "0.88rem",
                        color: isToday ? "#C49A3C" : "#1A1512",
                      }}
                    >
                      {h.day} {isToday && "(Today)"}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: isToday ? 700 : 400,
                        fontSize: "0.88rem",
                        color: isToday ? "#C49A3C" : "#7A6A5A",
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Location & Contact */}
          <div style={{ background: "#FFFFFF", padding: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#C49A3C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={20} color="#FFFFFF" />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: "#1A1512",
                }}
              >
                Find Us
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: MapPin, label: "Address", value: "Mayfield, Newcastle NSW 2304" },
                { icon: Phone, label: "Phone", value: "(02) 4000 0000" },
                { icon: Mail, label: "Email", value: "hello@onyxespressobar.com.au" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}
                  >
                    <Icon size={18} color="#C49A3C" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <p
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#7A6A5A",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: "0.9rem",
                          color: "#1A1512",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7A6A5A",
                  marginBottom: "0.85rem",
                }}
              >
                Follow Us
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
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
                        width: "40px",
                        height: "40px",
                        background: "#F7F2EC",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1A1512",
                        textDecoration: "none",
                        transition: "background 0.2s ease, color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#C49A3C";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#F7F2EC";
                        e.currentTarget.style.color = "#1A1512";
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div style={{ background: "#1A1512", minHeight: "380px", position: "relative", overflow: "hidden" }}>
            <iframe
              title="Onyx Espresso Bar Location"
              src="https://maps.google.com/maps?q=Mayfield+Newcastle+NSW&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ width: "100%", height: "100%", border: "none", minHeight: "380px", filter: "sepia(30%) contrast(90%)" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                background: "#C49A3C",
                padding: "0.6rem 1.25rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                Mayfield, Newcastle NSW
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
