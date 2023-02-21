import React from "react";
import HeroBackground from "components/HeroBackground";
import Sponsors from "components/Sponsors";

const day1 = [
        {
            time: "8:00 A. M. - 10:00 A. M.",
            event: "Registration",
        },
        {
            time: "10:00 A. M. - 11:00 A. M.",
            event: "Inaugural Session",
        },
        {
            time: "11:00 A. M. - 11:30 A. M.",
            event: "High Tea",
        },
        {
            time: "11:30 A. M. - 1:00 P. M.",
            event: "Keynote I",
        },
        {
            time: "1:00 P. M. - 2:30 P. M.",
            event: "Lunch",
        },
        {
            time: "2:30 P. M. - 4:00 P. M.",
            event: "Tutorial I",
        },
        {
            time: "4:00 P. M. - 4:30 P. M.",
            event: "Tea Break",
        },
        {
            time: "4:30 P. M. - 6:00 P. M.",
            event: "Technical Session I",
        },
        {
            time: "6:30 P.M. - 8:00 P.M.",
            event: "Cultural",
        },
        {
            time: "8:00 P. M. - 10:30 P. M.",
            event: "Dinner",
        },
    ],
    day2 = [
        {
            time: "9:30 A. M. - 11:00 A. M.",
            event: "Keynote II",
        },
        {
            time: "11:00 A. M. - 11:30 A. M.",
            event: "Tea Break",
        },
        {
            time: "11:30 A. M. - 1:00 P. M.",
            event: "Technical Session II",
        },
        {
            time: "1:00 P. M. - 2:30 P. M.",
            event: "Lunch",
        },
        {
            time: "2:30 P. M. - 4:00 P. M.",
            event: "WIE",
        },
        {
            time: "4:00 P. M. - 4:30 P. M.",
            event: "Tea Break",
        },
        {
            time: "4:30 P. M. - 6:00 P. M.",
            event: "Technical Session III",
        },
        {
            time: "6:30 P.M. - 8:00 P.M.",
            event: "Cultural",
        },
        {
            time: "8:00 P. M. - 10:30 P. M.",
            event: "Dinner",
        },
    ],
    day3 = [
        {
            time: "9:30 A. M. - 11:00 A. M.",
            event: "Tutorial II",
        },
        {
            time: "11:00 A. M. - 11:30 A. M.",
            event: "Tea Break",
        },
        {
            time: "11:30 A. M. - 1:00 P. M.",
            event: "Technical Session IV",
        },
        {
            time: "1:00 P. M. - 2:30 P. M.",
            event: "Valedictory",
        },
        {
            time: "2:30 P. M. - 4:00 P. M.",
            event: "Lunch",
        },
    ];
const session1 = [
        {
            "Paper ID": "3083",
            Authors: "Ashok Ajad, Taniya Saini and Niranjan Kumar M",
            "Paper Title":
                "Rad-Former: Structuring Radiology Reports using Transformers",
        },
        {
            "Paper ID": "371",
            Authors: "Bobby Ramesh Addanki and Durga Bhavani S",
            "Paper Title":
                "Realistic Benchmark Datasets for Team Formation Problem in Social Networks",
        },
        {
            "Paper ID": "1012",
            Authors: "Taniya Saini, Ashok Ajad and Niranjan Kumar M",
            "Paper Title":
                "Deep Ensemble Architecture for Knee Osteoarthritis Severity Prediction and Report Generation",
        },
        {
            "Paper ID": "1801",
            Authors:
                "Shemim Begum, Swaraj Samanta, Salauddin Ahmed and Debasis Chakraborty",
            "Paper Title":
                "Microarray Data Analysis for Diagnosis of Cancer Diseases by Machine Learning algorithm",
        },
    ],
    session2 = [
        {
            "Paper ID": "4630",
            Authors: "Khushboo Jha, Aruna Jain and Sumit Srivastava",
            "Paper Title":
                "An Efficient Speaker Identification Approach for Biometric Access Control System",
        },
        {
            "Paper ID": "6981",
            Authors: "Ashi Agarwal and Seba Susan",
            "Paper Title":
                "Emotion Recognition from Masked Faces using Inception-v3",
        },
        {
            "Paper ID": "9245",
            Authors: "Ashok Ajad, Taniya Saini and Niranjan Kumar M",
            "Paper Title":
                "CV-CXR: A Method for Classification and Visualisation of Covid-19 virus using CNN and Heatmap",
        },
        {
            "Paper ID": "1453",
            Authors: "Amit Kumar Dhar, Barun Gorain and Madhuri Mahawar",
            "Paper Title": "Sweep Coverage with Faults",
        },
    ],
    session3 = [
        {
            "Paper ID": "1399",
            Authors:
                "Sayanti Ghosh, Abhijit Bhowmick, Sanjay Dhar Roy and Sumit Kundu",
            "Paper Title":
                "UAVs-assisted Multi-Hop D2D Communication using Hybrid PTS for disaster management",
        },
        {
            "Paper ID": "3614",
            Authors: "Lilima Jain and Venkanna U.",
            "Paper Title":
                "P4 based Switch Centric Flow table Overflow Detection and Mitigation in Data Plane Devices",
        },
        {
            "Paper ID": "7671",
            Authors: "Alok Kumar Baranwal, Sanjay Dhar Roy and Sumit Kundu",
            "Paper Title":
                "Secrecy Outage analysis of Energy Harvesting Enabled two user Cooperative NOMA",
        },
        {
            "Paper ID": "8220",
            Authors:
                "Amitesh Das, Sayanti Ghosh, Abhijit Bhowmick, Sanjay Dhar Roy and Sumit Kundu",
            "Paper Title":
                "Outage Analysis of a D2D Network for MIMO-NOMA-based Downlink Transmission",
        },
    ],
    session4 = [
        {
            "Paper ID": "1804",
            Authors: "Ishita Srivastava, Aryaman Raj and Dr. Daya Sagar Gupta",
            "Paper Title":
                "Blockchain-based Secure Storage and Management of Electronic Health Record using a Smart Card",
        },
        {
            "Paper ID": "5388",
            Authors: "Rashmi Raj and Mohona Ghosh",
            "Paper Title":
                "A Lightweight Blockchain Framework for secure transaction in resource constrained IoT devices",
        },
        {
            "Paper ID": "2757",
            Authors: "Mohamed Asan Basiri M and Shivalasya Cinthala",
            "Paper Title":
                "High Throughput Circuit Design of Flash Type Analog to Digital Converter",
        },
        {
            "Paper ID": "9630",
            Authors: "Mohamed Asan Basiri M and M Anjaneya",
            "Paper Title":
                "High Throughput Circuit Designs of Digital to Analog Converter",
        },
        {
            "Paper ID": "1137",
            Authors: "Emmanuel Mkpojiogu",
            "Paper Title":
                "UX Design and Evaluation: Holism versus Reductionism Approaches - Which is Better?",
        },
    ];

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl font-semibold lg:text-6xl text-dark">
                            Program
                        </span>
                    </div>
                </div>
            </HeroBackground>
            <div className="relative flex flex-col-reverse md:flex-row">
                <div className="w-full max-w-4xl px-5 mx-auto my-10 mb-16">
                    <div className="pb-8 text-3xl font-semibold text-center">
                        Program
                    </div>
                    <div className="w-full mt-6">
                        <div className="w-full py-4 text-xl font-semibold text-center text-blue-600">
                            Day 1
                        </div>
                        <div className="flex flex-1 font-semibold bg-blue-200">
                            <div className="flex-1 p-4 text-center border border-black">
                                Time
                            </div>
                            <div className="flex-1 p-4 text-center border border-black">
                                Events
                            </div>
                        </div>
                        {day1.map((s, idx) => (
                            <div key={idx} className="flex flex-1">
                                <div className="flex-1 py-2 text-center border border-black">
                                    {s.time}
                                </div>
                                <div className="flex-1 py-2 text-center border border-black">
                                    {s.event}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mt-6">
                        <div className="w-full py-4 text-xl font-semibold text-center text-blue-600">
                            Day 2
                        </div>
                        <div className="flex flex-1 font-semibold bg-blue-200">
                            <div className="flex-1 p-4 text-center border border-black">
                                Time
                            </div>
                            <div className="flex-1 p-4 text-center border border-black">
                                Events
                            </div>
                        </div>
                        {day2.map((s, idx) => (
                            <div key={idx} className="flex flex-1">
                                <div className="flex-1 py-2 text-center border border-black">
                                    {s.time}
                                </div>
                                <div className="flex-1 py-2 text-center border border-black">
                                    {s.event}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mt-6">
                        <div className="w-full py-4 text-xl font-semibold text-center text-blue-600">
                            Day 3
                        </div>
                        <div className="flex flex-1 font-semibold bg-blue-200">
                            <div className="flex-1 p-4 text-center border border-black">
                                Time
                            </div>
                            <div className="flex-1 p-4 text-center border border-black">
                                Events
                            </div>
                        </div>
                        {day3.map((s, idx) => (
                            <div key={idx} className="flex flex-1">
                                <div className="flex-1 py-2 text-center border border-black">
                                    {s.time}
                                </div>
                                <div className="flex-1 py-2 text-center border border-black">
                                    {s.event}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-16 text-3xl font-semibold text-center">
                        Techincal Sessions
                    </div>
                    <div className="w-full mt-2">
                        <div className="w-full py-4 text-xl font-semibold text-center text-blue-600">
                            Technical Session 1
                        </div>
                        <div className="flex flex-1 font-semibold bg-blue-200">
                            <div className="py-4 text-center border border-black w-28">
                                Paper ID
                            </div>
                            <div className="w-64 py-4 text-center border border-black">
                                Paper Title
                            </div>
                            <div className="flex-1 p-4 text-center border border-black">
                                Authors
                            </div>
                        </div>
                        {session1.map((s, idx) => (
                            <div key={idx} className="flex flex-1">
                                <div className="py-2 text-center border border-black w-28">
                                    {s["Paper ID"]}
                                </div>
                                <div className="w-64 px-2 py-2 text-center border border-black">
                                    {s["Authors"]}
                                </div>
                                <div className="flex-1 p-2 text-center border border-black">
                                    {s["Paper Title"]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mt-6">
                        <div className="w-full py-4 text-xl font-semibold text-center text-blue-600">
                            Technical Session 2
                        </div>
                        <div className="flex flex-1 font-semibold bg-blue-200">
                            <div className="py-4 text-center border border-black w-28">
                                Paper ID
                            </div>
                            <div className="w-64 py-4 text-center border border-black">
                                Paper Title
                            </div>
                            <div className="flex-1 p-4 text-center border border-black">
                                Authors
                            </div>
                        </div>
                        {session2.map((s, idx) => (
                            <div key={idx} className="flex flex-1">
                                <div className="py-2 text-center border border-black w-28">
                                    {s["Paper ID"]}
                                </div>
                                <div className="w-64 px-2 py-2 text-center border border-black">
                                    {s["Authors"]}
                                </div>
                                <div className="flex-1 p-2 text-center border border-black">
                                    {s["Paper Title"]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mt-6">
                        <div className="w-full py-4 text-xl font-semibold text-center text-blue-600">
                            Technical Session 3
                        </div>
                        <div className="flex flex-1 font-semibold bg-blue-200">
                            <div className="py-4 text-center border border-black w-28">
                                Paper ID
                            </div>
                            <div className="w-64 py-4 text-center border border-black">
                                Paper Title
                            </div>
                            <div className="flex-1 p-4 text-center border border-black">
                                Authors
                            </div>
                        </div>
                        {session3.map((s, idx) => (
                            <div key={idx} className="flex flex-1">
                                <div className="py-2 text-center border border-black w-28">
                                    {s["Paper ID"]}
                                </div>
                                <div className="w-64 px-2 py-2 text-center border border-black">
                                    {s["Authors"]}
                                </div>
                                <div className="flex-1 p-2 text-center border border-black">
                                    {s["Paper Title"]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full mt-6">
                        <div className="w-full py-4 text-xl font-semibold text-center text-blue-600">
                            Technical Session 4
                        </div>
                        <div className="flex flex-1 font-semibold bg-blue-200">
                            <div className="py-4 text-center border border-black w-28">
                                Paper ID
                            </div>
                            <div className="w-64 py-4 text-center border border-black">
                                Paper Title
                            </div>
                            <div className="flex-1 p-4 text-center border border-black">
                                Authors
                            </div>
                        </div>
                        {session4.map((s, idx) => (
                            <div key={idx} className="flex flex-1">
                                <div className="py-2 text-center border border-black w-28">
                                    {s["Paper ID"]}
                                </div>
                                <div className="w-64 px-2 py-2 text-center border border-black">
                                    {s["Authors"]}
                                </div>
                                <div className="flex-1 p-2 text-center border border-black">
                                    {s["Paper Title"]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Sponsors />
            </div>
        </section>
    );
}
