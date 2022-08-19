import React from "react";
import HeroBackground from "components/HeroBackground";
import ImportantDates, { row } from "components/ImportantDates";
import LinkIcon from "../assets/icons/Link";

export default function Contact() {
    const dates: row[] = [
        {
            from: "August 1, 2022",
            to: "October 1, 2022",
            content: "Full Paper Submission",
        },
        {
            from: "December 1, 2022",
            to: "",
            content: "Acceptance",
        },
        {
            from: "December 15, 2022",
            to: "January 31, 2023",
            content: "Camera Ready",
        },
        {
            from: "December 15, 2022",
            to: "February 28, 2023",
            content: "Last Date of Registration",
        },
        {
            from: "March 3, 2023",
            to: "March 5, 2023",
            content: "Conference Date",
        },
    ];

    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Authors
                        </span>
                        <h2 className="mt-5 text-xl">
                            To submit a paper in{" "}
                            <span className="text-yellow-200 font-extrabold">
                                RAIT 2023
                            </span>
                            &nbsp;
                            <a
                                href="https://easychair.org/conferences/?conf=rait2023"
                                className="text-green-300 underline underline-offset-4 font-bold"
                            >
                                Click here
                            </a>
                        </h2>
                    </div>
                </div>
            </HeroBackground>
            <ImportantDates dates={dates} />
            <div className="mb-16 px-8 bg-blue-100 py-24">
                <h2 className="text-center text-3xl mb-12 font-semibold">
                    Major Tracks
                </h2>
                <div className="max-w-5xl px-8 text-justify mx-auto">
                    Authors can submit regular (6 pages) papers that contain
                    original material that is not currently communicated in
                    other conferences or journals and has not been previously
                    published. Potential research topics include (but are not
                    limited to) the following thrust areas.
                    <br />
                    <br />
                    The tracks in this conference include (but not limited to):
                    <br />
                    <ul className="list-disc pl-12 my-6 mt-2">
                        <li>Recent Advances in Communications and Networks</li>
                        <li>
                            Recent Advances in Cryptography and Network Security
                        </li>
                        <li>Recent Advances in Embedded Systems and VLSI</li>
                        <li>
                            Recent Advances in Image, Video and Signal
                            Processing
                        </li>
                        <li>
                            Recent Advances in Soft Computing, Artificial
                            Intelligence and Machine Learning
                        </li>
                        <li>Recent Advances in Algorithms</li>
                        <li>Recent Advances in Information Technology</li>
                    </ul>
                    All accepted and registered papers will be published in IEEE
                    proceedings.
                </div>
            </div>
            <div className="mx-auto max-w-5xl mb-16 px-8 text-justify">
                <h2 className="text-center text-3xl mb-12 font-semibold">
                    Important Note
                </h2>
                All submissions should be written in English with a maximum page
                length of SIX (6) printed pages including bibliographic
                references for the regular paper track. Papers should be in PDF
                format, two columns, (minimum 10-point font) or greater and
                compliant with other <strong>IEEE</strong> manuscript
                guidelines.
                <br /> <br /> Standard <strong>IEEE</strong> conference
                templates for <strong>LaTeX</strong> and{" "}
                <strong>Microsoft Word</strong> formats must be used for
                technical papers which can be found at:{" "}
                <a
                    href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                    className="text-blue-500 underline underline-offset-4 font-bold"
                >
                    Link
                    <LinkIcon className="inline-block px-2 -mx-1" />
                </a>
                <h2 className="mt-12 text-xl">
                    To submit a paper in{" "}
                    <span className="font-extrabold">RAIT 2023</span> &nbsp;
                    <a
                        href="https://easychair.org/conferences/?conf=rait2023"
                        className="text-blue-500 underline underline-offset-4 font-bold"
                    >
                        Click here
                    </a>
                </h2>
            </div>
        </section>
    );
}
