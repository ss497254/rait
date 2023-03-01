import React from "react";
import SpeakerDetail from "./SpeakerDetail";

export default function Speakers() {
    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[100px] max-w-2xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                            Meet Our Speakers
                        </h2>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-evenly">
                <SpeakerDetail
                    name="Prof. Anupam Basu"
                    src="/~rait/anupam.jpg"
                    desc="Ex. Director of National Institute of Technology, Durgapur and Professor, Dept. of Computer Science & Engineering, IIT Kharagpur, India"
                />
                <SpeakerDetail
                    src="/~rait/debdeep.jpg"
                    name="Prof. Debdeep Mukhopadhyay"
                    desc="Professor, Department of Computer Science and Engineering, Indian Institute of Technology Kharagpur, India"
                />
                <SpeakerDetail
                    src="/~rait/subhankar.jpeg"
                    name="Prof. Subhankar Dhar"
                    desc="Professor, School of Information Systems
                        and Technology at San José State University, USA"
                />
            </div>
            <div className="mt-10 md:flex justify-evenly">
                <SpeakerDetail
                    src="/~rait/amlan.png"
                    name="Prof. Amlan Chakrabarti"
                    desc="Director of A.K.Choudhury School of Information Technology, and Former Dean, Faculty of Engineering and Technology, University of Calcutta, Kolkata, India"
                />
                <SpeakerDetail
                    src="/~rait/sarbani.jpg"
                    name="Prof. Sarbani Palit"
                    desc="Associate Professor, Computer Vision & Pattern Recognition Unit, Indian Statistical Institute Kolkata, India"
                />
            </div>
            <div className="mt-10 md:flex justify-evenly">
                <SpeakerDetail
                    src="/~rait/snehashis.jpg"
                    name="Dr. Snehasis Banerjee"
                    desc="Lead Scientist at TCS Research Kolkata, India"
                />
                <SpeakerDetail
                    src="/~rait/ankur.jpeg"
                    name="Ankur Bal"
                    desc="Sr. Principal Engineer at STMicroelectronics, India"
                />
            </div>
        </section>
    );
}
