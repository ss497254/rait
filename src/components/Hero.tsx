import React from "react";

export default function Hero() {
    return (
        <div
            className="min-h-screen max-w-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('assets/background.webp')",
            }}
        >
            <div className="flex flex-col lg:flex-row-reverse gap-20 px-8 pt-20 md:pt-0 md:px-12 lg:px-16">
                <ConferenceImg />
                <div className="flex flex-col justify-center items-start text-white">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                        Want to learn about new technologies{" "}
                        <strong>RAIT</strong>.
                    </h1>
                    <p className="text-black-500 mt-6 mb-8 pr-4">
                        Provide a network for all your needs with ease and fun
                        using RAIT discover interesting features from us. Lorem
                        ipsum dolor sit amet
                    </p>
                    <button className="p-2 px-4 text-white rounded bg-blue-500">
                        Know more
                    </button>
                </div>
            </div>
        </div>
    );
}

const ConferenceImg = () => {
    return (
        <div className="w-full px-4 md:px-0 text-white">
            <div className="relative z-10">
                <img
                    src="/assets/conference.jpg"
                    alt="hero"
                    className="rounded-xl hover:scale-[1.04] transition duration-500 cursor-pointer"
                />
                <div className="absolute -bottom-6 -left-6 z-[-1] fill-current">
                    <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                        />
                        <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                        />
                        <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                        />
                        <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                        />
                        <circle
                            cx="60.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3333 104)"
                        />
                        <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                        />
                        <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                        />
                        <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                        />
                        <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                        />
                        <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                        />
                        <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                        />
                        <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                        />
                        <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                        />
                        <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                        />
                        <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                        />
                        <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                        />
                        <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                        />
                        <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                        />
                        <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                        />
                        <circle
                            cx="60.3333"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 60.3333 31.0001)"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                        />
                        <circle
                            cx="88.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 88.6667 31.0001)"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                        />
                        <circle
                            cx="117.667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 117.667 31.0001)"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                        />
                        <circle
                            cx="74.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 74.6667 31.0001)"
                        />
                        <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                        />
                        <circle
                            cx="103"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 103 31.0001)"
                        />
                        <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                        />
                        <circle
                            cx="132"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 132 31.0001)"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3336)"
                        />
                        <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                        />
                        <circle
                            cx="31"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 31 16.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3336)"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3336)"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3336)"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3336)"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3336)"
                        />
                        <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                        />
                        <circle
                            cx="103"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 103 16.3336)"
                        />
                        <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                        />
                        <circle
                            cx="132"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 132 16.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                        />
                        <circle
                            cx="31"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 31 45.3336)"
                        />
                        <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66707)"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66707)"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66707)"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66707)"
                        />
                        <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                        />
                        <circle
                            cx="103"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 103 1.66707)"
                        />
                        <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                        />
                        <circle
                            cx="132"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 132 1.66707)"
                        />
                    </svg>
                </div>
                <div className="absolute -top-6 -right-6 z-[-1] fill-current">
                    <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                        />
                        <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                        />
                        <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                        />
                        <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                        />
                        <circle
                            cx="60.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3333 104)"
                        />
                        <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                        />
                        <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                        />
                        <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                        />
                        <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                        />
                        <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                        />
                        <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                        />
                        <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                        />
                        <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                        />
                        <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                        />
                        <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                        />
                        <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                        />
                        <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                        />
                        <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                        />
                        <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                        />
                        <circle
                            cx="60.3333"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 60.3333 31.0001)"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                        />
                        <circle
                            cx="88.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 88.6667 31.0001)"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                        />
                        <circle
                            cx="117.667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 117.667 31.0001)"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                        />
                        <circle
                            cx="74.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 74.6667 31.0001)"
                        />
                        <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                        />
                        <circle
                            cx="103"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 103 31.0001)"
                        />
                        <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                        />
                        <circle
                            cx="132"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 132 31.0001)"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3336)"
                        />
                        <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                        />
                        <circle
                            cx="31"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 31 16.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3336)"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3336)"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3336)"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3336)"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3336)"
                        />
                        <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                        />
                        <circle
                            cx="103"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 103 16.3336)"
                        />
                        <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                        />
                        <circle
                            cx="132"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 132 16.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                        />
                        <circle
                            cx="31"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 31 45.3336)"
                        />
                        <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66707)"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66707)"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66707)"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66707)"
                        />
                        <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                        />
                        <circle
                            cx="103"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 103 1.66707)"
                        />
                        <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                        />
                        <circle
                            cx="132"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 132 1.66707)"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
