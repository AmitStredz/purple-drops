import React from "react";
import { GoArrowRight } from "react-icons/go";

import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import img4 from "../../../assets/4.png";

export default function Page2() {
  const data = [
    {
      title: "BLOCKCHAIN SOLUTIONS",
      description:
        "Revolutionize your business with blockchain powered decentralized ecosystems, leveraging smart contracts for unmatched transparency, efficiency, and trust.",
      labels: [
        "Crypto Games",
        "Smart contract developement",
        "ICO (solana and Ethereum)",
        "Token development",
        "DAPP",
      ],
      img: "img1",
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      description:
        "Leverage AI to streamline processes, unlock insights, and drive strategic growth with intelligent automation and predictive analytics.",
      labels: [
        "Automation",
        "Chat bots",
        "LLM",
        "Face detection",
        "Object detection for industries like manufacturing or retail",
      ],
      img: "img2",
    },
    {
      title: "ERP SOFTWARE DEVELOPMENT",
      description:
        "Empower your business with flexible, high-performance ERP solutions that centralize operations, enhance productivity, and enable data-driven decisions",
      labels: [
        "Financial Management",
        "Supply Chain Management",
        "HR Management",
        "Project Management",
        "Production Manufacturing",
        "CRM",
      ],
      img: "img3",
    },
    {
      title: "FINTECH SOLUTIONS",
      description:
        "Transform financial services with innovative technology, enabling secure, seamless transactions and exceptional customer experiences in modern financial ecosystems.",
      labels: ["Payement gateway", "UPI payment", "Blockchain powered banking"],
      img: "img4",
    },
  ];
  return (
    <div className="relative flex flex-col gap-10 p-10 z-50 overflow-hidden">
      <div className="header flex justify-between z-50">
        <div className="flex flex-col font-[300]">
          <span className="text-[20px]">SERVICES</span>
          <span className="text-[62px]">WHAT WE ARE</span>
          <span className="text-[62px]">OFFERING</span>
        </div>
        <div>
          <button className="p-7 px-10 rounded-full border text-[20px] hover:bg-white hover:bg-opacity-20 transition-all">
            EXPLORE ALL
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-5 w-full z-50">
        {data.map((info, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 p-5 rounded-[2.5rem] bg-[#5E0289]"
          >
            <div className="header flex justify-between w-full">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-[30px] font-semibold">{info.title}</span>
                <div className="w-full flex flex-wrap gap-3">
                  {info.labels.map((label, index) => (
                    <span
                      className="p-2 px-3 border rounded-full text-[11px] hover:bg-white hover:bg-opacity-25 cursor-pointer transition-all"
                      key={index}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="">
                <GoArrowRight
                  className="rounded-full p-3 bg-white bg-opacity-25 hover:bg-opacity-35 transition-all cursor-pointer"
                  size={50}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-[16px]">{info.description}</span>
              <img src={img1} alt={info.img} className="w-40"></img>
            </div>
          </div>
        ))}
      </div>
      <img
        src="/pinkEllipse1.png"
        className="absolute rotate-90 -top-[40%] blur-[100px] opacity-50"
      ></img>
    </div>
  );
}
