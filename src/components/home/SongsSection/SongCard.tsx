import React, { type ReactNode } from "react";

interface SongCard {
  children: ReactNode;
}

const SongCard = ({ children }: SongCard) => {
  return (
    <div className="w-[80px] h-[80px] p-[12px] flex items-center justify-center border border-gray-400 rounded-lg">
      {children}
    </div>
  );
};

export default SongCard;
