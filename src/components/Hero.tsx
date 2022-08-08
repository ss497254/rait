import React from "react";

export default function Hero() {
    return (
        <div
            className="min-h-screen w-full flex justify-center bg-gray-700"
            style={{
                backgroundImage: "url(/assets/bg.webp)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-3xl px-8 py-8 flex items-center mt-[5vh]">
                <div className="flex flex-col justify-center items-start text-white font-bold">
                    <h1 className="text-4xl lg:text-5xl xl:text-5xl leading-normal">
                        RAIT (Recent Advancements in Information Technology) .
                        <br />
                        <span className="text-3xl">
                            20<span className="text-green-500">22</span> - 20
                            <span className="text-blue-500">23</span>
                        </span>
                    </h1>
                    <p className="font-semibold text-lg mt-6 mb-8 pr-4">
                        Want to know about the recent advancements in tech.
                        Provide a network for all your needs with ease and fun
                        using RAIT discover interesting features from us. Lorem
                        ipsum dolor sit amet
                    </p>
                    <a
                        href="#about"
                        className="p-2 px-4 text-white rounded bg-blue-500"
                    >
                        Know more
                    </a>
                </div>
            </div>
        </div>
    );
}
