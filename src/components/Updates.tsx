import React, { useState } from "react";

const Accordian = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center w-full  border border-gray-300 rounded-sm border-l-4 border-l-blue-500 bg-white px-5 py-6">
            <button
                className="faq-btn flex w-full gap-4 items-center text-left"
                onClick={() => setOpen(!open)}
            >
                <div className="w-full">
                    <h4 className="text-base font-medium text-black text-justify">
                        Abstract and Paper submission deadline in Research and
                        Applied Data Science Tracks extended.
                    </h4>
                </div>
                <div className="flex h-full px-1 items-center rounded-lg bgOpacity-5 text-gray-100">
                    <svg
                        width="16"
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
            </button>
            <div
                className={`text-justify ${
                    open
                        ? "opacity-100 scale-100 ease-out duration-200 "
                        : "opacity-0 hidden scale-95"
                }`}
            >
                <p className="py-3 text-sm leading-relaxed text-bodyColor">
                    It takes 2-3 weeks to get your first blog post ready. That
                    includes the in-depth research & creation of your monthly
                    content marketing strategy that we do before writing your
                    first blog post, Ipsum available .
                </p>
            </div>
        </div>
    );
};

export default function Updates() {
    return (
        <div className="pmd:py-4 bg-blue-100 py-12">
            <h1 className="w-full text-center my-16 text-4xl font-bold">
                Updates
            </h1>
            <h2 className="text-center text-2xl mb-20">Coming Soon...</h2>
            {/* <div className="w-[90vw] mx-auto max-w-5xl flex flex-col gap-4 mb-20 lg:mb-24">
                <Accordian />
                <Accordian />
                <Accordian />
                <Accordian />
            </div> */}
        </div>
    );
}
