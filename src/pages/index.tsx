import ImportantDates, { row } from "components/ImportantDates";
import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Updates from "../components/Updates";

export default function Hello() {
    const dates: row[] = [
        {
            from: "November 15, 2022",
            strikethrough: "October 31, 2022",
            content: "Full Paper Submission",
        },
        {
            from: "December 1, 2022",
            strikethrough: "",
            content: "Acceptance",
        },
        {
            from: "December 15, 2022",
            strikethrough: "",
            content: "Camera Ready",
        },
        {
            from: "February 28, 2023",
            strikethrough: "",
            content: "Last Date of Registration",
        },
        {
            from: "March 3-5, 2023",
            strikethrough: "",
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
