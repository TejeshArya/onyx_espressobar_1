import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { OrderSection } from "@/components/sections/OrderSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

/* MARKER-MAKE-KIT-INVOKED */

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        background: "#F7F2EC",
        minHeight: "100vh",
      }}
    >
      <Navigation onBookNow={() => setBookingModalOpen(true)} />

      <main>
        <HeroSection onBookNow={() => setBookingModalOpen(true)} />
        <FeaturesSection />
        <AboutSection />
        <MenuSection />
        <ReviewsSection />
        <OrderSection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer onBookNow={() => setBookingModalOpen(true)} />

      {bookingModalOpen && (
        <BookingSection
          isModalOpen={true}
          onCloseModal={() => setBookingModalOpen(false)}
        />
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            background: "#C49A3C",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(26,21,18,0.25)",
            zIndex: 999,
            transition: "all 0.3s ease",
            animation: "fadeInUp 0.3s ease forwards",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1A1512";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#C49A3C";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F7F2EC; }
        ::-webkit-scrollbar-thumb { background: #C49A3C; border-radius: 3px; }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #C49A3C !important;
          box-shadow: 0 0 0 3px rgba(196,154,60,0.15);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
