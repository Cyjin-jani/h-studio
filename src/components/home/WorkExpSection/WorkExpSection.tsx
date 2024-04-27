import React from "react";

import WorkDesc from "./WorkDesc";

const WorkExpSection = () => {
  const workList = [
    {
      date: "2024 ~ 현재",
      desc: "대충 일한거11",
    },
    {
      date: "2023 ~ 2024",
      desc: "대충 일한거22",
    },
    {
      date: "2018 ~",
      desc: "학교 강사",
    },
    {
      date: "2014 ~",
      desc: "보컬 트레이너",
    },
  ];

  return (
    <section className="text-gray-500">
      <h4 className="mb-[20px]">Work Experience</h4>
      <div className="flex flex-col gap-[16px]">
        {workList.map((work) => (
          <WorkDesc key={work.desc} date={work.date} content={work.desc} />
        ))}
      </div>
    </section>
  );
};

export default WorkExpSection;
