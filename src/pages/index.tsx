import React from "react";
import About from "../components/About";
import FAQs from "../components/FAQs";
import FeatureBlocks from "../components/FeatureBlocks";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Speakers from "../components/Speakers";
import Testimonials from "../components/Testimonials";
import Updates from "../components/Updates";

export default function Hello() {
    return (
        <>
            <Hero />
            <About />
            <Speakers />
            <Pricing />
            <Updates />
            <FeatureBlocks />
            <Testimonials />
            <FAQs />
        </>
    );
}
