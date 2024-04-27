import React from "react";

interface WorkDescProps {
  date: string;
  content: string;
}

const WorkDesc = ({ date, content }: WorkDescProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="text-neutral-subtle w-[120px]">{date}</div>
      <div>
        <span className="text-gray-900">{content}</span>
      </div>
    </div>
  );
};

export default WorkDesc;
