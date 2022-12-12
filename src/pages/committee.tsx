import React from "react";
import Sponsors from "components/Sponsors";
import HeroBackground from "components/HeroBackground";
import Accordian, { AccordianType } from "components/Accordian";

export default function Contact() {
    const data: AccordianType[] = [
        {
            title: (
                <h4 className="text-xl font-medium text-black md:text-2xl">
                    Advisory Board
                </h4>
            ),
            content: (
                <ul className="px-2 list-bold md:py-8 md:px-16">
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Amlan Chakrabarti
                        </span>
                        , University of Calcutta, Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Anil Maheshwari
                        </span>
                        , Carleton University, Canada
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Basabi Chakraborty
                        </span>
                        , Iwate Prefectural University, Japan
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Bhabani P. Sinha
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Bhargab B. Bhattacharya
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Chiranjeev Kumar
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Debasish Dutta
                        </span>
                        , Indian Institute of Technology Kharagpur
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Debatosh Guha
                        </span>
                        , University of Calcutta, Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Debdeep Mukhopadhyay
                        </span>
                        , Indian Institute of Technology Kharagpur
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Dipti Prasad Mukherjee
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Gadadhar Sahoo
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Gosta Pada Biswas
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Goutam Chakraborty
                        </span>
                        , Iwate Prefectural University, Japan
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Jayanta Mukhopadhyay
                        </span>
                        , Indian Institute of Technology Kharagpur
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Keshav Dahal
                        </span>
                        , University of the West of Scotland, UK
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Krishnendu Mukhopadhyay
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Nabanita Das
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Pabitra Mitra
                        </span>
                        , Indian Institute of Technology Kharagpur
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Prasanta Kumar Jana
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Punam Saha
                        </span>
                        , The University of Iowa, USA
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Rajib Mall
                        </span>
                        , Indian Institute of Technology Kharagpur
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sajal Kumar Das
                        </span>
                        , Missouri University of Science and Technology
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sandip Das
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Subhas Chandra Nandy
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sudeshna Sarkar
                        </span>
                        , Indian Institute of Technology Kharagpur
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sudip Mishra
                        </span>
                        , Indian Institute of Technology Kharagpur
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sukumar Nandi
                        </span>
                        , Indian Institute of Technology Guwahati
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sushmita Mitra
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Susmita Sur Kolay
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Utpal Garain
                        </span>
                        , Indian Statistical Institute Kolkata
                    </li>
                </ul>
            ),
        },
        {
            title: (
                <h4 className="text-xl font-medium text-black md:text-2xl">
                    Program and Organizing Committee
                </h4>
            ),
            content: (
                <ul className="px-4 list-bold md:py-8 lg:text-lg">
                    <li className="py-2">
                        <b>Chief Patron:</b> Prem Vrat
                    </li>
                    <li className="py-2">
                        <b>Patron:</b> Rajiv Shekhar
                    </li>
                    <li className="py-2">
                        <b>General Chair:</b> Sachin Tripathi
                    </li>
                    <li className="py-2">
                        <b>Program Chair:</b> Ansuman Bhattacharya
                    </li>
                    <li className="py-2">
                        <b>Program Co-Chair:</b> Ayan Das
                    </li>
                    <li className="py-2">
                        <b>Organizing Chair:</b> Arup Kumar Pal
                    </li>
                    <li className="py-2">
                        <b>Organizing Co-Chair:</b> Saurabh Srivastava
                    </li>
                    <li className="py-2">
                        <b>Finance and Audit Chair:</b> Soumen Bag
                    </li>
                    <li className="py-2">
                        <b>Finance and Audit Co-Chair:</b> Tanusree Kaibartta
                    </li>
                    <li className="py-2">
                        <b>Tutorial, Publication and Editorial Chair: </b>
                        Susanta Mukhopadhyay
                    </li>
                    <li className="py-2">
                        <b>Sponsorship Chair:</b> Tarachand Amgoth
                    </li>
                    <li className="py-2">
                        <b>
                            Press, Media Management, Advertisement and Publicity
                            Chair:{" "}
                        </b>
                        Dharavath Ramesh
                    </li>
                    <li className="py-2">
                        <b>Registration Chair:</b> Rajendra Pamula
                    </li>
                    <li className="py-2">
                        <b>Transportation and Accommodation Chair: </b> Haider
                        Banka
                    </li>
                    <li className="py-2">
                        <b>Food and Hospitality Chair:</b> Annavarapu Chandra
                        Sekhara Rao
                    </li>
                    <li className="py-2">
                        <b>Decoration, Cultural and Stage Management Chair: </b>
                        Hari Om
                    </li>
                </ul>
            ),
        },

        {
            title: (
                <h4 className="text-xl font-medium text-black md:text-2xl">
                    Organizing Committee
                </h4>
            ),
            content: (
                <ul className="px-2 list-bold md:py-8 md:px-16">
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Ansuman Bhattacharya
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Annavarapu Chandra Sekhara Rao
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Ayan Das
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Ajoy Kumar Bhaumik
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Arup Kumar Pal
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Atreyee Mukherjee
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Badam Singh Kushvah
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Chiranjeev Kumar
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Dheeraj Kumar
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Debjani Mitra
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Dharavath Ramesh
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Govind Murmu
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Haider Banka
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Hari Om
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Kamesh Kanchan Katariar
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Kaushik Mondal
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Koustav Rudra
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Madhumanti Bhattacharya
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Madhulika Mohanty
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Mrinal Sen
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Nirban Manna
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Niladri Patra
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Nirmala Rao
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Prasanta Kumar Jana
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Prashant Sharma
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Rajesh Mishra
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Ram Madhabh Bhattacharjee
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Rajendra Pamula
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Rakesh Soni
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Soumen Bag
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Soumit Chatterjee
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Saurabh Datta Gupta
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sucharita Majhi
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sushanta Mukhopadhayay
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Satyanarayan Sharma
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sukha Ranjan Samaddar
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Shatrughan Soren
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Saurabh Srivastava
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Sachin Tripathi
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Shiv Ram
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Tarachand Amgoth
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                    <li className="py-2">
                        <span className="font-bold md:font-normal md:text-[1.06rem]">
                            Tanusree Kaibartta
                        </span>
                        , Indian Institute of Technology (Indian School of
                        Mines) Dhanbad
                    </li>
                </ul>
            ),
        },
        {
            title: (
                <h4 className="text-xl font-medium text-black md:text-2xl">
                    Technical Program Committee
                </h4>
            ),
            content: (
                <>
                    <h2 className="py-2 text-lg font-medium md:text-xl md:pl-8 md:py-4">
                        Network and communication:
                    </h2>

                    <ul className="px-2 list-bold md:px-16">
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Ansuman Bhattacharya
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Arnab Sinha
                            </span>
                            , École Polytechnique, Palaiseau, France
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Avirup Das
                            </span>
                            , TCS Innovation Lab
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Ayan Mondal
                            </span>
                            , Indian Institute of Technology Indore
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Babul P Tiwari
                            </span>
                            , Indian Institute of Information Technology
                            Bhagalpur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Barsha Mitra
                            </span>
                            , Birla Institute of Technology and Science Pilani
                            (Hyderabad campus)
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Chiranjeev Kumar
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Debjani Mitra
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Dibakar Saha
                            </span>
                            , National Institute of Technology Raipur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Koushik Sinha
                            </span>
                            , Southern Illinois University, Carbondale
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Nilanjan Biswas
                            </span>
                            , National Institute of Technology Durgapur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Rajendra Pamula
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sachin Tripathi
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sankar Kumar Ghosh
                            </span>
                            , Shiv Nadar University
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Soumen Moulik
                            </span>
                            , National Institute of Technology Meghalaya
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Subhadip Batabyal
                            </span>
                            , National Institute of Technology Durgapur
                        </li>
                    </ul>
                    <h2 className="py-2 text-lg font-medium md:text-xl md:pl-8 md:py-4">
                        Cryptography and Network Security:
                    </h2>

                    <ul className="px-2 list-bold md:px-16">
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Abhay Kumar Singh
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Ansuman Bhattacharya
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Arijit Karati
                            </span>
                            , National Sun Yat-sen University (NSYSU),
                            Kaohsiung, Taiwan
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Arup Kumar Pal
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Avik Chakraborty
                            </span>
                            , University of Exeter UK
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Binanda Sengupta
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Dhiman Saha
                            </span>
                            , Indian Institute of Technology Bhilai
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Gosta Pada Biswas
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Hari Om
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Kalikinkar Mandal
                            </span>
                            , University of New Brunswick CA
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Nilanjan Dutta
                            </span>
                            , TCG CREST
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Pramod Kumar Kewat
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sachin Tripathi
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sangram Ray
                            </span>
                            , National Institute of Technology Sikkim
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sumit Kumar Pandey
                            </span>
                            , Indian Institute of Technology Jammu
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Urbi Chatterjee
                            </span>
                            , Indian Institute of Technology Kanpur
                        </li>
                    </ul>
                    <h2 className="py-2 text-lg font-medium md:text-xl md:pl-8 md:py-4">
                        Embedded Systems and VLSI:
                    </h2>
                    <ul className="px-2 list-bold md:px-16">
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Ayan Pal Chaudhuri
                            </span>
                            , DAIICT Gandhinagar
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Debasis Mitra
                            </span>
                            , National Institute of Technology Durgapur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Deepika Gupta
                            </span>
                            , International Institute of Information Technology,
                            Naya Raipur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Himadri Sekhar Paul
                            </span>
                            , TCS Innovation Lab
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Mrinal Sen
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sudip Roy
                            </span>
                            , Indian Institute of Technology Roorkee
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sukanta Bhattacharjee
                            </span>
                            , Indian Institute of Technology Guwahati
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sumana Ghosh
                            </span>
                            , Indian Statistical Institute Kolkata
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sumanta Pyne
                            </span>
                            , National Institute of Technology Rourkela
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Tanushree Kaibartta
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                    </ul>
                    <h2 className="py-2 text-lg font-medium md:text-xl md:pl-8 md:py-4">
                        Image, Video and Signal Processing:
                    </h2>
                    <ul className="px-2 list-bold md:px-16">
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Anabik Pal
                            </span>
                            , SRM University
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Angshuman Paul
                            </span>
                            , Indian Institute of Technology Jodhpur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Arup Kumar Pal
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                B Uma Shankar
                            </span>
                            , Indian Statistical Institute Kolkata
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Deepika Gupta
                            </span>
                            , Indian Institute of Information Technology
                            Vadodara International Campus Diu
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Govind Murmu
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Jyotsna Kumar Mondal
                            </span>
                            , University of Kalyani
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Prasun Trapathi
                            </span>
                            , University of Sheffield, UK
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Priyambada Subudhi
                            </span>
                            , Indian Institute of Information Technology Sri
                            City, Chittoor
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Rajarshi Pal
                            </span>
                            , IDBRT Hyderabad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sanjay Pratihar
                            </span>
                            , Indian Institute of Information Technology Kalyani
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Soumen Bag
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Subhadip Basu
                            </span>
                            , Jadavpur University
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Susanta Mukhopadhyay
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                    </ul>
                    <h2 className="py-2 text-lg font-medium md:text-xl md:pl-8 md:py-4">
                        Soft Computing, Artificial Intelligence and Machine
                        Learning:
                    </h2>
                    <ul className="px-2 list-bold md:px-16">
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Annavarapu Chandra Sekhara Rao
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Ayan Das
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Badri N Subudhi
                            </span>
                            , Indian Institute of Technology Jammu
                        </li>

                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Haider Banka
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Jabez Christopher
                            </span>
                            , Birla Institute of Technology and Science Pilani
                            (Hyderabad campus)
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Koustav Rudra
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Kripabandhu Ghosh
                            </span>
                            , Indian Institute of Science Education and Research
                            (IISER) Kolkata
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Monidipa Das
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Rajendra Prasath
                            </span>
                            , Indian Institute of Information Technology Sri
                            City, Chittoor
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Samrat Mukhopadhyay
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sanjay Chatterji
                            </span>
                            , Indian Institute of Information Technology Kalyani
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sankha Subhra Mullick
                            </span>
                            , LinkedIn Corporation
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Soumajit Pramanik
                            </span>
                            , Indian Institute of Technology Bhilai
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Suman Kundu
                            </span>
                            , Indian Institute of Technology Jodhpur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Tapas Kumar Mishra
                            </span>
                            , National Institute of Technology Rourkela
                        </li>
                    </ul>
                    <h2 className="py-2 text-lg font-medium md:text-xl md:pl-8 md:py-4">
                        Algorithms:
                    </h2>
                    <ul className="px-2 list-bold md:px-16">
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Ankush Acharyya
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Arindam karmar
                            </span>
                            , Tezpur University
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Aritra Banik
                            </span>
                            , National Institute of Science Education and
                            Research
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Barun Gorain
                            </span>
                            , Indian Institute of Technology Bhilai
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Dinabandhu Pradhan
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Diptapriyo Majumdar
                            </span>
                            , Indraprastha Institute of Information Technology
                            Delhi
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Gautam Das
                            </span>
                            , Indian Institute of Technology Guwahati
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Koushik Mandal
                            </span>
                            , Indian Institute of Technology Ropar
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Minati De
                            </span>
                            , Indian Institute of Technology Delhi
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Partha Sarathi Mandal
                            </span>
                            , Indian Institute of Technology Guwahati
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Subhash Bhagat
                            </span>
                            , Indian Institute of Technology Jodhpur
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Subhasis Bhattacharjee
                            </span>
                            , Indian Institute of Technology Jammu
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sujoy Bhore
                            </span>
                            , Indian Institute of Science Education and Research
                            Bhopal
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Tapas Kumar Mishra
                            </span>
                            , National Institute of Technology Rourkela
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Subhrangshu Mandal
                            </span>
                            , Indian Institute of Technology Indore
                        </li>
                    </ul>
                    <h2 className="py-2 text-lg font-medium md:text-xl md:pl-8 md:py-4">
                        Information Technology:
                    </h2>
                    <ul className="px-2 list-bold md:px-16">
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Dharavath Ramesh
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Gadadhar Sahoo
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Prasanta Kumar Jana
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Rajarshi Ray
                            </span>
                            , Indian Association for the Cultivation Of Science
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Saurabh Srivastava
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Shruti Gan Chowdhury
                            </span>
                            , Jadavpur University
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Subhashis Chatterjee
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Sudakshina Dutta
                            </span>
                            , Indian Institute of Technology Goa
                        </li>
                        <li className="py-2">
                            <span className="font-bold md:font-normal md:text-[1.06rem]">
                                Tarachand Amgoth
                            </span>
                            , Indian Institute of Technology (Indian School of
                            Mines) Dhanbad
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 lg:-mt-5">
                        <span className="text-4xl font-semibold lg:text-6xl text-dark">
                            Committee
                        </span>
                        {/* <h2 className="mt-5 text-xl font-semibold">
                            Organizing Committees <br />
                            Senior Program Committee
                            <br /> Program Committee
                        </h2> */}
                    </div>
                </div>
            </HeroBackground>
            <div className="relative flex flex-col-reverse md:flex-row">
                <div className="w-full max-w-5xl px-8 py-24 mx-auto lg:p-16">
                    {data.map((item: AccordianType) => (
                        <Accordian title={item.title} content={item.content} />
                    ))}
                </div>
                <Sponsors />
            </div>
        </section>
    );
}
