import React, { useState } from "react";

const FAQ = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-[80px] flex flex-col items-center mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8">
            <button
                className="faq-btn flex w-full items-center text-left"
                onClick={() => setOpen(!open)}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-blue-100 bgOpacity-5 text-blue-100">
                    <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        className={`fill-current ${open ? "rotate-180" : ""}`}
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                        />
                    </svg>
                </div>
                <div className="w-full">
                    <h4 className="text-base font-semibold text-black sm:text-lg">
                        Do you should attend RAIT?
                    </h4>
                </div>
            </button>
            <div
                className={`px-4 mt-2 text-justify ${
                    open
                        ? "opacity-100 scale-100 ease-out duration-200 "
                        : "opacity-0 hidden scale-95"
                }`}
            >
                <p className="py-3 text-base leading-relaxed text-bodyColor">
                    RAIT is a conference on advanced networking and
                    communications topics. Conferences focuses on promotion of
                    intense conversation between academic and industry to bridge
                    the gap between academic research, industry initiatives, and
                    governmental policies.
                </p>
            </div>
        </div>
    );
};

export default function FAQs() {
    return (
        <section className="relative z-20 overflow-hidden bg-blue-100 pt-16 pb-12 lg:pt-[80px] lg:pb-[90px]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                            <span className="mb-6 block font-semibold text-blue-500 text-4xl">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-xl font-bold text-dark">
                                Any Questions? Answered
                            </h2>
                            <p className="text-lg leading-relaxed text-bodyColor sm:text-xl sm:leading-relaxed">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <FAQ />
                        <FAQ />
                        <FAQ />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <FAQ />
                        <FAQ />
                        <FAQ />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.2"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopOpacity="0.36" />
                            <stop offset="1" stopOpacity="0" />
                            <stop offset="1" stopOpacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
}
