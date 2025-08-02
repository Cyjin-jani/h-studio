import type { FC } from "react";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoAndReservation from "@/components/InfoAndReservation";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";

const HomePage: FC = () => {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Teachers />
        <Testimonials />
        <InfoAndReservation />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default HomePage;
