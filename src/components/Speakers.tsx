import React from "react";
import SpeakerDetail from "./SpeakerDetail";

export default function Speakers() {
    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[100px] max-w-2xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                            Meet Our Speakers
                        </h2>
                        {/* <p className="text-md px-6 leading-relaxed text-body-color sm:leading-relaxed">
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p> */}
                    </div>
                </div>
            </div>
            <h2 className="text-center text-3xl -mt-12 font-semibold mb-20">
                Keynote speakers
            </h2>
            <h2 className="text-center text-2xl -mt-12 mb-20">
                Coming Soon...
            </h2>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                <SpeakerDetail />
                <SpeakerDetail />
                <SpeakerDetail />
            </div> */}
            <h2 className="text-center text-3xl mb-20 mt-10 font-semibold">
                Tutorial speakers
            </h2>
            <h2 className="text-center text-2xl -mt-12 mb-20">
                Coming Soon...
            </h2>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                <SpeakerDetail />
                <SpeakerDetail />
                <SpeakerDetail />
                <SpeakerDetail />
                <SpeakerDetail />
                <SpeakerDetail />
            </div> */}
        </section>
    );
}
