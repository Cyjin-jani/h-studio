"use client";

import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { RESERVATION_LINKS } from "@/lib/constants";

const FloatingCTA: FC = () => {
  const handleClick = () => {
    window.open(RESERVATION_LINKS.hanyangdae, "_blank");
  };

  return (
    <>
      {/* Desktop CTA */}
      <div className="fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <Button
          size="lg"
          onClick={handleClick}
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-yellow-500 via-brand-primary to-yellow-600 px-20 py-6 font-bold text-gray-900 shadow-2xl transition-all duration-300 hover:shadow-yellow-500/25 hover:scale-110"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-brand-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <span className="relative">예약 & 문의하기</span>
        </Button>
      </div>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm p-4 md:hidden">
        <Button
          onClick={handleClick}
          className="group relative w-full overflow-hidden bg-gradient-to-r from-yellow-500 via-brand-primary to-yellow-600 font-bold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-yellow-500/25 py-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-brand-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <span className="relative">예약 & 문의하기</span>
        </Button>
      </div>
    </>
  );
};

export default FloatingCTA;
