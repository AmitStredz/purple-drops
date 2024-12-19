import React from "react";

export default function Page1() {
  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex justify-between gap-10 w-full z-50">
        <div className="flex flex-col px-5 gap-5 text-[20px] w-2/5">
          <span className="font-bold">PURPLEDROPS AI SOLUTIONS</span>
          <span>
            We introduce methodologies, processes, and learnings to drive
            digital innovation projects.
          </span>
          <div className="">
            <button className="p-3 px-4 font-semibold text-[15px] rounded-full text-black bg-white hover:bg-opacity-80">
              Book a Project?
            </button>
          </div>
        </div>

        <div className="flex flex-col text-[42px] w-3/5">
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
  );
}
