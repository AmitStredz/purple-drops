import React from "react";

import textImg from "../../../assets/textImg.png";

import Marquee from "react-fast-marquee";

export default function Page1() {
  const solutions = [
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
    {
      title: "DESIGN AND DEVELOPMENT",
      description:
        "Inventing avant-garde mobile applications, dynamic websites and robust web apps, and SEO strategies driven by data to increase user engagement and monetization of business growth",
      labels: [
        "Mobile Application",
        "Web development",
        "Web App",
        "Cyber security",
        "Workpplace automation",
        "WEO",
      ],
      img: "img4",
    },
    {
      title: "OTHER SERVICES",
      description:
        "Inventing avant-garde mobile applications, dynamic websites and robust web apps, and SEO strategies driven by data to increase user engagement and monetization of business growth",
      labels: [
        "Logo design",
        "Roadmap and Whitepaper design",
        "Technical services",
        "Customer support/services",
      ],
      img: "img4",
    },
  ];
  return (
    <div className=" relative h-full w-full p-3">
      <div className="flex flex-col justify-center sm:p-10 py-20 sm:py-40 z-50">
        <span className="text-[14px] sm:text-[20px] z-50">SERVICES</span>
        <span className="text-[20px] sm:text-[50px] font-bold z-50">
          We enhance business performance globally by providing unique and
          inventive technology solutions as a mix of skills and imagination for
          growth and better working conditions.
        </span>
      </div>
      <div className="flex sm:flex-col max-sm:gap-3 text-[32px] sm:text-[62px] sm:px-10 italic z-50">
        <span className=" z-50">OUR</span>
        <span className=" z-50">SOLUTIONS</span>
      </div>
      <div className=" z-50">
        {solutions.map((item, index) => (
          <div>
            <div className="h-[1px] w-full my-10 bg-slate-400 z-50"></div>
            <div className="flex flex-col sm:flex-row justify-between sm:p-10  z-50">
              <div className="sm:w-2/5">
                <span className="text-[20px] font-bold z-50">{item.title}</span>
              </div>
              <div className="flex flex-col gap-5 sm:w-3/5">
                <span className="text-[16px] sm:text-[25px] z-50">{item.description}</span>
                <div className="w-full flex flex-wrap gap-3 z-50">
                  {item.labels.map((label, index) => (
                    <span
                      className="p-1 sm:p-2 px-2 sm:px-3 border rounded-full text-[10px] sm:text-[14px] hover:bg-white hover:bg-opacity-25 cursor-pointer transition-all z-50"
                      key={index}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full max-sm:py-10">
        <img src={textImg} className="p-5 sm:p-14"></img>
      </div>
      <div className="flex sm:p-6 -mx-10 px-8 sm:px-14 bg-gradient-to-b from-[#563B63] to-[#6D3C86] overflow-hidden">
        <Marquee speed={120} gradient={false} >
          <span className="text-[40px] sm:text-[60px] font- ">LET'S WORK TOGETHER • &nbsp;</span>
          <span className="text-[40px] sm:text-[60px] font- ">LET'S WORK TOGETHER • &nbsp;</span>
        </Marquee>
      </div>
      <img
        src="/purpleEllipse2.png"
        className="absolute w- -top-[5%] -right-[10%] blur-[100px] opacity-60"
      ></img>
      <img
        src="/pinkEllipse2.png"
        className="absolute w-[50rem] top-[10%] right-[40%] blur-[100px] opacity-40"
      ></img>
      <img
        src="/pinkEllipse2.png"
        className="absolute w-[60rem] top-[50%] right-[40%] blur-[100px] opacity-40"
      ></img>
      <img
        src="/pinkEllipse2.png"
        className="absolute w-[60rem] top-[55%] right-[10%] blur-[100px] opacity-40"
      ></img>
      <img
        src="/pinkEllipse2.png"
        className="absolute w-[60rem] top-[40%] right-[15%] blur-[100px] opacity-40"
      ></img>
    </div>
  );
}
