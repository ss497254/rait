import React from "react";
import HeroBackground from "components/HeroBackground";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            CONTACT US
                        </span>
                        <h2 className="mt-5 text-xl font-semibold">
                            How to contact us?
                        </h2>
                    </div>
                </div>
            </HeroBackground>
            <h2 className="text-center w-full mt-16 text-2xl md:text-3xl font-bold">
                Computer Science and Engineering Department
            </h2>
            <iframe
                className="px-8 w-full my-16"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2308.2264976951114!2d86.4403420038952!3d23.812167160457953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa5973abb60f9843!2sDepartment%20Of%20Computer%20Science%20And%20Engineering!5e0!3m2!1sen!2sin!4v1660121262466!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
            <div className="my-12 p-16 flex w-full gap-16 flex-col justify-evenly md:flex-row">
                <div className="mb-8 flex min-w-[300px]">
                    <div className="mr-6 pt-4">
                        <svg
                            width="100"
                            height="70"
                            viewBox="0 0 29 35"
                            className="fill-current"
                        >
                            <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                            <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                        </svg>
                    </div>
                    <div>
                        <h5 className="mb-4 text-2xl font-semibold">
                            Our Location
                        </h5>
                        <p className="font-serif text-lg">
                            Indian Institute of Technology
                            <br /> (Indian School of Mines) Dhanbad,
                            <br /> Dhanbad- 826004 <br />
                            Jharkhand, India
                        </p>
                    </div>
                </div>
                <div className="mb-8 flex min-w-[300px]">
                    <div className="mr-6 pt-4">
                        <svg
                            width="60"
                            height="70"
                            viewBox="0 0 34 25"
                            className="fill-current"
                        >
                            <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                        </svg>
                    </div>
                    <div>
                        <h5 className="mb-4 text-2xl font-semibold">
                            How to reach?
                        </h5>
                        <a
                            className="underline text-xl"
                            href="mailto:rait@iitism.ac.in"
                        >
                            rait@iitism.ac.in
                        </a>
                        <br />
                        <br />
                        <span className="text-xl">+91-326-2235273</span>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    );
}
