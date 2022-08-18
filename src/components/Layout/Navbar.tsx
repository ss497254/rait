import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { SolidHome } from "../../assets/icons";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const targetRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY < 50) {
            setIsScrolled(false);
        } else {
            setIsScrolled(true);
        }
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            setIsScrolled(true);
            return;
        }

        window.document.addEventListener("scroll", handleScroll);
        return () => {
            window.document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useOnClickOutside(targetRef, () => {
        setOpen(false);
    });

    return (
        <div
            className={`fixed top-0 left-0 right-0 bg-white z-50 h-16 ${
                isScrolled
                    ? "bg-opacity-60 backdrop-blur-lg"
                    : "bg-opacity-0 text-white h-20"
            }`}
        >
            <div className="flex justify-between items-center h-full py-4 px-6 md:justify-start">
                <div className="flex justify-start lg:w-0 md:flex-1">
                    <Link href="/">
                        <img
                            src={`/assets/real_logo${
                                isScrolled ? "" : "-dark"
                            }.png`}
                            className="h-12 px-[3%] lg:px-[8%]"
                            alt="Rait Logo"
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex justify-between">
                    <Link href="/">
                        <span className="mx-2 px-4 flex items-center h-10 rounded-[3px] cursor-pointer hover:bg-blue-700 font-semibold hover:text-white">
                            Home
                        </span>
                    </Link>
                    <Link href="authors">
                        <span className="mx-2 px-4 flex items-center h-10 rounded-[3px] cursor-pointer hover:bg-blue-700 font-semibold hover:text-white">
                            Authors
                        </span>
                    </Link>
                    <Link href="committee">
                        <span className="mx-2 px-4 flex items-center h-10 rounded-[3px] cursor-pointer hover:bg-blue-700 font-semibold hover:text-white">
                            Committee
                        </span>
                    </Link>
                    <Link href="sponsorship">
                        <span className="mx-2 px-4 flex items-center h-10 rounded-[3px] cursor-pointer hover:bg-blue-700 font-semibold hover:text-white">
                            Sponsorship
                        </span>
                    </Link>
                    <Link href="contact">
                        <span className="mx-3 px-4 flex items-center h-10 rounded-[3px] cursor-pointer hover:bg-blue-700 font-semibold hover:text-white">
                            Contact Us
                        </span>
                    </Link>
                </div>
                <div className="lg:hidden">
                    <div
                        className={`bg-white ${
                            isScrolled ? "text-gray-600" : "text-gray-100"
                        } bg-opacity-25 rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div
                ref={targetRef}
                className={
                    open
                        ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                        : "opacity-0 hidden scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                }
            >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-200">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <img
                                src="/assets/real_logo.png"
                                className="ml-1 h-7"
                                alt="Rait Logo"
                            />
                            <div className="-mr-2">
                                <button
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center  text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                    onClick={() => setOpen(!open)}
                                >
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-6">
                                <Link href="/">
                                    <button
                                        className="p-1 flex items-center"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="flex-shrink-0 w-6 text-blue-600">
                                            <SolidHome size={18} />
                                        </span>
                                        <span className="ml-5 font-semibold text-gray-900">
                                            Home
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/authors">
                                    <button
                                        className="p-1 flex items-center"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                        <span className="ml-5 font-semibold text-gray-900">
                                            Authors
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/committee">
                                    <button
                                        className="p-1 flex items-center"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                        <span className="ml-5 font-semibold text-gray-900">
                                            Committee
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/sponsorship">
                                    <button
                                        className="p-1 flex items-center"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                            />
                                        </svg>
                                        <span className="ml-5 font-semibold text-gray-900">
                                            Sponsorship
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button
                                        className="p-1 flex items-center"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                        <span className="ml-5 font-semibold text-gray-900">
                                            Contact Us
                                        </span>
                                    </button>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="p-4 text-gray-700">IIT(ISM) Dhanbad</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
