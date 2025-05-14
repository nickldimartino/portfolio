import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CONTRIBUTIONS } from "../constants";

const Contributions = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? CONTRIBUTIONS.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === CONTRIBUTIONS.length - 1 ? 0 : prevIndex + 1));
  };

  const { title, description, type, link } = CONTRIBUTIONS[index];

  return (
    <div id="contributions" className="w-full max-w-4xl mx-auto">

      <h2 className="my-10 text-center text-4xl font-semibold">Contributions</h2>

      <div className="h-[375px] flex flex-col justify-between px-6 transition-all duration-500 text-center">
        {/* Top: Type & Title */}
        <div className="space-y-2">
          <p className="text-sm text-neutral-500">{type}</p>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {/* Middle: Description & Link */}
        <div className="flex flex-col justify-center items-center flex-grow space-y-4">
          <p className="text-neutral-500 max-h-[125px] overflow-hidden">
            {description}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              className="inline-block text-md text-neutral-500 hover:text-blue-500 hover:border-blue-500 border-neutral-500 border-b-2 border-t-2 px-2"
            >
              View Material
            </a>
          )}
        </div>

        {/* Bottom: Arrows */}
        <div className="flex justify-between px-4 mb-10">
          <button onClick={prev} className="hover:text-blue-500 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="hover:text-blue-500 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
