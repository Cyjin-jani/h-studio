import type { FC } from "react";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="bg-white py-8 md:py-16 px-4 md:px-0">
      <div className="container mx-auto max-w-[960px]">
        <h2 className="my-8 md:my-12 text-center font-bold text-3xl text-text-primary">
          수강 후기
        </h2>
        <Marquee pauseOnHover={true} speed={50} gradient={false} className="py-4" autoFill={true}>
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mr-8 min-w-[240px] max-w-[380px] rounded-lg bg-gray-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.lesson}</p>
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </Marquee>

        <div className="mt-12 text-center">
          <a href={ExternalLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg border-2 border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
            >
              후기 더 보러가기
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const ExternalLink =
  "https://map.naver.com/p/entry/place/1995185054?c=15.00,0,0,0,dh&placePath=/review?additionalHeight=76&from=map&fromPanelNum=1&locale=ko&svcName=map_pcv5&timestamp=202508030019&fromPanelNum=1&additionalHeight=76&timestamp=202508022331&locale=ko&svcName=map_pcv5&from=map";
