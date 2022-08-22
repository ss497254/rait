import React from "react";

export default function Hero() {
    return (
        <div
            className="min-h-screen w-full flex justify-center bg-gray-700"
            style={{
                backgroundImage: "url(/~rait/bg.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-3xl px-8 py-8 flex items-center">
                <div className="flex flex-col justify-center items-start text-white font-bold">
                    <p className="font-semibold text-3xl mb-4 pr-4">
                        5th IEEE International Conference on
                    </p>
                    <h1 className="text-4xl lg:text-6xl xl:text-5xl leading-10">
                        Recent Advancements in Information Technology
                        <p className="text-3xl mt-4">(RAIT 2023)</p>
                    </h1>
                    <a
                        href="#about"
                        className="p-2 mt-12 mx-2 px-4 text-white rounded bg-blue-500"
                    >
                        Know more
                    </a>
                </div>
            </div>
        </div>
    );
}
