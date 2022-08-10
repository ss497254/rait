import React from "react";
import HeroBackground from "components/HeroBackground";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Sponsorship
                        </span>
                        <h2 className="mt-5 text-xl font-semibold">
                            Why should you sponsor?
                        </h2>
                    </div>
                </div>
            </HeroBackground>
            <div className="mb-12 p-16 flex flex-col w-full gap-8">
                <p>
                    <strong>Recruitment</strong>: To sustain the quality of RAIT
                    that the IIT(ISM) community have been able to establish thus
                    far, we greatly depend on financial support from reputed
                    organizations. RAIT provides sponsors an opportunity to
                    showcase their organization capabilities to researchers and
                    engineers from all over the world. RAIT provides multiple
                    avenues for you to meet and recruit the best and brightest
                    minds in the fields of data science, analytics, machine
                    learning, artificial intelligence, and Big Data. Avenues
                    include live talks and recorded videos, networking sessions,
                    social gatherings, exhibition booths etc. to showcase your
                    company & jobs.
                </p>
                <p>
                    <strong>Customers</strong>: RAIT gives you the chance to
                    connect with new clients in addition to enabling branding
                    and recruitment. The exposition booth, networking events,
                    and social gatherings are all places where representatives
                    from various businesses and startups market and meet
                    potential clients.
                </p>
                <p>
                    <strong>Community</strong>: A large and active community of
                    researchers and practitioners exists within RAIT. Your
                    sponsorships enable us to provide student travel grants,
                    host eminent speakers, and promote the community of
                    researchers working on cutting-edge data-driven concepts.
                    Finally, and very obviously, corporate support enables us to
                    maintain the registration fees for students and other guests
                    at a reasonable level.
                </p>
            </div>
        </section>
    );
}
