import React from "react";
import HeroBackground from "components/HeroBackground";
import Speakers from "components/Speakers";
import SpeakerDetail from "components/SpeakerDetail";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Committee
                        </span>
                        <h2 className="mt-5 text-xl font-semibold">
                            Let's talk about <br />
                            Love to hear from you!
                        </h2>
                    </div>
                </div>
            </HeroBackground>
            <h2 className="text-center w-full my-16 text-2xl md:text-3xl font-bold">
                Our Committee
            </h2>
            <div className="mb-12 p-16 flex w-full gap-16 flex-col flex-wrap md:flex-row">
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
            </div>
        </section>
    );
}
