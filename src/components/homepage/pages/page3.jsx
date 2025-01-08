import React from "react";

import avatar from "../../../assets/avatar.png";
import { Rating } from "@mui/material";

import textImg from "../../../assets/textImg.png";
import Marquee from "react-fast-marquee";

export default function Page3() {
  const clients = [
    {
      name: "Mr. John miller",
      position: "Co-Founder",
    },
    {
      name: "Hariharan.S",
      position: "Co-Founder",
    },
    {
      name: "Dios Anuojai",
      position: "Co-Founder",
    },
    {
      name: "Andro Augustaio",
      position: "Co-Founder",
    },
  ];
  const reviews = [
    {
      description:
        "Purpledrops demonstrates an excellent understand of user needs and all of their designs are creative and elegant in their simplicity. They’re very well out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      rating: 5,
    },
    {
      description:
        "Purpledrops demonstrates an excellent understand of user needs and all of their designs are creative and elegant in their simplicity. They’re very well out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      rating: 5,
    },
  ];
  return (
    <div className="flex flex-col p-3 sm:p-5 sm:px-10 w-full h-full">
      <div className="flex flex-col gap-10 justify-center w-full py-24">
        <div className="w-full">
          <span className="font-bold text-[18px] sm:text-[24px]">OUR CLIENTS SAY</span>
        </div>
        <div className="flex flex-wrap gap-10 sm:gap-20">
          {clients.map((client, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="">
                <img
                  src={avatar}
                  className="w-10 sm:w-16 bg-white rounded-full border-2 border-blue-500"
                ></img>
              </div>
              <span className="text-[14px] sm:text-[18px] sm:font-semibold">{client.name}</span>
              <span className="text-[10px] sm:text-[13px] -mt-1 text-slate-200">
                {client.position}
              </span>
            </div>
          ))}
        </div>

        {/* Review */}
        <div className="flex flex-col sm:flex-row gap-10">
          {reviews.map((review, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <div className="flex gap-3 ">
                <Rating name="read-only" value={review.rating} readOnly />
                <span>|</span>
                <span>{review.rating}</span>
              </div>
              <span className="text-[16px] sm:text-[28px]">{review.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center w-full max-sm:pb-20">
        {/* <span className="text-[122px] text-center font-bold">
          We're looking for new challenge
        </span> */}
        <img src={textImg} className="p-5 sm:p-10"></img>
      </div>
      <div className="flex sm:p-6 -mx-10 px-8 sm:px-14 bg-gradient-to-b from-[#563B63] to-[#6D3C86] overflow-hidden">
        <Marquee speed={120} gradient={false} >
          <span className="text-[40px] sm:text-[60px] font- ">LET'S WORK TOGETHER • &nbsp;</span>
          <span className="text-[40px] sm:text-[60px] font- ">LET'S WORK TOGETHER • &nbsp;</span>
        </Marquee>
      </div>
    </div>
  );
}
