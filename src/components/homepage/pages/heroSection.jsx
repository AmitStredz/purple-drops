import React from "react";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col sm:px-10 pb-20 justify-center font-zona text-white w-full h-full z-50 overflow-hidden">
      <div className="flex flex-col justify-center h-screen  italic text-[40px] sm:text-[50px] md:text-[100px] font-[900]">
        <div className="w-full z-50">
          <span className="bg-gradient-to-r from-[#9848FB]  to-[#E8B800] bg-clip-text text-transparent w-full p-4">
            CREATIVITY{"   "}
          </span>
        </div>
        <span className="px-4 z-50">DESIGN & DEVELOPMENT</span>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 z-50 px-4">
          <div className="flex sm:flex-col font-light text-[16px] sm:text-[22px] not-italic">
            <span>FOCUSED ON</span>
            <span>BUSINESS GOALS</span>
          </div>
          <span>TECH FOR GOOD</span>
        </div>
      </div>

      <div className="flex justify-center w-full px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10 w-full z-50">
          <div className="flex flex-col gap-5 text-[14px] md:text-[20px] md:w-2/5">
            <span className="font-bold">PURPLEDROPS AI SOLUTIONS</span>
            <span>
              We introduce methodologies, processes, and learnings to drive
              digital innovation projects.
            </span>
            <div className="">
              <button className="p-3 px-4 font-semibold text-[10px] sm:text-[15px] rounded-full text-black bg-white hover:bg-opacity-80">
                Book a Project?
              </button>
            </div>
          </div>

          <div className="flex flex-col text-[18px] sm:text-[20px] md:text-[42px] md:w-3/5 w-full">
            <span className="w-full">
              We are a creative design and digital product agency that
              collaborates with startups and companies to innovate and build
              products and services through exceptional digital experiences.
            </span>
            <span className="font-bold">
              Our main skills are focused on branding, UX/UI design, mobile
              and web development.
            </span>
          </div>
        </div>
      </div>
      <img
        src="/purpleEllipse1.png"
        className="absolute w- -top-[5%] -right-[10%] blur-[100px] opacity-60"
      ></img>
      <img
        src="/pinkEllipse1.png"
        className="absolute w-[40rem] top-[6%] left-[10%] blur-[100px] opacity-30 "
      ></img>
    </div>
  );
}
