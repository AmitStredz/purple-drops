import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Switch } from "./ui/switch";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-3 sm:px-10 font-[100] text-white bg-[#190024] bg-opacity-40 backdrop-blur-md z-[1000]">
      {/* <div className="text-yellow-400 font-bold text-lg">Moonex</div> */}
      <img
        src="logo.png"
        className="w-32 sm:w-60 z-50 cursor-pointer"
        onClick={() => navigate("/")}
      ></img>
      <nav className="hidden md:flex gap-10 lg:gap-20 z-50 ">
        <a
          className="relative  group cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9E00EA] to-[#FE0027] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>

        <a className="relative  group cursor-pointer">
          About
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9E00EA] to-[#FE0027] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a
          className="relative  group cursor-pointer"
          onClick={() => navigate("/services")}
        >
          Services
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9E00EA] to-[#FE0027] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative  group cursor-pointer">
          Works
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9E00EA] to-[#FE0027] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative  group cursor-pointer">
          Careers
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9E00EA] to-[#FE0027] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative  group cursor-pointer">
          Let's Talk
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9E00EA] to-[#FE0027] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <div>
          <Switch id="dark-mode" />
        </div>
      </nav>
      <div className="flex md:hidden z-50">
        <HiMenu size={30} onClick={() => setIsMenu(!isMenu)} />
      </div>

      <div
        className={` fixed p-5 px-14 flex flex-col items-center justify-evenly h z-[10000] h-screen w-screen top-0 gap-10  transition-all bg-[#071624] ${
          isMenu ? "right-0" : "-right-[500%]"
        }`}
      >
        <div className="flex items-end w-full">
          <IoClose size={30} onClick={() => setIsMenu(!isMenu)} />
        </div>

        {/* <nav className="flex flex-col justify-evenly w-screen h-screen sm:hidden"> */}
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Home
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>

        <a className="relative hover:text-yellow-400 group cursor-pointer">
          About Us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Roadmap
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          FAQs
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        <a className="relative hover:text-yellow-400 group cursor-pointer">
          Contact Us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
        {/* </nav> */}
      </div>
    </header>
  );
  // return (
  //   <div className="fixed top-0 flex justify-between items-center p-3 sm:px-10 font-[100] text-white bg-[#190024] bg-opacity-40 backdrop-blur-md">
  //     <span>ewewwew</span>
  //     <span>ewewwew</span>
  //     <span>ewewwew</span>
  //     <span>ewewwew</span>
  //     <span>ewewwew</span>
  //   </div>

  // );
}
