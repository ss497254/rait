import React from "react";
import HeroBackground from "components/HeroBackground";
import Accordian, { AccordianType } from "components/Accordian";

export default function Contact() {
    const data: AccordianType[] = [
        {
            title: "1: Program and Organizing Committee:",
            content: (
                <ul className="list-decimal md:py-8 px-4 lg:text-lg">
                    <li className="py-2">Chief Patron: Prof. P. Vrat </li>
                    <li className="py-2">Patron: Prof. R. Shekhar General</li>
                    <li className="py-2">Chair: Prof. S. Tripathi</li>
                    <li className="py-2">
                        Program Chair: Prof. A. Bhattacharya
                    </li>
                    <li className="py-2">Program Co-Chair: Prof. A. Das</li>
                    <li className="py-2">Organizing Chair: Prof. A. K. Pal</li>
                    <li className="py-2">
                        Organizing Co-Chair: Prof. S. Srivastava
                    </li>
                    <li className="py-2">
                        Finance and Audit Chair: Prof. S. Bag
                    </li>
                    <li className="py-2">
                        Finance and Audit Co-Chair: Prof. T. Kaibartta
                    </li>
                    <li className="py-2">
                        Tutorial, Publication and Editorial Chair: Prof. S.
                        Mukhopadhyay
                    </li>
                    <li className="py-2">
                        Sponsorship Chair: Prof. T. Amgoth{" "}
                    </li>
                    <li className="py-2">
                        Press, Media Management, Advertisement and Publicity
                        Chair: Prof. D. Ramesh
                    </li>
                    <li className="py-2">
                        Registration Chair: Prof. R. Pamula
                    </li>
                    <li className="py-2">
                        Transportation and Accommodation Chair: Prof. H. Banka
                    </li>
                    <li className="py-2">
                        Food and Hospitality Chair: Prof. A. C. S. Rao
                    </li>
                    <li className="py-2">
                        Decoration, Cultural and Stage Management Chair: Prof.
                        Hari Om
                    </li>
                </ul>
            ),
        },
        {
            title: "2: Advisory Board",
            content: (
                <h2 className="text-center text-2xl font-bold">
                    Coming Soon...
                </h2>
            ),
        },
        {
            title: "3. Organizing Committee",
            content: (
                <h2 className="text-center text-2xl font-bold">
                    Coming Soon...
                </h2>
            ),
        },
        {
            title: "4. Technical Program Committee",
            content: (
                <h2 className="text-center text-2xl font-bold">
                    Coming Soon...
                </h2>
            ),
        },
    ];

    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 lg:-mt-5">
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
