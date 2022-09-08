import React from "react";
import HeroBackground from "components/HeroBackground";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Program
                        </span>
                    </div>
                </div>
            </HeroBackground>
            <div className="text-center text-3xl font-semibold p-20">Comming Soon...</div>
        </section>
    );
}
