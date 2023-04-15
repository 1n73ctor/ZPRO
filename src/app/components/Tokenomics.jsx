import React from "react";

function Tokenomics() {
  return (
    <section
      className="tokenomics transition-all duration-[ease-in-out] delay-[0.5s]"
      id="tokenomics"
    >
      <div
        data-aos="fade-down"
        className="self-center flex flex-col items-center mb-10 md:mb-12"
      >
        <div>
          <p className="p-2 text-xl font-[800] text-[#5997f3] text-center">
            $ZPRO
          </p>
        </div>
        <div>
          <span className="text-6xl font-bold text-[#f5f5f5] tracking-wider text-center">
            Tokenomics
          </span>
        </div>
      </div>

      <div className="aa grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-8 text-[#f5f5f5]">
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="border border-soild bg-[#393a77] border-[#62CDFF] w-[250px] p-4 flex flex-col items-center space-y-6 mx-auto rounded-lg shadow-[#5997f3_0px_10px_20px_-5px]"
        >
          <div>
            <h1>Name</h1>
          </div>
          <div>
            <span className="font-bold">The ZAT Project</span>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="border border-soild bg-[#393a77] border-[#62CDFF] w-[250px] p-4 flex flex-col items-center space-y-6 mx-auto rounded-lg shadow-[#5997f3_0px_10px_20px_-5px]"
        >
          <div>
            <h1>Symbol</h1>
          </div>
          <div>
            <span className="font-bold">$ZPRO</span>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="border border-soild bg-[#393a77] border-[#62CDFF] w-[250px] p-4 flex flex-col items-center space-y-6 mx-auto rounded-lg shadow-[#5997f3_0px_10px_20px_-5px]"
        >
          <div>
            <h1>Contract</h1>
          </div>
          <div>
            <span className="font-bold text-black">
              <button className="py-1 px-2 rounded bg-[#62CDFF]">
                <a
                  target="_blank"
                  href="https://bscscan.com/address/0xc8c488fDbBB2E72E41710Ade67784f0812160210"
                >
                  View Contract
                </a>
              </button>
            </span>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="border border-soild bg-[#393a77] border-[#62CDFF] w-[250px] p-4 flex flex-col items-center space-y-6 mx-auto rounded-lg shadow-[#5997f3_0px_10px_20px_-5px]"
        >
          <div>
            <h1>Total Supply</h1>
          </div>
          <div>
            <span className="font-bold">100M</span>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="border border-soild bg-[#393a77] border-[#62CDFF] w-[250px] p-4 flex flex-col items-center space-y-6 mx-auto rounded-lg shadow-[#5997f3_0px_10px_20px_-5px]"
        >
          <div>
            <h1>Buy Tax</h1>
          </div>
          <div>
            <span className="font-bold">10%</span>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="border border-soild bg-[#393a77] border-[#62CDFF] w-[250px] p-4 flex flex-col items-center space-y-6 mx-auto rounded-lg shadow-[#5997f3_0px_10px_20px_-5px]"
        >
          <div>
            <h1>Sell Tax</h1>
          </div>
          <div>
            <span className="font-bold">10%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
