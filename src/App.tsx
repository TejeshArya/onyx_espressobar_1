import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

/* MARKER-MAKE-KIT-INVOKED */

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

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
      `}</style>
    </div>
  );
}
