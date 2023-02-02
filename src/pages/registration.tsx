import React from "react";
import HeroBackground from "components/HeroBackground";
import Sponsors from "components/Sponsors";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl font-semibold lg:text-6xl text-dark">
                            Registration
                        </span>
                    </div>
                </div>
            </HeroBackground>
            {/* <div className="relative flex flex-col-reverse md:flex-row">
                <div className="w-full">
                <div className="p-20 text-3xl font-semibold text-center">
                    Comming Soon...
                </div>
                </div>
                <Sponsors />
            </div> */}
            <div className="relative flex flex-col-reverse md:flex-row">
                <div className="w-full max-w-3xl px-5 mx-auto my-10">
                    <div className="pb-12 text-3xl font-semibold text-center">
                        Registration Fees
                    </div>
                    <div className="w-full text-left outline outline-[1.5px] text-gray-800">
                        <div className="py-2 text-lg font-semibold text-center text-gray-700 bg-gray-200 border border-black">
                            Author Registration
                        </div>
                        <div className="flex text-lg text-gray-700 bg-gray-200">
                            <div className="flex-1 p-2 text-center align-middle border border-black">
                                Category/Type of Registration
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 py-2 text-center border border-black">
                                    $
                                </div>
                                <div className="flex-1 py-2 text-center border border-black">
                                    ₹
                                </div>
                            </div>
                        </div>
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                IEEE member
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    125
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    12,500
                                </div>
                            </div>
                        </div>
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                Non-IEEE member
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    150
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    15,000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 text-xs">
                        * One FULL AUTHOR REGISTRATION will allow the author to
                        present up to two (2) papers on which he/she is an
                        author or co-author.
                    </div>
                    <div className="my-2 text-xs">
                        * The paper authors must register by the respective
                        camera ready deadline, i.e., December 25, 2022.
                    </div>
                    <div className="my-2 text-xs">
                        * At least one author per accepted paper must register
                        at the full rate, i.e., at Regular IEEE member rate, or
                        at non-IEEE member rate​ even if he/she happens to be a
                        student.
                    </div>
                    <div className="w-full mt-10 text-left outline outline-[1.5px] text-gray-800">
                        <div className="py-2 text-lg font-semibold text-center text-gray-700 bg-gray-200 border border-black">
                            Attendee Registration
                        </div>
                        <div className="flex text-lg text-gray-700 bg-gray-200">
                            <div className="flex-1 p-2 text-center align-middle border border-black">
                                Category/Type of Registration
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="py-2 text-center border border-black">
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
                            <div className="flex flex-col flex-1">
                                <div className="py-2 text-center border border-black">
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
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                IEEE member
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    75
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    7,500
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    100
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    10,000
                                </div>
                            </div>
                        </div>
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                Non-IEEE member
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    100
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    10,000
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    125
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    12,500
                                </div>
                            </div>
                        </div>
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                Student IEEE member
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    50
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    5,000
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    75
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    7,500
                                </div>
                            </div>
                        </div>
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                Student Non-IEEE member
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    75
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    7,500
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    100
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    10,000
                                </div>
                            </div>
                        </div>
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                Tutorial only (one day) when not included in
                                other registration type
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    25
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    2,500
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    50
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    5,000
                                </div>
                            </div>
                        </div>
                        <div className="flex text-gray-700">
                            <div className="flex-1 px-2 border border-black">
                                Banquette (each extra ticket)
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    25
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    2,500
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-1 text-center border border-black">
                                    30
                                </div>
                                <div className="flex-1 text-center border border-black">
                                    3,000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 text-xs">
                        * Last date for early registration is January 31, 2023.
                    </div>
                    <div className="my-2 text-xs">
                        * Last date for registration is February 28, 2023.
                    </div>
                    <div className="text-3xl font-semibold text-center py-14">
                        Conference Registration
                    </div>
                    <div className="flex flex-wrap items-center justify-center mb-12">
                        <a
                            className="w-64 px-4 py-2 mx-auto text-center text-white bg-blue-500 rounded"
                            target="_blank"
                            href="https://eps.eshiksa.net/DirectFeesv3/IIT_Dhanbad/index"
                        >
                            Pay Registration Fees
                        </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <a
                            className="w-64 px-4 py-2 text-center text-white bg-blue-500 rounded"
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSe6zqsGWx94QL68rgFETMDU806lW54rNOeQ6rAV218pnBXuvQ/viewform"
                        >
                            Author Registration
                        </a>
                        <a
                            className="w-64 px-4 py-2 text-center text-white bg-blue-500 rounded"
                            target="_blank"
                            href="https://forms.gle/rkEUaq32qPYCodq87"
                        >
                            Attendee Registration
                        </a>
                    </div>
                </div>
                <Sponsors />
            </div>
        </section>
    );
}
