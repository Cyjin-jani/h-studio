"use client";

import Image from "next/image";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/constants";

const InfoAndReservation: FC = () => {
  const studios = [
    {
      id: 1,
      name: "본점(왕십리점)",
      address: "서울시 성동구 왕십리로 222",
      subway: "왕십리역 1번 출구 도보 3분",
      link: EXTERNAL_LINKS.hanyangdae,
    },
    {
      id: 2,
      name: "한양대점",
      address: "서울시 성동구 한양대학로 333",
      subway: "한양대역 2번 출구 도보 5분",
      link: EXTERNAL_LINKS.hanyangdae,
    },
    {
      id: 3,
      name: "수유점",
      address: "서울시 강북구 수유로 444",
      subway: "수유역 4번 출구 도보 2분",
      link: EXTERNAL_LINKS.sooyou,
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 pt-8 pb-8 md:pb-16">
      <div className="container mx-auto max-w-[960px]">
        <div className="mx-auto">
          <div className="text-center mb-6">
            <h2 className="mt-10 mb-4 font-bold text-3xl text-text-primary">레슨 문의</h2>
            <p className="text-gray-600 text-lg">3개 지점에서 최고의 보컬 레슨을 경험해보세요</p>
            <p className="text-gray-600">궁금한 점이 있으시면 언제든지 연락주세요</p>
          </div>

          {/* 연락처 */}
          <div className="mb-8 text-center">
            <div className="flex gap-2 md:gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <a
                  href="https://pf.kakao.com/_miUFn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  <Image
                    src="/images/kakao-icon.svg"
                    alt="카카오톡 아이콘"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  카카오톡 문의
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📱</span>
                <span className="text-gray-700 font-medium">010-1234-5678</span>
              </div>
            </div>
          </div>

          {/* 스튜디오 지점 정보 */}
          <div className="mb-12 grid gap-4 md:grid-cols-3 px-4 md:px-0">
            {studios.map((studio) => (
              <div
                key={studio.id}
                className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[180px]"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{studio.name}</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700 text-sm font-medium">{studio.address}</p>
                      <p className="text-gray-600 text-xs flex items-center gap-1">
                        <span>🚇</span> {studio.subway}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full text-sm"
                    onClick={() => window.open(studio.link, "_blank")}
                  >
                    네이버로 예약하기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoAndReservation;
