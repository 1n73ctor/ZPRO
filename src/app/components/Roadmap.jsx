import React from "react";
import Image from "next/image";

function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div
        data-aos="fade-down"
        className="self-center flex flex-col items-center mb-10 md:mb-12"
      >
        <div>
          <p className="p-2 text-xl font-[800] text-[#5997f3] text-center">
            Our Revolutionary
          </p>
        </div>
        <div>
          <span className="text-6xl font-bold text-[#f5f5f5] tracking-wider text-center">
            Roadmap
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full min-w-[300px] gap-10 mx-auto">
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="border border-solid bg-[#393a77] border-[#62CDFF] rounded-3xl w-full p-8 mx-auto hover:shadow-[0_5px_15px_#5997f3]"
        >
          <div className="flex justify-center mb-4">
            <h5 className="font-3xl font-[700] text-lg text-[#5997f3]">
              Phase I
            </h5>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex justify-center items-center">
              <Image
                src={"./check.svg"}
                width={30}
                height={30}
                alt="check"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"Launch of our Token"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./check.svg"}
                width={30}
                height={30}
                alt="check"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"Release main website"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./check.svg"}
                width={30}
                height={30}
                alt="check"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"500+ holders"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./check.svg"}
                width={30}
                height={30}
                alt="check"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"Small Partnerships"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./check.svg"}
                width={30}
                height={30}
                alt="check"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"ZAT Tools V1 Platform"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./check.svg"}
                width={30}
                height={30}
                alt="check"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"ZAT Tools V1 Platform"}</span>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="border border-solid bg-[#393a77] border-[#62CDFF] rounded-3xl w-full p-8 mx-auto hover:shadow-[0_5px_15px_#5997f3]"
        >
          <div className="flex justify-center mb-4">
            <h5 className="font-3xl font-[700] text-lg text-[#5997f3]">
              Phase II
            </h5>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"2000+ Holders"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"CoinGecko Listing"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"CoinMarketCap Listing"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"TechRate Audit"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">
                {"Utility Development Updates"}
              </span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"Certik Audit"}</span>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="border border-solid bg-[#393a77] border-[#62CDFF] rounded-3xl w-full p-8 mx-auto hover:shadow-[0_5px_15px_#5997f3]"
        >
          <div className="flex justify-center mb-4">
            <h5 className="font-3xl font-[700] text-lg text-[#5997f3]">
              Phase III
            </h5>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"Ability to Stake ZAT"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"ZAT Escrow Service"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">
                {"NFT Release (Staking Booster)"}
              </span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"5000+ Holders"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"CEX Listing"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">
                {"Registered as Company LLC"}
              </span>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="border border-solid bg-[#393a77] border-[#62CDFF] rounded-3xl w-full p-8 mx-auto hover:shadow-[0_5px_15px_#5997f3]"
        >
          <div className="flex justify-center mb-4">
            <h5 className="font-3xl font-[700] text-lg text-[#5997f3]">
              Phase IV
            </h5>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex justify-center items-center">
              <Image
                src="./circle.svg"
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"ZAT Exchange (DEX)"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"ZAT Mobile App"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"ZAT Launchpad"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"15000+ holders"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"Big Partnerships"}</span>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"./circle.svg"}
                width={30}
                height={30}
                alt="circle"
                className="mr-2"
              />

              <span className="text-[#f5f5f5]">{"Listing on Binance"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
