import React from "react";
import { SolidCalendar } from "assets/icons";

export default function About() {
    return (
        <section
            id="about"
            className="relative z-20 overflow-hidden bg-blue-50 pt-[70px] pb-10 lg:pt-[80px] lg:pb-20"
        >
            <div className="max-w-6xl mx-auto">
                <div className="w-full px-6">
                    <div className="mb-12 lg:mb-20">
                        <span className="block mb-2 text-2xl font-bold text-blue-500">
                            Welcome
                        </span>
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl text-dark">
                            Know about us
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center lg:px-12">
                    <div className="w-full px-4 mb-12 md:w-fit">
                        <div className="mx-auto w-fit">
                            <AboutImg />
                        </div>
                    </div>
                    <div className="w-full px-8 mb-8 text-justify md:w-fit text-md md:text-lg">
                        RAIT is a premier conference that encompasses different
                        topics in Information Technology. This conference is
                        technically co-sponsored by the IEEE Kolkata chapter.
                        The RAIT provides a forum for a strong and involved
                        interaction between academia and industry to bridge the
                        gaps in research being carried out in the academia and
                        the industry. The conference will host panel
                        discussions, keynotes, invited talks, and industry
                        exhibits, where academia is exposed to the
                        state-of-the-practice results from large-scale
                        interoperability experiments. The industry, in turn,
                        benefits from the exposure to cutting-edge problems that
                        require future research and deployment of
                        industrial-scale resources through interaction with the
                        academic researchers.
                        <br />
                        <br />
                        It focuses mainly on the areas of Recent Advances in
                        Network and Communications; Cryptography and Network
                        Security; Embedded Systems and VLSI; Image, Video and
                        Signal Processing; Soft Computing, Artificial
                        Intelligence and Machine Learning; Algorithms and
                        Information Technology.
                        <div className="flex flex-col gap-10 mt-12 md:flex-row">
                            <div className="flex w-full px-4">
                                <div className="mr-4 pt-2 text-[32px]">
                                    <svg
                                        width="29"
                                        height="35"
                                        viewBox="0 0 29 35"
                                        className="fill-current"
                                    >
                                        <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                                        <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                                    </svg>
                                </div>
                                <div className="pr-2 text-left">
                                    <h5 className="mb-1 font-semibold text-md">
                                        Our Location
                                    </h5>
                                    <p className="text-sm">
                                        Indian Institute of Technology (Indian
                                        School of Mines) Dhanbad,
                                        <br />
                                        Dhanbad Jharkhand 826004
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full px-4">
                                <div className="mr-4 pt-2 text-[32px]">
                                    <SolidCalendar size={30} />
                                </div>
                                <div className="pr-2">
                                    <h5 className="mb-1 font-semibold text-md">
                                        Scheduled From
                                    </h5>
                                    <p className="text-sm">3 March, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const AboutImg = () => {
    return (
        <div className="w-full px-4 text-blue-500 md:px-0">
            <div className="relative z-10">
                <img
                    src="/~rait/about.jpg"
                    alt="hero"
                    className="rounded-lg max-h-[475px]"
                />
                <div className="absolute -bottom-6 -left-6 z-[-1] fill-current">
                    <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                        />
                        <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                        />
                        <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                        />
                        <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                        />
                        <circle
                            cx="60.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3333 104)"
                        />
                        <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                        />
                        <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                        />
                        <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                        />
                        <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                        />
                        <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                        />
                        <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                        />
                        <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                        />
                        <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                        />
                        <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                        />
                        <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                        />
                        <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                        />
                        <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                        />
                        <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                        />
                        <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                        />
                        <circle
                            cx="60.3333"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 60.3333 31.0001)"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                        />
                        <circle
                            cx="88.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 88.6667 31.0001)"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                        />
                        <circle
                            cx="117.667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 117.667 31.0001)"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                        />
                        <circle
                            cx="74.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 74.6667 31.0001)"
                        />
                        <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                        />
                        <circle
                            cx="103"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 103 31.0001)"
                        />
                        <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                        />
                        <circle
                            cx="132"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 132 31.0001)"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3336)"
                        />
                        <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                        />
                        <circle
                            cx="31"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 31 16.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3336)"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3336)"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3336)"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3336)"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3336)"
                        />
                        <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                        />
                        <circle
                            cx="103"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 103 16.3336)"
                        />
                        <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                        />
                        <circle
                            cx="132"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 132 16.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                        />
                        <circle
                            cx="31"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 31 45.3336)"
                        />
                        <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66707)"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66707)"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66707)"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66707)"
                        />
                        <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                        />
                        <circle
                            cx="103"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 103 1.66707)"
                        />
                        <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                        />
                        <circle
                            cx="132"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 132 1.66707)"
                        />
                    </svg>
                </div>
                <div className="absolute -top-6 -right-6 z-[-1] fill-current">
                    <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                        />
                        <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                        />
                        <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                        />
                        <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                        />
                        <circle
                            cx="60.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3333 104)"
                        />
                        <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                        />
                        <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                        />
                        <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                        />
                        <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                        />
                        <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                        />
                        <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                        />
                        <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                        />
                        <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                        />
                        <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                        />
                        <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                        />
                        <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                        />
                        <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                        />
                        <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                        />
                        <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                        />
                        <circle
                            cx="60.3333"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 60.3333 31.0001)"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                        />
                        <circle
                            cx="88.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 88.6667 31.0001)"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                        />
                        <circle
                            cx="117.667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 117.667 31.0001)"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                        />
                        <circle
                            cx="74.6667"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 74.6667 31.0001)"
                        />
                        <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                        />
                        <circle
                            cx="103"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 103 31.0001)"
                        />
                        <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                        />
                        <circle
                            cx="132"
                            cy="31.0001"
                            r="1.66667"
                            transform="rotate(-90 132 31.0001)"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3336)"
                        />
                        <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                        />
                        <circle
                            cx="31"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 31 16.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3336)"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3336)"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3336)"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3336)"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3336)"
                        />
                        <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                        />
                        <circle
                            cx="103"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 103 16.3336)"
                        />
                        <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                        />
                        <circle
                            cx="132"
                            cy="16.3336"
                            r="1.66667"
                            transform="rotate(-90 132 16.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3336)"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3336)"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                        />
                        <circle
                            cx="31"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 31 45.3336)"
                        />
                        <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3336"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3336)"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66707)"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66707)"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66707)"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66707)"
                        />
                        <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                        />
                        <circle
                            cx="103"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 103 1.66707)"
                        />
                        <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                        />
                        <circle
                            cx="132"
                            cy="1.66707"
                            r="1.66667"
                            transform="rotate(-90 132 1.66707)"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
