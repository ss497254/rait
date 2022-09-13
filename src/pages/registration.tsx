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
            <div className="flex relative flex-col-reverse md:flex-row">
                <div className="w-full">
                    <div className="text-center text-3xl font-semibold p-20">
                        Comming Soon...
                    </div>
                </div>
                <Sponsors />
            </div>
        </section>
    );
}
