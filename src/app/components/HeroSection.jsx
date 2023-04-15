import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="hero_section w-full h-auto my-20 flex justify-center items-center text-center">
      <div className="w-[50%] gap-48 my-20">
        <div data-aos="zoom-in">
          <h1 className="text-[#f5f5f5] md:text-5xl lg:text-7xl text-4xl font-bold mb-12 tracking-tight">
            Innovative Solutions for a Changing{" "}
            <span className="text-[#5997f3]">World</span>
          </h1>
          <p className="mt-8 text-[#f5f5f5] text-base leading-normal font-semibold">
            The materialization of this vision consists of several platforms,
            specifically ZAT Tools, ZAT Market and our upcoming ZAT Exchange.
            Despite the fact that these are separate platforms, they share
            common values.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-8 my-20  justify-center items-center text-center"
        >
          <button className="w-[300px] h-12 rounded p-2 text-lg font-semibold text-white shadow-[0_0_40px_40px_#5997f3_inset,0_0_0_0_#5997f3] transition-all duration ease-[ease-in-out] border-[#5997f3] hover:shadow-[0_0_10px_0_#5997f3_inset,0_0_10px_4px_#5997f3] hover:text-[#5997f3]">
            <a
              href="https://pancakeswap.finance/add/BNB/0xc8c488fDbBB2E72E41710Ade67784f0812160210"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </button>
          <button className="w-[300px] flex justify-center items-center gap-2 h-12 rounded p-2 text-lg font-semibold text-white shadow-[0_0_40px_40px_#5997f3_inset,0_0_0_0_#5997f3] transition-all duration ease-[ease-in-out] border-[#5997f3] hover:shadow-[0_0_10px_0_#5997f3_inset,0_0_10px_4px_#5997f3] hover:text-[#5997f3]">
            {" "}
            <Image
              width={35}
              height={35}
              alt="play"
              src={"/circled-play.png"}
            />
            <a
              href="https://youtu.be/b-drrILXk5I"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to Buy
            </a>{" "}
          </button>
        </div>
        {/* <div
          data-aos="zoom-in"
          className="text-[#f5f5f5] flex items-center justify-center gap-4 hover:text-[#5997f3] "
        >
          <a
            href="https://youtu.be/b-drrILXk5I"
            target="_blank"
            className="flex justify-center items-center gap-4 w-[200px] border rounded bg-[#5997f3] p-2"
          >
            <Image src="circled-play.png" alt="play" width={35} height={35} />
            How to Buy
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
