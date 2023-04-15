import React from "react";

function Faq() {
  return (
    <section className="faq text-[#f5f5f5]" id="faq">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p
          data-aos="fade-down"
          className="p-2 text-xl font-[800] text-[#5997f3] text-center"
        >
          How it works
        </p>
        <h2
          data-aos="fade-down"
          className="mb-12 text-6xl font-bold text-[#f5f5f5] tracking-wider text-center"
        >
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-[#5997F3]">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              What is $ZPRO?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4">
              <p>
                $ZPRO stands short for the ‘ZAT Project’ and is the crypto
                currency that powers the entire project and all of its
                Utilities. .
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              How can I contact the team?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4">
              <p>
                Above this FAQ section our team members are shown. By clicking
                on their social icons you can contact them directly. You can
                also use our regular socials to get in touch!
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              When was $ZPRO launched?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <p>$ZPRO is to be launched in the beginning of March of 2022.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              How to buy $ZPRO?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <a
                href="https://www.youtube.com/watch?v=b-drrILXk5I"
                target="_blank"
              >
                Watch Youtube video for step by step guidence
              </a>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              Is Liquidity locked?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <p>
                Liquidity Locked on 17.03.2023{" "}
                <a
                  href="https://dxsale.app/app/v3_3/dxlockview?id=0&add=0xdBafC3A5C0F3526761056A14a1dF466ce1627F2b&type=lplock&chain=BSC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#5997F3]">read more</span>
                </a>
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              Is ownership of $ZPRO renounced?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <p>
                Ownership has not been renounced. This allows the token to be
                scalable and adaptable in the future as a utility token within
                the ecosystem of the ZAT Project. Which is necessary, because we
                will keep adding utilities to that Ecosystem.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              Was $ZPRO re-launched?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <p>
                No, ‘The ZAT Project’ is the evolution of the former ‘ZAT Coin’,
                but is a completely new token. Former holders of ‘ZAT Coin’ were
                however given the option to opt in early on $ZPRO.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              {" What was $ZPRO's starting marketcap?"}
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <p>Approximately 4000USD was the starting marketcap of $ZPRO.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              What is the current supply of $ZPRO?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <p>The current supply of $ZPRO tokens (60.000.000)</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#5997F3]">
              Did $ZPRO have a pre-sale?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4 space-y-2">
              <p>No</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Faq;
