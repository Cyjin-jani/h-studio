"use client";

import Image from "next/image";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { LESSON_POSTS, RESERVATION_LINKS } from "@/lib/constants";

const Programs: FC = () => {
  const handleOpenBooking = () => {
    window.open(RESERVATION_LINKS.main, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="programs" className="bg-surface-primary py-8 md:py-16 px-4 md:px-0">
      <div className="container mx-auto max-w-[960px]">
        <h2 className="font-bold my-8 md:my-12 text-center text-3xl text-text-primary">
          레슨 소개
        </h2>
        <div className="flex gap-8 justify-between flex-wrap">
          {LESSON_POSTS.map((program) => (
            <a
              key={program.id}
              href={RESERVATION_LINKS.main}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white cursor-pointer flex h-[160px] items-center justify-between md:w-[calc(50%-1rem)] p-5 rounded-xl shadow-md transition-all w-full hover:shadow-lg"
            >
              <div className="flex-1 pr-6">
                <h3 className="font-semibold line-clamp-2 mb-2 text-lg text-blue-800">
                  {program.title}
                </h3>
                <p className="leading-relaxed line-clamp-2 text-gray-600 text-sm">
                  {program.description}
                </p>
              </div>
              <div className="relative h-[120px] w-[120px] flex-shrink-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  quality={100}
                  priority
                  className="rounded-lg object-cover"
                />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg border-2 border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
            onClick={handleOpenBooking}
          >
            더 많은 레슨 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
