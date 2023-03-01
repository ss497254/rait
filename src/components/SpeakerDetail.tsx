import React from "react";
import DottedBackground from "./DottedBackground";

export default function SpeakerDetail({ name, desc, src }: any) {
    return (
        <div className="mx-auto flex flex-col items-center mb-8 max-w-[320px]">
            <div className="relative z-10 mb-6 rounded-full">
                <img
                    src={src ?? "/~rait/profile.jpg"}
                    alt="image"
                    className="w-40 h-40 m-2 transition duration-500 rounded-full hover:scale-110"
                />
                <DottedBackground />
                <span className="absolute bottom-0 right-0">
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                            stroke="#13C296"
                        />
                    </svg>
                </span>
            </div>
            <div className="mb-2 text-xl font-medium text-center">{name}</div>
            <p className="px-8 mb-5 text-center text-body-color">{desc}</p>
        </div>
    );
}
