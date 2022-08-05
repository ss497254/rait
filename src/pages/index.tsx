import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Feature from "../components/Feature";
import FeatureBlocks from "../components/FeatureBlocks";
import Testimonials from "../components/Testimonials";
import Speakers from "../components/Speakers";
import FAQs from "../components/FAQs";

export default function Hello() {
    return (
        <>
            <Hero />
            <About />
            <Speakers />
            <Pricing />
            <Feature />
            <FeatureBlocks />
            <Testimonials />
            <FAQs />
        </>
    );
}
