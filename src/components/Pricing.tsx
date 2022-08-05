import React from "react";
import Image from "next/image";

const Pricing = () => {
    return (
        <section className="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] bg-blue-100">
            <div className="flex flex-wrap px-4 md:px-16">
                <div className="w-full">
                    <div className="mb-12 lg:mb-20">
                        <span className="mb-2 block text-lg font-semibold text-primary">
                            Features
                        </span>
                        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                            Main Features Of Conference
                        </h2>
                        <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed max-w-3xl">
                            There are many variations of passages of Lorem Ipsum
                            available but the majority have suffered alteration
                            in some form.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
