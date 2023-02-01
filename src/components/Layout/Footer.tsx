import React from "react";

export default function Footer() {
    return (
        <footer className="bg-blue-200 border border-t">
            <div className="flex flex-col p-8 md:flex-row md:justify-between md:p-12">
                <div className="mb-8 md:mb-0">
                    <div className="flex items-center">
                        <img
                            src="/~rait/real_logo.png"
                            className="mr-3 h-14"
                            alt="Rait Logo"
                        />
                    </div>
                </div>
                <div className="flex gap-20 mr-20">
                    <div className="max-w-[200px]">
                        <h2 className="mb-6 font-semibold text-gray-900 uppercase">
                            Resources
                        </h2>
                        <ul className="text-sm text-gray-700">
                            <li className="mb-4">
                                <a
                                    href="https://people.iitism.ac.in/~rait"
                                    target="_blank"
                                    className="hover:underline"
                                >
                                    RAIT 2023
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.iitism.ac.in"
                                    className="hover:underline"
                                    target="_blank"
                                >
                                    Indian Institute of Technology
                                    <br /> Dhanbad
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-[200px]">
                        <h2 className="mb-6 font-semibold text-gray-900 uppercase">
                            Follow us
                        </h2>
                        <ul className="text-sm text-gray-700">
                            <li className="mb-4">
                                <a
                                    href="https://www.facebook.com/RAIT-103820779127987"
                                    target="_blank"
                                    className="hover:underline "
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://twitter.com/Rait2023"
                                    target="_blank"
                                    className="hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/rait-cse"
                                    target="_blank"
                                    className="hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-24 px-8 border-t border-blue-300 md:h-16 md:flex-row md:justify-between">
                <span className="sm:text-center">
                    © {new Date().getFullYear()}{" "}
                    <a
                        href="https://people.iitism.ac.in/~rait"
                        className="hover:underline"
                    >
                        RAIT
                    </a>
                    . All Rights Reserved.
                </span>
                <div className="flex px-4 mt-4 space-x-8 sm:justify-center sm:mt-0">
                    <a
                        href="https://www.facebook.com/RAIT-103820779127987"
                        target="_blank"
                        className="text-black hover:text-blue-600"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com/Rait2023"
                        target="_blank"
                        className="text-black hover:text-blue-600"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/rait-cse"
                        target="_blank"
                        className="fill-black hover:fill-blue-600"
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18px"
                            height="18px"
                            viewBox="0 0 310 310"
                        >
                            <g id="XMLID_801_">
                                <path
                                    id="XMLID_802_"
                                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                                />
                                <path
                                    id="XMLID_803_"
                                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                                />
                                <path
                                    id="XMLID_804_"
                                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                                />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
