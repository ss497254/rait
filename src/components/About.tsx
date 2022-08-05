import React from "react";
import { SolidCalendar } from "assests/icons";
export default function About() {
    return (
        <section className="relative z-20 overflow-hidden bg-blue-100 pt-12 pb-10 lg:pt-[80px] lg:pb-20">
            <div className="max-w-6xl mx-auto">
                <div className="w-full px-6">
                    <div className="mb-12 lg:mb-20">
                        <span className="mb-2 block text-xl font-semibold text-blue-500">
                            Welcome
                        </span>
                        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                            Know about us
                        </h2>
                        {/* <p className="text-md leading-relaxed text-body-color sm:leading-relaxed max-w-3xl">
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p> */}
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-2/5 mb-8">
                        <img
                            src="/assets/about.jpg"
                            className="lg:max-h-[475px] rounded mx-auto"
                            alt="FlowBite Logo"
                        />
                    </div>
                    <div className="w-full px-8 lg:w-3/5 leading-7 text-lg font-light text-justify mb-8">
                        RAIT is a premier international conference focusing on
                        scientific work in Databases, Data Sciences and their
                        applications. Being held for the 6th time as a common
                        conference bringing together the COMAD and the CODS
                        communities, this conference invites researchers in the
                        field of databases, data sciences and their applications
                        to submit their original work.
                        <br />
                        <br />
                        COMAD, a conference directed primarily at data
                        management started in 1989 while CODS started in 2014
                        with an excellent program in AI/Machine Learning/Data
                        Science.
                        <div className="flex flex-col md:flex-row gap-10 mt-12">
                            <div className="flex w-full flx">
                                <div className="mr-4 pt-2 text-[32px] text-primary">
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
                                <div className="pr-2">
                                    <h5 className="mb-1 text-md font-semibold">
                                        Our Location
                                    </h5>
                                    <p className="text-sm">
                                        Indian Institute of Technology (Indian
                                        School of Mines) Dhanbad
                                        <br />
                                        Dhanbad Jharkhand 826004
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="mr-4 pt-2 text-[32px] text-primary">
                                    <SolidCalendar size={30} />
                                </div>
                                <div className="pr-2">
                                    <h5 className="mb-1 text-md font-semibold">
                                        Scheduled On
                                    </h5>
                                    <p className="text-sm">
                                        Monday XYZ, 20XX
                                        <br /> 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#3056D3" stopOpacity="0.36" />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0"
                            />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0.096144"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
}

// <div className="bg-blue-100 p-10 sm:p-16 flex items-center flex-col">
//     <h1 className="text-4xl font-semibold mx-auto mb-12">Welcome</h1>
//     <div className="w-fullmd:max-w-screen-lg flex flex-col md:flex-row">
//         <div className="w-full h-full md:pl-20">
//             <Image
//                 src="/assets/Illustration2.png"
//                 alt="updates"
//                 layout="responsive"
//                 quality={100}
//                 height={414}
//                 width={508}
//             />
//         </div>
//     </div>
// </div>;
