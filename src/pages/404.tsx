import React from "react";
import Link from "next/link";
import HeroBackground from "components/HeroBackground";

export default function NotFound() {
    return (
        <>
            <HeroBackground>
                <div className="w-full text-center text-7xl font-bold">
                    404 - Not found
                </div>
            </HeroBackground>
            <section className="bg-white py-14 lg:py-20">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="wow fadeInUp relative mx-auto max-w-[850px] overflow-hidden rounded-lg bg-white py-20 px-8 text-center shadow-lg sm:px-12 md:px-[60px]"
                                data-wow-delay=".2s"
                            >
                                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] xl:text-[42px]">
                                    404 - We couldn't find that page.
                                </h2>
                                <h3 className="mb-8 text-xl font-normal text-dark-700 md:text-2xl">
                                    Maybe you can find what you need here?
                                </h3>
                                <Link href="/">
                                    <button className="mx-2 my-1 inline-block rounded-md bg-[#f5f8ff] py-3 px-6 text-base font-medium text-dark hover:bg-primary hover:text-white">
                                        Go Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
