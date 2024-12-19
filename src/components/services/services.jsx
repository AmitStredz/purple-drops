import React from "react";
import Navbar from "../navbar";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
// import Page3 from "./pages/page3";
import Footer from "../footer";

export default function Services() {
  return (
    <div className="w-full h-full bg-[#190024] text-white font-zona font-light overflow-hidden">
      <Navbar />
      <Page1 />
      {/* <Page2 /> */}
      {/* <Page3 /> */}
      <Footer />
    </div>
  );
}
