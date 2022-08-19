import React from "react";

export default function Hero() {
    return (
        <div
            className="min-h-screen w-full flex justify-center bg-gray-700"
            style={{
                backgroundImage: "url(/assets/bg.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-3xl px-8 py-8 flex items-center">
                <div className="flex flex-col justify-center items-start text-white font-bold">
                    <p className="font-semibold text-3xl mb-2 pr-4">
                        5th IEEE International Conference on
                    </p>
                    <h1 className="text-5xl lg:text-6xl xl:text-5xl leading-normal">
                        Recent Advancements in Information Technology
                        <br />
                        <span className="text-3xl">(RAIT 2023)</span>
                        {/* <br />
                        <span className="text-4xl">
                            <span className="text-green-300">2023</span>
                        </span> */}
                    </h1>
                    <a
                        href="#about"
                        className="p-2 mt-12 px-4 text-white rounded bg-blue-500"
                    >
                        Know more
                    </a>
                </div>
            </div>
        </div>
    );
}
