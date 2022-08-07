import React from "react";

export default function Hero() {
    return (
        <div
            className="min-h-screen w-full flex justify-center"
            style={{
                backgroundImage: "url(/assets/bg.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-3xl px-8 flex items-center mt-[10vh]">
                <div className="flex flex-col justify-center items-start text-white font-semibold">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-black-600 leading-normal font-bold">
                        Want to learn about new technologies{" "}
                        <strong>RAIT</strong>.
                    </h1>
                    <p className="text-black-500 mt-6 mb-8 pr-4">
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
