import ImportantDates, { row } from "components/ImportantDates";
import React from "react";
import About from "../components/About";
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
            from: "August 1, 2022",
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
            from: "December 15, 2022",
            to: "February 28, 2023",
            content: "Last Date of Registration",
        },
        {
            from: "March 3, 2023",
            to: "March 5, 2023",
            content: "Conference Date",
        },
    ];

    return (
        <>
            <Hero />
            <About />
            <Speakers />
            <Pricing />
            <Updates />
            <FeatureBlocks />
            <ImportantDates dates={dates} />
            {/* <Testimonials /> */}
            <FAQs />
        </>
    );
}
