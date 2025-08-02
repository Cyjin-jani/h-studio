import type { FC } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

const Footer: FC = () => {
  return (
    <footer className="bg-stone-800 py-8 pb-[100px] text-slate-200">
      <div className="container mx-auto max-w-[960px] px-4 md:px-0">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-3">곰씨네 보컬</h3>
            <p className="text-sm text-slate-400">나만의 목소리를 찾아가는 공간</p>
          </div>

          <div className="flex gap-6 mb-12">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-brand-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-sm text-slate-400 border-t border-stone-700 pt-8 w-full text-center">
            <p>&copy; 2025 곰씨네 보컬. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
