import React from "react";

function Sponsors() {
    return (
        <div className="w-full md:max-w-[350px] bg-blue-50 border-l border-blue-300">
            <h1 className="pt-16 text-2xl font-bold text-center">
                Our Sponsor
            </h1>
            <div className="my-20">
                <h3 className="text-xl font-semibold text-center">
                    Technical Program Partner
                </h3>

                <div className="px-20 py-8">
                    <img
                        src="data:image/png;base64,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"
                        width="1000"
                    />
                </div>
                <div className="px-20 py-8">
                    <img src="/~rait/IEEE_logo.png" width="1000" />
                </div>
            </div>
            {/* <div className="my-20">
                <h3 className="text-xl font-semibold text-center">
                    Diamond Sponsors
                </h3>
                <div className="px-8 py-10">
                    <p className="text-center">Coming Soon...</p>
                </div>
            </div>
            <div className="my-20">
                <h3 className="text-xl font-semibold text-center">
                    Platinum Sponsors
                </h3>
                <div className="px-8 py-10">
                    <p className="text-center">Coming Soon...</p>
                </div>
            </div>
            <div className="my-20">
                <h3 className="text-xl font-semibold text-center">
                    Gold Sponsors
                </h3>
                <div className="px-8 py-10">
                    <p className="text-center">Coming Soon...</p>
                </div>
            </div>
            <div className="my-20">
                <h3 className="text-xl font-semibold text-center">
                    Silver Sponsors
                </h3>
                <div className="px-8 py-10">
                    <p className="text-center">Coming Soon...</p>
                </div>
            </div>
            <div className="my-20">
                <h3 className="text-xl font-semibold text-center">
                    Bronze Sponsors
                </h3>
                <div className="px-8 py-10">
                    <p className="text-center">Coming Soon...</p>
                </div>
            </div> */}
            <div className="my-20">
                <h3 className="text-xl font-semibold text-center">
                    University Partner
                </h3>
                <div className="px-20 py-8">
                    <img src="/~rait/ism.png" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
