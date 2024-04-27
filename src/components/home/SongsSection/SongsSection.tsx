import React from "react";

import SongCard from "./SongCard";

const SongsSection = () => {
  const list = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <section className="text-gray-500">
      <h4>Songs</h4>
      <div className="grid justify-between grid-cols-3 md:grid-cols-4 gap-[32px] flex-wrap mt-[20px]">
        {list.map((item) => (
          <SongCard key={item}>{item}</SongCard>
        ))}
      </div>
    </section>
  );
};

export default SongsSection;
