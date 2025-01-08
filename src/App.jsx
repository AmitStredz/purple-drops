import { Routes, Route } from "react-router";
import "./App.css";
import Homepage from "./components/homepage/homepage";
import Services from "./components/services/services";

import avatar1 from "./assets/avatar1.png";
import { useEffect, useRef } from "react";

function App() {
  return (
    <div className="relative w-screen h-full">
      <div className="fixed bottom-3 sm:bottom-10 right-3 sm:right-10 avatar-container z-[100]">
        <div className="relative flex justify-center items-center w-28 sm:w-60 h-28 sm:h-60">
          <img
            src={avatar1}
            alt="Avatar"
            className="absolute w-16 sm:w-32 bg-gradient-to-br from-[#5C0188] to-[#240135] rounded-full"
            id="circleText"
          />

          <svg viewBox="0 0 100 100" className="textrotate  w-full h-full">
            <defs>
              <path
                id="circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className=" text-[5px] sm:text-[10px]" fill="white" fontWeight={100}>
              <textPath href="#circle" className="font-zona tracking-[3px] sm:tracking-[0.4px]" >
                •  G E T I N T O U C H •  G E T  I N T O U C H
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
