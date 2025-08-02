import Image from "next/image";
import type { FC } from "react";
import { InstagramIcon, NaverIcon, YoutubeIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { TEACHER } from "@/lib/constants";

const Teachers: FC = () => {
  return (
    <section id="instructors" className="bg-surface-primary py-8 md:py-16">
      <div className="container mx-auto max-w-[960px]">
        <h2 className="my-8 md:my-12 text-center font-bold text-3xl text-text-primary">
          강사 소개
        </h2>

        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="md:flex">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 p-8 text-center text-white md:w-1/3">
              <div className="relative mx-auto mb-6 h-32 w-32">
                <Image
                  src={TEACHER.image}
                  alt={TEACHER.name}
                  fill
                  className="rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>
              <h3 className="mb-2 font-bold text-2xl">{TEACHER.name}</h3>
              <p className="text-neutral-muted">{TEACHER.role}</p>
            </div>

            <div className="p-8 md:w-2/3">
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 font-semibold text-lg text-text-brand">주요 경력</h4>
                  <ul className="space-y-2">
                    {TEACHER.experience.map((item, index) => (
                      <li key={`experience-${TEACHER.id}-${index}`} className="flex items-start">
                        <span className="mr-2 text-accent-primary">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 font-semibold text-lg text-text-brand">대표 음원</h4>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {TEACHER.albums.map((album) => (
                      <a
                        key={`album-${album.title}`}
                        href={album.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center"
                      >
                        <div className="relative mb-2 aspect-square w-full">
                          <Image
                            src={album.cover}
                            alt={album.title}
                            fill
                            className="rounded-lg object-cover shadow-md"
                          />
                        </div>
                        <div className="text-xs">
                          <p className="mb-1 font-semibold text-gray-800">{album.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-lg text-text-brand">
                    소셜 미디어 & 블로그
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {TEACHER.social.instagram && (
                      <Button
                        asChild
                        variant="outline"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:text-white border-0"
                      >
                        <a
                          href={TEACHER.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <InstagramIcon />
                          인스타그램
                        </a>
                      </Button>
                    )}
                    {TEACHER.social.youtube && (
                      <Button
                        asChild
                        variant="outline"
                        className="bg-red-600 text-white hover:bg-red-700 hover:text-white border-0"
                      >
                        <a
                          href={TEACHER.social.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <YoutubeIcon />
                          유튜브
                        </a>
                      </Button>
                    )}
                    {TEACHER.social.blog && (
                      <Button
                        asChild
                        variant="outline"
                        className="bg-green-500 text-white hover:bg-green-600 hover:text-white border-0"
                      >
                        <a
                          href={TEACHER.social.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <NaverIcon />
                          블로그
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
