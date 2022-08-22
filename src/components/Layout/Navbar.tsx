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
                            src={`/~rait/real_logo${
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
                    <Link href="registration">
                        <span className="mx-2 px-4 flex items-center h-10 rounded-[3px] cursor-pointer hover:bg-blue-700 font-semibold hover:text-white">
                            Registration
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
                <div className="rounded-lg border border-gray-400 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-200">
                    <div className="">
                        <div className="px-6 py-4 border-b-2 flex items-center justify-between">
                            <img
                                src="/~rait/real_logo.png"
                                className="ml-1 h-9"
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
                        <nav className="grid text-black py-2">
                            <Link href="/">
                                <button
                                    className="px-6 focus:bg-blue-500 focus:text-white py-5 text-left"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="ml-5 font-semibold">
                                        Home
                                    </span>
                                </button>
                            </Link>
                            <Link href="/authors">
                                <button
                                    className="px-6 focus:bg-blue-500 focus:text-white py-5 text-left"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="ml-5 font-semibold">
                                        Authors
                                    </span>
                                </button>
                            </Link>
                            <Link href="/committee">
                                <button
                                    className="px-6 focus:bg-blue-500 focus:text-white py-5 text-left"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="ml-5 font-semibold">
                                        Committee
                                    </span>
                                </button>
                            </Link>
                            <Link href="/sponsorship">
                                <button
                                    className="px-6 focus:bg-blue-500 focus:text-white py-5 text-left"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="ml-5 font-semibold">
                                        Sponsorship
                                    </span>
                                </button>
                            </Link>
                            <Link href="/registration">
                                <button
                                    className="px-6 focus:bg-blue-500 focus:text-white py-5 text-left"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="ml-5 font-semibold">
                                        Registration
                                    </span>
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button
                                    className="px-6 focus:bg-blue-500 focus:text-white py-5 text-left"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="ml-5 font-semibold">
                                        Contact Us
                                    </span>
                                </button>
                            </Link>
                        </nav>
                    </div>
                    <div className="p-4 text-center font-bold text-blue-600">
                        IIT(ISM) Dhanbad
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
