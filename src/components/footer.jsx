import React from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { LuFacebook } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="flex flex-col gap-7 px-10 bg-gradient-to-b from-transparent to-[#420064]">
      <div className="flex justify-between p-5">
        <div className="flex flex-col justify-between">
          <span className="text-[18px]">Contacts</span>
          <div className="group transition-all cursor-default">
            <span className="text-[60px] font-bold group-hover:hidden transition-all\">Get in Touch</span>
            <span className="text-[60px] font-bold text-blue-700 hidden  group-hover:flex transition-all\">
              Let's Talk
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex flex-col gap-3">
            <span>FOLLOW ON SOCIAL</span>
            <div className="flex gap-10">
              <SlSocialInstagram
                size={50}
                color="black"
                className="p-2 bg-white rounded-full cursor-pointer"
              />
              <LuFacebook
                size={50}
                color="black"
                className="p-2 bg-white rounded-full cursor-pointer"
              />
              <TbBrandLinkedin
                size={50}
                color="black"
                className="p-2 bg-white rounded-full cursor-pointer"
              />

              <RiTwitterXLine
                size={50}
                color="black"
                className="p-2 bg-white rounded-full cursor-pointer"
              />
              <AiOutlineDiscord
                size={50}
                color="black"
                className="p-2 bg-white rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex gap-20 text-[16px] p-5">
        <div className="flex flex-col gap-2">
          <span>+91 8137079064</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>purpledrops.ai@gmail.com</span>
          <span>Join us Telegram</span>
          <span>What'sApp</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>02/222</span>
          <span>Ashobiya St.</span>
          <span>Kerala, India - 9800-009</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span>© 2024 purbledropsai. All rights reserved</span>
        <div className="flex gap-10">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Cookies</span>
        </div>
      </div>
      <div className="w-full items-center text-center">
        <img src="/styledLogo.png"></img>
      </div>
    </div>
  );
}
