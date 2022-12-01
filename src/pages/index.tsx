import ImportantDates, { row } from "components/ImportantDates";
import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Updates from "../components/Updates";

export default function Hello() {
    return (
        <>
            <Hero />
            <div className="flex relative flex-col-reverse md:flex-row">
                <div className="w-full">
                    <About />
                    <Speakers />
                    <Updates />
                    <ImportantDates />
                </div>
                <Sponsors />
            </div>
        </>
    );
}
