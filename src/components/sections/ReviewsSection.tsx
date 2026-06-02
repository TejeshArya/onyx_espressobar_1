import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Veronica Oleary",
    rating: 5,
    text: "Great egg and bacon roll, delicious coffee — all for $12 each. Very nice and great friendly service!",
    avatar: "VO",
    color: "#4285F4",
  },
  {
    name: "Ric Warnock",
    rating: 5,
    text: "I love going to a pet friendly place. The coffee is always spot on and the staff are so welcoming.",
    avatar: "RW",
    color: "#34A853",
  },
  {
    name: "Mohammed Saeed Alzahrani",
    rating: 5,
    text: "One of the best cafés in Newcastle. The atmosphere is cosy, the coffee is excellent, and the food never disappoints.",
    avatar: "MA",
    color: "#EA4335",
  },
  {
    name: "Sarah Thompson",
    rating: 5,
    text: "My go-to café in Mayfield. The flat white is perfect every single time. Staff remember your order — that's the sign of a great local.",
    avatar: "ST",
    color: "#FBBC04",
  },
  {
    name: "James Nguyen",
    rating: 4,
    text: "Excellent breakfast spot. The big breakfast is generous and delicious. Reasonably priced and always fresh.",
    avatar: "JN",
    color: "#4285F4",
  },
  {
    name: "Emma Clarke",
    rating: 5,
    text: "Brought my dog and we both had a great time. The outdoor seating is lovely on a sunny morning. Will be back!",
    avatar: "EC",
    color: "#34A853",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          fill={i <= rating ? "#FBBC04" : "none"}
          color={i <= rating ? "#FBBC04" : "#999"}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < reviews.length;

  return (
    <section
      style={{
        background: "#1A1512",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            gap: "2rem",
          }}
        >
          <div>
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
              Customer Feedback
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "#F7F2EC",
                lineHeight: 1.2,
              }}
            >
              What Our Clients Say
            </h2>
          </div>

          {/* Google rating summary */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "0.5rem",
            }}
          >
            <div style={{ display: "flex", gap: "3px" }}>
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={20} fill="#FBBC04" color="#FBBC04" />
              ))}
              <Star size={20} fill="#FBBC04" color="#FBBC04" strokeWidth={0} style={{ opacity: 0.7 }} />
            </div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#F7F2EC",
              }}
            >
              GOOD
            </p>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(247,242,236,0.5)",
              }}
            >
              Based on 306 Google reviews
            </p>

            {/* Navigation arrows */}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              <button
                onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
                disabled={!canPrev}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(247,242,236,0.2)",
                  background: "transparent",
                  cursor: canPrev ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: canPrev ? "#F7F2EC" : "rgba(247,242,236,0.3)",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (canPrev) e.currentTarget.style.borderColor = "#C49A3C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(247,242,236,0.2)";
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setStartIndex(Math.min(reviews.length - visibleCount, startIndex + 1))}
                disabled={!canNext}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(247,242,236,0.2)",
                  background: "transparent",
                  cursor: canNext ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: canNext ? "#F7F2EC" : "rgba(247,242,236,0.3)",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (canNext) e.currentTarget.style.borderColor = "#C49A3C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(247,242,236,0.2)";
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {reviews.slice(startIndex, startIndex + visibleCount).map((review) => (
            <div
              key={review.name}
              style={{
                background: "rgba(247,242,236,0.05)",
                border: "1px solid rgba(247,242,236,0.08)",
                padding: "1.75rem",
                transition: "background 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(247,242,236,0.09)";
                e.currentTarget.style.borderColor = "rgba(196,154,60,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(247,242,236,0.05)";
                e.currentTarget.style.borderColor = "rgba(247,242,236,0.08)";
              }}
            >
              {/* Reviewer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: review.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      color: "#FFFFFF",
                    }}
                  >
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#F7F2EC",
                    }}
                  >
                    {review.name}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "2px" }}>
                    <StarRating rating={review.rating} />
                    {/* Google G icon placeholder */}
                    <span
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        color: "#4285F4",
                        background: "rgba(255,255,255,0.1)",
                        padding: "1px 5px",
                        borderRadius: "2px",
                      }}
                    >
                      G
                    </span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(247,242,236,0.7)",
                  fontStyle: "italic",
                }}
              >
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
