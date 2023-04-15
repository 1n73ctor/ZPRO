import React from "react";
import Image from "next/image";

function Features() {
  return (
    <section id="features" className="flex flex-col">
      <div
        data-aos="fade-down"
        className="self-center flex flex-col items-center mb-10 md:mb-12"
      >
        <div className="list-features">
          <p className="p-2 text-xl font-[800] text-[#5997f3] text-center">
            Core
          </p>
        </div>
        <div>
          <span className="text-6xl font-bold text-[#f5f5f5] tracking-wider text-center">
            Features
          </span>
        </div>
      </div>
      <div className="list-features grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-20 text-[#f5f5f5] place-items-start place-content-center my-12">
        <div className="flex flex-col items-center feature-items">
          <Image
            src={"/project.svg"}
            alt="project Icon"
            width={96}
            height={96}
          />
          <div className="mt-12">
            <h4 className="font-bold text-2xl text-center mb-3">ZAT Project</h4>
            <p className=" font-semibold text text-center ">
              The ZAT Project and its various Utilities are here to make your
              experiences within the Crypto space safe and secure. Invest safely
              with ZAT’s Utilities!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center feature-items">
          <Image src={"/market.svg"} alt="Market Icon" width={96} height={96} />
          <div className="mt-12">
            <h4 className="font-bold text-2xl text-center mb-3">ZAT Market</h4>
            <p className=" font-semibold text text-center ">
              ZAT Market is a marketplace for freelance services within the
              crypto space. It offers everything a crypto project needs to
              succeed.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center feature-items">
          <Image src="/tools.svg" alt="tools Icon" width={96} height={96} />
          <div className="mt-12">
            <h4 className="font-bold text-2xl text-center mb-3">ZAT Tools</h4>
            <p className=" font-semibold text text-center ">
              ZAT Tools is a crypto listing platform. It provides safety and
              security for its users, as it exclusively lists legitimate tokens
              from verified developers.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center feature-items">
          <Image src="/escrow.png" alt="escrow Icon" width={96} height={96} />

          <div className="mt-12">
            <h4 className="font-bold text-2xl text-center mb-3">
              Escrow Services{" "}
            </h4>
            <p className=" font-semibold text text-center ">
              The ZAT Project also offers Escrow services for the Crypto and
              FIAT market. People can use our escrow platform to pay in crypto
              for items, services or anything you can imagine, while doing this
              completely safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
