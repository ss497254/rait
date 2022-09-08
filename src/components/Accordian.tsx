import React, { useState } from "react";

export type AccordianType = {
    title: React.ReactElement;
    content: React.ReactElement;
};

export default function ({ title, content }: AccordianType) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col my-10 justify-center min-h-[80px] items-center w-full border border-gray-300 rounded border-l-4 border-l-blue-500 bg-white px-5 py-6">
            <button
                className="faq-btn flex w-full gap-4 items-center text-left"
                onClick={() => setOpen(!open)}
            >
                <div className="w-full">{title}</div>
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
                        ? "opacity-100 scale-100 w-full ease-out duration-200 "
                        : "opacity-0 hidden scale-95"
                }`}
            >
                <p className="py-3 text-sm leading-relaxed">{content}</p>
            </div>
        </div>
    );
}
