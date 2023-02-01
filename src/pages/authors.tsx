import HeroBackground from "components/HeroBackground";
import ImportantDates from "components/ImportantDates";
import Sponsors from "components/Sponsors";
import Link from "next/link";
import React from "react";
import LinkIcon from "../assets/icons/Link";

export default function Authors() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl font-semibold lg:text-6xl text-dark">
                            Authors
                        </span>
                        <h2 className="mt-5 text-xl">
                            To submit a paper in{" "}
                            <span className="font-extrabold">RAIT 2023</span>
                            &nbsp;
                            <a
                                href="https://easychair.org/conferences/?conf=rait2023"
                                target="_blank"
                                className="font-bold text-green-300 underline underline-offset-4"
                            >
                                Click here
                            </a>
                        </h2>
                    </div>
                </div>
            </HeroBackground>
            <div className="relative flex flex-col-reverse md:flex-row">
                <div className="w-full">
                    <div className="pt-24 mb-16">
                        <div className="flex justify-center px-8 mx-auto text-justify">
                            <a
                                className="px-4 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 md:text-xl"
                                href="/~rait/CFP_RAIT_2023.pdf"
                                target="_blank"
                            >
                                Download Call for Papers/Topic Pdf
                            </a>
                        </div>
                    </div>
                    <ImportantDates />
                    <div className="py-24 mb-16 bg-blue-50 md:px-8">
                        <h2 className="mb-12 text-3xl font-semibold text-center">
                            Major Tracks
                        </h2>
                        <div className="max-w-5xl mx-auto text-justify md:px-8">
                            Authors can submit regular (6 pages) papers that
                            contain original material that is not currently
                            communicated in other conferences or journals and
                            has not been previously published. Potential
                            research topics include (but are not limited to) the
                            following thrust areas.
                            <br />
                            <br />
                            The tracks in this conference include (but not
                            limited to):
                            <br />
                            <ul className="pl-12 my-6 mt-2 list-disc">
                                <li>
                                    Recent Advances in Communications and
                                    Networks
                                </li>
                                <li>
                                    Recent Advances in Cryptography and Network
                                    Security
                                </li>
                                <li>
                                    Recent Advances in Embedded Systems and VLSI
                                </li>
                                <li>
                                    Recent Advances in Image, Video and Signal
                                    Processing
                                </li>
                                <li>
                                    Recent Advances in Soft Computing,
                                    Artificial Intelligence and Machine Learning
                                </li>
                                <li>Recent Advances in Algorithms</li>
                                <li>
                                    Recent Advances in Information Technology
                                </li>
                            </ul>
                            All accepted and registered papers will be published
                            in IEEE proceedings.
                        </div>
                    </div>
                    <div className="max-w-5xl px-8 py-10 mx-auto mb-16 text-justify">
                        <h2 className="mb-12 text-3xl font-semibold text-center">
                            Paper submission details
                        </h2>
                        All submissions should be written in English with a
                        maximum page length of SIX (6) printed pages including
                        bibliographic references for the regular paper track.
                        Papers should be in PDF format, two columns, (minimum
                        10-point font) or greater and compliant with other{" "}
                        <strong>IEEE</strong> manuscript guidelines.
                        <br /> <br /> Standard <strong>IEEE</strong> conference
                        templates for <strong>LaTeX</strong> and{" "}
                        <strong>Microsoft Word</strong> formats must be used for
                        technical papers which can be found at:{" "}
                        <a
                            href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                            target="_blank"
                            className="font-bold text-blue-500 underline underline-offset-4"
                        >
                            Link
                            <LinkIcon className="inline-block px-2 -mx-1" />
                        </a>
                        <h2 className="mt-12 text-xl">
                            To submit a paper in{" "}
                            <span className="font-extrabold">RAIT 2023</span>{" "}
                            &nbsp;
                            <a
                                href="https://easychair.org/conferences/?conf=rait2023"
                                target="_blank"
                                className="font-bold text-blue-500 underline underline-offset-4"
                            >
                                Click here
                            </a>
                        </h2>
                    </div>
                    <div className="py-24 mb-16 bg-blue-50 md:px-8">
                        <h2 className="mb-12 text-3xl font-semibold text-center">
                            Instructions for Camera-Ready Paper Submission for
                            IEEE XPLore
                        </h2>
                        <div className="max-w-5xl mx-auto leading-8 text-justify md:px-8">
                            The recommended format must be used. Please use the
                            Word / LaTeX templates given on the IEEE Website{" "}
                            <a
                                className="text-blue-600"
                                href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                            >
                                here
                            </a>
                            .
                            <br />
                            <br />
                            Kindly ensure that: <br />
                            <ul className="pl-8 list-disc">
                                <li>
                                    No pictures of the author or biographies
                                    appear anywhere in the manuscript.
                                </li>
                                <li>
                                    Page number and volume of publication at the
                                    top header should NOT appear in camera ready
                                    (as given on Latex template on Linux/Unix).{" "}
                                </li>
                                <li>
                                    The final manuscript does not exceed 6 pages
                                    for full paper including references.
                                </li>
                            </ul>
                            <br />
                            IEEE XPlore PDF compliance must be checked at the
                            IEEE PDF Xpress website. If your file is not Xplore
                            compliant, it will NOT be published and will be
                            removed from the RAIT 2023 conference proceedings
                            and the IEEE Xplore database. To meet these
                            requirements, you must ensure that your PDF file is
                            compliant by using the IEEE PDF express system.
                            <br />
                            <br />
                            <ul className="pl-8 list-decimal">
                                <li className="pl-2">
                                    Steps to be followed{" "}
                                    <b>Before Creating a PDF</b>
                                    <br />
                                    <div className="inline-block w-2 h-2 mx-2 mb-[1px] border border-black rounded-full" />
                                    Proofread your source document thoroughly to
                                    confirm that it will require no revision.
                                </li>
                                <li className="pl-2">
                                    Steps to be followed for{" "}
                                    <b>IEEE XPLore Compliant PDF generation</b>
                                    <br />
                                    <div className="inline-block w-2 h-2 mx-2 mb-[1px] border border-black rounded-full" />
                                    Please go to the IEEE PDF eXpress site at:{" "}
                                    <a
                                        className="text-blue-600"
                                        href="https://ieee-pdf-express.org/"
                                    >
                                        https://ieee-pdf-express.org/
                                    </a>{" "}
                                    <br />
                                    <div className="inline-block w-2 h-2 mx-2 mb-[1px] border border-black rounded-full" />
                                    Click on the link "Don't have an account?{" "}
                                    <a
                                        href="https://ieee-pdf-express.org/account/signup"
                                        className="text-blue-600"
                                    >
                                        Create account"
                                    </a>{" "}
                                    <br />
                                    <div className="inline-block w-2 h-2 mx-2 mb-[1px] border border-black rounded-full" />
                                    Enter the following:
                                    <br />{" "}
                                    <div className="inline-block w-2 h-2 ml-6 mr-2 mb-[1px] bg-black rounded-full" />
                                    The Conference ID: <b>57693X</b>
                                    <br />{" "}
                                    <div className="inline-block w-2 h-2 ml-6 mr-2 mb-[1px] bg-black rounded-full" />
                                    Your email address
                                    <br />{" "}
                                    <div className="inline-block w-2 h-2 ml-6 mr-2 mb-[1px] bg-black rounded-full" />
                                    A password
                                    <br />
                                    <div className="inline-block w-2 h-2 mx-2 mb-[1px] border border-black rounded-full" />
                                    Continue to enter information as prompted.
                                    <br />
                                    An Online confirmation will be displayed and
                                    an email confirmation will be sent verifying
                                    your account setup. <br />
                                    <div className="inline-block w-2 h-2 mx-2 mb-[1px] border border-black rounded-full" />{" "}
                                    For any assistance regarding PDF eXpress,
                                    please click on the following link:{" "}
                                    <a
                                        href="https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress"
                                        className="text-blue-600"
                                    >
                                        https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress
                                    </a>
                                    <br />
                                    <br />
                                    <b>Contacting PDF eXpress Support: </b>
                                    Access the{" "}
                                    <a
                                        href="https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress"
                                        className="text-blue-600"
                                    >
                                        {" "}
                                        Publications Support Center{" "}
                                    </a>{" "}
                                    for IEEE PDF eXpress. If you do not find an
                                    answer in the Find Answers tab, go to the
                                    Ask A Question tab. Your question will be
                                    forwarded to IEEE PDF Support and answered
                                    within 3 business days.
                                    <br />
                                    <br />
                                    In order to prove that PDF Check has been
                                    passed, you must forward the confirmation
                                    mail received from the IEEE PDF eXpress
                                    service to{" "}
                                    <a
                                        href="mailto:rait@iitism.ac.in"
                                        className="text-blue-600"
                                    >
                                        {" "}
                                        rait@iitism.ac.in.
                                    </a>
                                </li>
                                <li className="pl-2">
                                    If you pass the{" "}
                                    <a
                                        href="https://ieee-pdf-express.org/"
                                        className="text-blue-600"
                                    >
                                        IEEE PDF eXpress
                                    </a>{" "}
                                    check, you will receive a PDF file from IEEE
                                    PDF eXpress via e-mail. Approved PDF files
                                    will be stamped with an approval comment in
                                    the document properties by PDF eXpress.
                                    Please forward the email to{" "}
                                    <a
                                        href="mailto:rait@iitism.ac.in"
                                        className="text-blue-600"
                                    >
                                        {" "}
                                        rait@iitism.ac.in.
                                    </a>{" "}
                                    along with the uploaded pdf file which you
                                    have uploaded in the{" "}
                                    <b>Author Registration Portal</b>.
                                </li>
                                <li className="pl-2 font-semibold text-indigo-600">
                                    Please complete the process by January 16,
                                    2023.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="mb-12 text-3xl font-semibold text-center">
                        IEEE Publication Agreement
                    </h2>
                    <div className="flex justify-center mb-12">
                        <Link href="/authors/login">
                            <a className="px-4 py-2 mx-auto text-white bg-blue-500 rounded">
                                Copyright Submission
                            </a>
                        </Link>
                    </div>
                </div>
                <Sponsors />
            </div>
        </section>
    );
}
