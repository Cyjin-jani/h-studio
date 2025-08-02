"use client";

import Image from "next/image";
import type { FC } from "react";

// import { useEffect, useState } from "react";

// const images = ["/images/studio1.jpg", "/images/studio2.jpg", "/images/studio3.jpg"];

const Hero: FC = () => {
  // const [currentImage, setCurrentImage] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((currentImage + 1) % images.length);
  //   }, 5000); // 5초마다 이미지 변경

  //   return () => clearInterval(interval);
  // }, [currentImage]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero.webp"
        alt="보컬 레슨 스튜디오"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="container relative z-20 mx-auto px-6 text-center">
        <h1 className="z-10 mb-6 text-center font-bold text-4xl md:text-5xl text-[#ffbf65] drop-shadow-2xl">
          곰씨네 보컬 스튜디오
        </h1>
        <h2 className="z-10 mb-8 text-center font-medium text-lg md:text-2xl text-white drop-shadow-lg">
          전문적인 보컬 레슨으로 여러분의 꿈을 현실로
        </h2>
        <div className="mx-auto max-w-2xl">
          <p className="z-10 mb-6 text-center text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-lg">
            각자의 개성과 잠재력을 최대한 발휘할 수 있도록
            <br />
            체계적이고 맞춤형 레슨을 제공합니다
          </p>
          <p className="z-10 text-center text-base text-gray-200 leading-relaxed drop-shadow-lg">
            초보자부터 전문가까지, 모든 레벨 환영
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-surface-dark/70 to-transparent" />
    </section>
  );
};

export default Hero;
