import React from "react";
import HeroBackground from "components/HeroBackground";
import Sponsors from "components/Sponsors";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Registration
                        </span>
                    </div>
                </div>
            </HeroBackground>
            {/* <div className="flex relative flex-col-reverse md:flex-row">
                <div className="w-full">
                <div className="text-center text-3xl font-semibold p-20">
                    Comming Soon...
                </div>
                </div>
                <Sponsors />
            </div> */}
            <div className="flex relative flex-col-reverse md:flex-row">
                <div className="mx-auto max-w-3xl w-full my-10 px-5">
                    <div className="text-center text-3xl font-semibold pb-12">
                        Registration Fees
                    </div>
                    <div className="w-full text-left outline outline-[1.5px] text-gray-800">
                        <div className="text-gray-700  border border-black text-lg font-semibold bg-gray-200 text-center py-2">
                            Author Registration
                        </div>
                        <div className="text-gray-700 text-lg bg-gray-200 flex">
                            <div className="p-2 flex-1 border border-black text-center align-middle">
                                Category/Type of Registration
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 py-2 text-center border border-black">
                                    $
                                </div>
                                <div className="flex-1 py-2 text-center border border-black">
                                    ₹
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                IEEE member
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    125
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    12,500
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                Non-IEEE member
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    150
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    15,000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs my-2">
                        * One FULL AUTHOR REGISTRATION will allow the author to
                        present up to two (2) papers on which he/she is an
                        author or co-author.
                    </div>
                    <div className="text-xs my-2">
                        * The paper authors must register by the respective
                        camera ready deadline, i.e., December 15, 2022.
                    </div>
                    <div className="text-xs my-2">
                        * At least one author per accepted paper must register
                        at the full rate, i.e., at Regular IEEE member rate, or
                        at non-IEEE member rate​ even if he/she happens to be a
                        student.
                    </div>
                    <div className="w-full mt-10 text-left outline outline-[1.5px] text-gray-800">
                        <div className="text-gray-700  border border-black text-lg font-semibold bg-gray-200 text-center py-2">
                            Attendee Registration
                        </div>
                        <div className="text-gray-700 text-lg bg-gray-200 flex">
                            <div className="p-2 flex-1 border border-black text-center align-middle">
                                Category/Type of Registration
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="py-2 border border-black text-center">
                                    Early bird
                                </div>
                                <div className="flex">
                                    <div className="flex-1 text-center border border-black">
                                        $
                                    </div>
                                    <div className="flex-1 text-center border border-black">
                                        ₹
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="py-2 border border-black text-center">
                                    Regular
                                </div>
                                <div className="flex">
                                    <div className="flex-1 text-center border border-black">
                                        $
                                    </div>
                                    <div className="flex-1 text-center border border-black">
                                        ₹
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                IEEE member
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    75
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    7,500
                                </div>
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    100
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    10,000
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                Non-IEEE member
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    100
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    10,000
                                </div>
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    125
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    12,500
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                Student IEEE member
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    50
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    5,000
                                </div>
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    75
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    7,500
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                Student Non-IEEE member
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    75
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    7,500
                                </div>
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    100
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    10,000
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                Tutorial only (one day) when not included in
                                other registration type
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    25
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    2,500
                                </div>
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    50
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    5,000
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700 flex">
                            <div className="px-2 flex-1 border border-black">
                                Banquette (each extra ticket)
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    25
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    2,500
                                </div>
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 text-center border border-black">
                                    30
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    3,000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs my-2">
                        * Last date for early registration is January 31, 2023.
                    </div>
                    <div className="text-xs my-2">
                        * Last date for registration is February 28, 2023.
                    </div>
                    <div className="text-center text-3xl font-semibold py-14">
                        Conference Registration
                    </div>
                    <div className="flex items-center justify-center gap-20">
                        <a
                            className="py-2 px-4 w-56 text-center bg-blue-500 text-white rounded"
                            href="#"
                        >
                            Pay Registration Fees
                        </a>
                        <a
                            className="py-2 px-4 w-56 text-center bg-blue-500 text-white rounded"
                            href="#"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
                <Sponsors />
            </div>
        </section>
    );
}
