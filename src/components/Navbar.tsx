"use client";

import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { RESERVATION_LINKS } from "@/lib/constants";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-stone-700/50 border-b bg-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 영역 (왼쪽) */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="곰씨네 보컬 로고"
              width={140}
              height={45}
              className="h-8 w-auto sm:h-10 md:h-11 transition-transform duration-200 hover:scale-105"
              priority
            />
          </div>

          {/* 데스크톱 네비게이션 영역 (중앙) */}
          <ul className="hidden space-x-6 lg:space-x-8 md:flex">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href} className="group">
                <a
                  href={link.href}
                  className="after:-bottom-1 relative font-medium text-slate-200 transition-colors duration-200 after:absolute after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-200 hover:text-white group-hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 데스크톱 버튼 영역 (오른쪽) */}
          <div className="hidden md:flex">
            <a href={RESERVATION_LINKS.hanyangdae} target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                size="lg"
                className="rounded-lg bg-gradient-to-r from-yellow-500 via-brand-primary to-yellow-600 px-6 py-2 font-medium text-slate-900 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25"
                aria-label="수업 체험 신청하기"
              >
                수업 체험하기
              </Button>
            </a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-stone-700 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">{isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
              {/* 햄버거 아이콘 / X 아이콘 */}
              <div className="relative h-6 w-6 flex items-center justify-center">
                <span
                  className={`absolute h-[1px] w-6 transform bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-[1px] w-6 transform bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "translate-y-0 opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-[1px] w-6 transform bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-stone-700 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NAVIGATION_LINKS = [
  { href: "#programs", label: "레슨 소개" },
  { href: "#instructors", label: "강사 소개" },
  { href: "#testimonials", label: "수강 후기" },
  { href: "#contact", label: "레슨 문의" },
];
