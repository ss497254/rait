import ImportantDates, { row } from "components/ImportantDates";
import React from "react";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import FAQs from "../components/FAQs";
import FeatureBlocks from "../components/FeatureBlocks";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Speakers from "../components/Speakers";
import Testimonials from "components/Testimonials";
import Updates from "../components/Updates";

export default function Hello() {
    const dates: row[] = [
        {
            from: "October 1, 2022",
            to: "October 1, 2022",
            content: "Full Paper Submission",
        },
        {
            from: "December 1, 2022",
            to: "",
            content: "Acceptance",
        },
        {
            from: "December 15, 2022",
            to: "January 31, 2023",
            content: "Camera Ready",
        },
        {
            from: "February 28, 2023",
            to: "",
            content: "Last Date of Registration",
        },
        {
            from: "March 3-5, 2023",
            to: "March 5, 2023",
            content: "Conference Date",
        },
    ];

    return (
        <>
            <Hero />
            <div className="flex relative flex-col-reverse md:flex-row">
                <div className="w-full">
                    <About />
                    <Speakers />
                    <Updates />
                    <ImportantDates dates={dates} />
                </div>
                <Sponsors />
            </div>
        </>
    );
}
