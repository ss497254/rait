import React from "react";
import HeroBackground from "components/HeroBackground";
import Accordian, { AccordianType } from "components/Accordian";

export default function Contact() {
    const data: AccordianType[] = [
        { title: "askdfhkasjdfkjakljsd fsd", content: <h2>asdfasdf</h2> },
        { title: "askdfhkasjdfkjakljsd fsd", content: <h2>asdfasdf</h2> },
        { title: "askdfhkasjdfkjakljsd fsd", content: <h2>asdfasdf</h2> },
        { title: "askdfhkasjdfkjakljsd fsd", content: <h2>asdfasdf</h2> },
        { title: "askdfhkasjdfkjakljsd fsd", content: <h2>asdfasdf</h2> },
        { title: "askdfhkasjdfkjakljsd fsd", content: <h2>asdfasdf</h2> },
        { title: "askdfhkasjdfkjakljsd fsd", content: <h2>asdfasdf</h2> },
    ];

    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Committee
                        </span>
                        {/* <h2 className="mt-5 text-xl font-semibold">
                            Organizing Committees <br />
                            Senior Program Committee
                            <br /> Program Committee
                        </h2> */}
                    </div>
                </div>
            </HeroBackground>
            <div className="px-8 lg:p-16 py-24 flex w-full max-w-5xl mx-auto gap-8 flex-col flex-wrap md:flex-row">
                {data.map((item: AccordianType, index: number) => (
                    <Accordian
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
            {/*   <h2 className="text-center w-full my-16 text-2xl md:text-3xl font-bold">
                Organizing Committee
            </h2>
            <div className="p-16 pb-0 flex w-full gap-16 flex-col flex-wrap md:flex-row">
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
            <h2 className="text-center w-full my-16 text-2xl md:text-3xl font-bold">
                Senior Program Committee
            </h2>
            <div className="p-16 pb-0 flex w-full gap-16 flex-col flex-wrap md:flex-row">
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
            <h2 className="text-center w-full my-16 text-2xl md:text-3xl font-bold">
                Program Committee
            </h2>
            <div className="mb-12 pb-0 flex w-full gap-16 flex-col flex-wrap md:flex-row">
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
            </div> */}
        </section>
    );
}
