// import Image from "next/image";
import { Inter } from "next/font/google";

import MainTitleSection from "@/components/home/MainTitleSection";
import GreetingSection from "@/components/home/GreetingSection";
import LinkSection from "@/components/home/LinkSection";
import CustomHR from "@/components/home/CustomHR";
import IntroduceSection from "@/components/home/IntroduceSection";
import SongsSection from "@/components/home/SongsSection/SongsSection";
import WorkExpSection from "@/components/home/WorkExpSection/WorkExpSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`mx-auto px-4 py-16 md:px-8 max-w-[500px] ${inter.className}`}>
      <MainTitleSection />
      <GreetingSection />
      <LinkSection />
      <CustomHR />
      <IntroduceSection />
      <CustomHR />
      <SongsSection />
      <CustomHR />
      <WorkExpSection />
      <CustomHR />
    </main>
  );
}
