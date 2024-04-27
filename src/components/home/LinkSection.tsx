import React from "react";

const LinkSection = () => {
  return (
    <section className="mt-[40px] flex items-center justify-around">
      <a
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Instagram"
        href="https://twitter.com/oguzyagizkara"
        className="text-gray-500 py-[4px] px-[8px] transition-all rounded-full hover:text-gray-700 hover:bg-cyan-800/10"
      >
        Instagram
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Youtube"
        href="https://dribbble.com/oguzyagiz"
        className="text-gray-500 py-[4px] px-[8px] transition-all rounded-full hover:text-gray-700 hover:bg-cyan-800/10"
      >
        Youtube
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        aria-label="melon"
        href="https://layers.to/oguzyagizkara"
        className="text-gray-500 py-[4px] px-[8px] transition-all rounded-full hover:text-gray-700 hover:bg-cyan-800/10"
      >
        Melon
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Youtube Music"
        href="https://music.youtube.com/watch?v=IHnPDExiYX4&si=WUMU84h9xmta51Lt"
        className="text-gray-500 py-[4px] px-[8px] transition-all rounded-full hover:text-gray-700 hover:bg-cyan-800/10"
      >
        Youtube Music
      </a>
    </section>
  );
};

export default LinkSection;
