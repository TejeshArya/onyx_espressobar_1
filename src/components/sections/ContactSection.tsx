import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Send, User, MessageSquare, Tag, CheckCircle } from "lucide-react";
import { sendFormEmail } from "@/lib/email";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const hours = [
  { day: "Monday", time: "7:00 AM – 2:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 2:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 2:00 PM" },
  { day: "Thursday", time: "7:00 AM – 2:00 PM" },
  { day: "Friday", time: "7:00 AM – 2:00 PM" },
  { day: "Saturday", time: "7:00 AM – 2:00 PM" },
  { day: "Sunday", time: "7:00 AM – 2:00 PM" },
];

const today = new Date().toLocaleDateString("en-AU", { weekday: "long" });

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await sendFormEmail({
      subject: `New Contact Inquiry: ${data.subject}`,
      from_name: "Onyx Espresso Bar Website",
      email: data.email,
      name: data.name,
      message: data.message,
      inquiry_subject: data.subject,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      reset();
    } else {
      setSubmitError(result.error || "Failed to send message. Please try again.");
    }
  };

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
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
              color: "#1A1512",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Visit Us in Mayfield
          </h2>
          <div
            style={{
              width: "80px",
              height: "2.5px",
              background: "#C49A3C",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Form and Info Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginBottom: "4.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Details & Hours */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Opening Hours Card */}
            <div style={{ background: "#FFFFFF", padding: "2.5rem", border: "1px solid rgba(26,21,18,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.01)" }}>
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
                    fontSize: "1.3rem",
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

            {/* Location & Contact Card */}
            <div style={{ background: "#FFFFFF", padding: "2.5rem", border: "1px solid rgba(26,21,18,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.01)" }}>
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
                    fontSize: "1.3rem",
                    color: "#1A1512",
                  }}
                >
                  Find Us
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { icon: MapPin, label: "Address", value: "191 Maitland road" },
                  { icon: Phone, label: "Phone", value: "02 4049 6013" },
                  { icon: Mail, label: "Email", value: "Onyxespressobar@gmail.com" },
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
                          {item.label === "Phone" ? (
                            <a href={`tel:${item.value.replace(/\s+/g, '')}`} style={{ color: "#1A1512", textDecoration: "none", borderBottom: "1.5px dashed #C49A3C", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#C49A3C"} onMouseLeave={(e) => e.currentTarget.style.color = "#1A1512"}>
                              {item.value}
                            </a>
                          ) : item.label === "Email" ? (
                            <a href={`mailto:${item.value}`} style={{ color: "#1A1512", textDecoration: "none", borderBottom: "1.5px dashed #C49A3C", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#C49A3C"} onMouseLeave={(e) => e.currentTarget.style.color = "#1A1512"}>
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
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
          </div>

          {/* Right Column: Contact Form */}
          <div style={{ background: "#FFFFFF", padding: "2.5rem", border: "1px solid rgba(26,21,18,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.01)" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "1.4rem",
                    color: "#1A1512",
                    marginBottom: "1.5rem",
                  }}
                >
                  Send Us a Message
                </h3>

                {/* Name */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle}>
                    <User size={14} style={{ marginRight: "0.4rem" }} />
                    Full Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    style={{ ...inputStyle, borderColor: errors.name ? "#d4183d" : "rgba(26,21,18,0.15)" }}
                  />
                  {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle}>
                    <Mail size={14} style={{ marginRight: "0.4rem" }} />
                    Email Address *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                    })}
                    type="email"
                    placeholder="john@example.com"
                    style={{ ...inputStyle, borderColor: errors.email ? "#d4183d" : "rgba(26,21,18,0.15)" }}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                </div>

                {/* Subject */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle}>
                    <Tag size={14} style={{ marginRight: "0.4rem" }} />
                    Subject *
                  </label>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="General Inquiry, Event Catering, Feedback..."
                    style={{ ...inputStyle, borderColor: errors.subject ? "#d4183d" : "rgba(26,21,18,0.15)" }}
                  />
                  {errors.subject && <p style={errorStyle}>{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={labelStyle}>
                    <MessageSquare size={14} style={{ marginRight: "0.4rem" }} />
                    Your Message *
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    placeholder="Write your details or feedback here..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                      borderColor: errors.message ? "#d4183d" : "rgba(26,21,18,0.15)",
                    }}
                  />
                  {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    background: isSubmitting ? "#A07D2E" : "#C49A3C",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    padding: "1.1rem 2rem",
                    transition: "background 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) e.currentTarget.style.background = "#A07D2E";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) e.currentTarget.style.background = "#C49A3C";
                  }}
                >
                  <Send size={14} />
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>

                {submitError && (
                  <p style={{ ...errorStyle, textAlign: "center", marginTop: "1rem" }}>
                    {submitError}
                  </p>
                )}
              </form>
            ) : (
              /* Success State */
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <CheckCircle size={56} color="#C49A3C" style={{ margin: "0 auto 1.5rem" }} />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "1.8rem",
                    color: "#1A1512",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.95rem",
                    color: "#7A6A5A",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  Thank you for reaching out. We have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
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
                    padding: "0.9rem 2rem",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Map Full Width */}
        <div style={{ background: "#1A1512", minHeight: "420px", position: "relative", overflow: "hidden", border: "1px solid rgba(26,21,18,0.06)" }}>
          <iframe
            title="Onyx Espresso Bar Location"
            src="https://maps.google.com/maps?q=191+Maitland+road+Mayfield+NSW+2304&t=&z=16&ie=UTF8&iwloc=&output=embed"
            style={{ width: "100%", height: "100%", border: "none", minHeight: "420px", filter: "sepia(20%) contrast(95%)" }}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "1.5rem",
              background: "#C49A3C",
              padding: "0.6rem 1.25rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
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
              191 Maitland road Mayfield
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 600,
  fontSize: "0.78rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#1A1512",
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  fontFamily: "'Nunito', sans-serif",
  fontSize: "0.9rem",
  color: "#1A1512",
  background: "#F7F2EC",
  border: "1.5px solid rgba(26,21,18,0.15)",
  padding: "0.75rem 1rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  boxSizing: "border-box",
  borderRadius: 0,
};

const errorStyle: React.CSSProperties = {
  fontFamily: "'Nunito', sans-serif",
  fontSize: "0.75rem",
  color: "#d4183d",
  marginTop: "0.3rem",
};
