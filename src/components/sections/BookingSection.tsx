import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle, X } from "lucide-react";
import { sendFormEmail } from "@/lib/email";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

const timeSlots = [
  "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM",
];

interface BookingSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export function BookingSection({ isModalOpen = false, onCloseModal }: BookingSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await sendFormEmail({
      subject: "New Table Booking - Onyx Espresso Bar",
      from_name: "Onyx Espresso Bar System",
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
      phone: data.phone,
      date: data.date,
      time: data.time,
      guests: data.guests,
      specialRequests: data.specialRequests || "None",
    });

    setIsSubmitting(false);

    if (result.success) {
      const bookings = JSON.parse(localStorage.getItem("onyx_bookings") || "[]");
      bookings.push({ ...data, id: Date.now(), createdAt: new Date().toISOString() });
      localStorage.setItem("onyx_bookings", JSON.stringify(bookings));
      setSubmittedData(data);
      setSubmitted(true);
    } else {
      setSubmitError(result.error || "An error occurred. Please try again.");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
    reset();
    if (onCloseModal) onCloseModal();
  };

  const formContent = (
    <div style={{ width: "100%", maxWidth: isModalOpen ? "680px" : "100%" }}>
      {!submitted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            {/* First Name */}
            <div>
              <label style={labelStyle}>
                <User size={14} style={{ marginRight: "0.4rem" }} />
                First Name *
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                placeholder="Jane"
                style={{ ...inputStyle, borderColor: errors.firstName ? "#d4183d" : "rgba(26,21,18,0.15)" }}
              />
              {errors.firstName && <p style={errorStyle}>{errors.firstName.message}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label style={labelStyle}>
                <User size={14} style={{ marginRight: "0.4rem" }} />
                Last Name *
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Smith"
                style={{ ...inputStyle, borderColor: errors.lastName ? "#d4183d" : "rgba(26,21,18,0.15)" }}
              />
              {errors.lastName && <p style={errorStyle}>{errors.lastName.message}</p>}
            </div>

            {/* Email */}
            <div>
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
                placeholder="jane@example.com"
                style={{ ...inputStyle, borderColor: errors.email ? "#d4183d" : "rgba(26,21,18,0.15)" }}
              />
              {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>
                <Phone size={14} style={{ marginRight: "0.4rem" }} />
                Phone Number *
              </label>
              <input
                {...register("phone", { required: "Phone number is required" })}
                type="tel"
                placeholder="0400 123 456"
                style={{ ...inputStyle, borderColor: errors.phone ? "#d4183d" : "rgba(26,21,18,0.15)" }}
              />
              {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
            </div>

            {/* Date */}
            <div>
              <label style={labelStyle}>
                <Calendar size={14} style={{ marginRight: "0.4rem" }} />
                Preferred Date *
              </label>
              <input
                {...register("date", { required: "Date is required" })}
                type="date"
                min={today}
                style={{ ...inputStyle, borderColor: errors.date ? "#d4183d" : "rgba(26,21,18,0.15)" }}
              />
              {errors.date && <p style={errorStyle}>{errors.date.message}</p>}
            </div>

            {/* Time */}
            <div>
              <label style={labelStyle}>
                <Clock size={14} style={{ marginRight: "0.4rem" }} />
                Preferred Time *
              </label>
              <select
                {...register("time", { required: "Time is required" })}
                style={{ ...inputStyle, borderColor: errors.time ? "#d4183d" : "rgba(26,21,18,0.15)", cursor: "pointer" }}
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.time && <p style={errorStyle}>{errors.time.message}</p>}
            </div>

            {/* Guests */}
            <div>
              <label style={labelStyle}>
                <Users size={14} style={{ marginRight: "0.4rem" }} />
                Number of Guests *
              </label>
              <select
                {...register("guests", { required: "Number of guests is required" })}
                style={{ ...inputStyle, borderColor: errors.guests ? "#d4183d" : "rgba(26,21,18,0.15)", cursor: "pointer" }}
              >
                <option value="">Select guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
                <option value="9+">9+ Guests (large group)</option>
              </select>
              {errors.guests && <p style={errorStyle}>{errors.guests.message}</p>}
            </div>
          </div>

          {/* Special Requests */}
          <div style={{ marginBottom: "1.75rem" }}>
            <label style={labelStyle}>
              <MessageSquare size={14} style={{ marginRight: "0.4rem" }} />
              Special Requests
            </label>
            <textarea
              {...register("specialRequests")}
              placeholder="Dietary requirements, high chairs, accessibility needs, celebrations..."
              rows={4}
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: "100px",
              }}
            />
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
              opacity: isSubmitting ? 0.8 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) e.currentTarget.style.background = "#A07D2E";
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) e.currentTarget.style.background = "#C49A3C";
            }}
          >
            {isSubmitting ? "Submitting Booking..." : "Confirm Booking Request"}
          </button>

          {submitError && (
            <p style={{ ...errorStyle, textAlign: "center", marginTop: "1rem", fontSize: "0.85rem" }}>
              {submitError}
            </p>
          )}

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "0.8rem",
              color: "#7A6A5A",
              marginTop: "0.85rem",
              textAlign: "center",
            }}
          >
            We'll confirm your booking via email within 24 hours.
          </p>
        </form>
      ) : (
        // Success state
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
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
            Booking Request Received!
          </h3>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "0.95rem",
              color: "#7A6A5A",
              lineHeight: 1.7,
              marginBottom: "0.5rem",
            }}
          >
            Thank you, <strong>{submittedData?.firstName}</strong>! We've received your booking request
            for <strong>{submittedData?.guests} guests</strong> on{" "}
            <strong>{submittedData?.date}</strong> at <strong>{submittedData?.time}</strong>.
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "0.95rem",
              color: "#7A6A5A",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            We'll send a confirmation to <strong>{submittedData?.email}</strong> within 24 hours.
            If you need to speak with us directly, call us or send us a message.
          </p>
          <button
            onClick={handleReset}
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
            Make Another Booking
          </button>
        </div>
      )}
    </div>
  );

  // Modal mode
  if (isModalOpen) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          background: "rgba(26,21,18,0.85)",
          backdropFilter: "blur(4px)",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget && onCloseModal) onCloseModal();
        }}
      >
        <div
          style={{
            background: "#F7F2EC",
            width: "100%",
            maxWidth: "720px",
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "2.5rem",
            position: "relative",
          }}
        >
          <button
            onClick={onCloseModal}
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#7A6A5A",
            }}
          >
            <X size={22} />
          </button>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C49A3C",
              marginBottom: "0.6rem",
            }}
          >
            Our Reservation
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "2rem",
              color: "#1A1512",
              marginBottom: "2rem",
            }}
          >
            Book a Table
          </h2>

          {formContent}
        </div>
      </div>
    );
  }

  // Inline section mode
  return (
    <section
      id="booking"
      className="section-padding"
      style={{
        background: "#EDE5D8",
      }}
    >
      <div
        className="responsive-grid-booking"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Left info panel */}
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
            Our Reservation
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#1A1512",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            Book a Table
          </h2>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#7A6A5A",
              marginBottom: "2rem",
            }}
          >
            Reserve your spot at Onyx Espresso Bar. Whether it's a quiet weekday
            breakfast or a weekend brunch with friends, we'd love to have you.
            Fill in the form and we'll confirm within 24 hours.
          </p>

          {/* Info boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { label: "Opening Hours", value: "Mon – Sun: 7:00 AM – 2:00 PM" },
              { label: "Location", value: "191 Maitland road" },
              { label: "Phone", value: "02 4049 6013" },
            ].map((info) => (
              <div
                key={info.label}
                style={{
                  padding: "1.25rem 1.5rem",
                  background: "#FFFFFF",
                  borderLeft: "3px solid #C49A3C",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C49A3C",
                    marginBottom: "0.3rem",
                  }}
                >
                  {info.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.9rem",
                    color: "#1A1512",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div style={{ background: "#FFFFFF", padding: "2.5rem" }}>
          {formContent}
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
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
  borderRadius: 0,
};

const errorStyle: React.CSSProperties = {
  fontFamily: "'Nunito', sans-serif",
  fontSize: "0.75rem",
  color: "#d4183d",
  marginTop: "0.3rem",
};
