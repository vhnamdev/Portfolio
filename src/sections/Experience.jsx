import React from "react";
import TitleHeader from "../components/TitleHeader";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full md:mt-20 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Experience" />

        <div className="mt-24 grid xl:grid-cols-2 md:grid-cols-1 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row items-center bg-[#0a0a0a] rounded-2xl overflow-hidden border border-transparent hover:border-[#a600ff]/60 transition-all duration-500 hover:shadow-[0_0_40px_#a600ff33]"
            >
              {/* Ảnh bên trái */}
              <div className="w-full md:w-1/2 overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Nội dung bên phải */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-white space-y-3">
                <h2 className="text-2xl font-semibold text-[#ff00ff]">
                  {exp.position}
                </h2>
                <h3 className="text-lg font-medium text-gray-200">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-400 italic">{exp.duration}</p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  {exp.description}
                </p>
              </div>

              {/* Hiệu ứng tím phát sáng nhẹ */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff00ff33] via-[#a600ff22] to-transparent blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
