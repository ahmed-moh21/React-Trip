import React from "react";
import "./about.css";
import imgBack from "./about-img/title-img-1.jpg";
import img1 from "./about-img/about-img-1.jpg"
import Rent from "../Component/Rent/rent";
import Number from "../Component/Numbers/number";
import { BsCheckLg } from "react-icons/bs";
import User from "../Component/User/user";
import AboutDown from "../Component/About-down/aboutDown";
import Snav from "../Component/meny-nav/Snav";
import ContactFooter from "../Component/Footer/contactfooter";

function About() {
    return (
        <div className="about-page">
            <div style={{ backgroundImage: `url(${imgBack})` }} className="about-head">
                <div className="about-title">
                    <p> <i> Enjoy your ride! </i></p>

                    <div class="focus">
                        <div class="focus--mask">
                            <div class="focus--mask-inner">About</div>
                        </div>
                    </div>

                </div>
            </div>
            <Rent />

            <div className="type3">
                <div className=" w-50 trans-typ">
                    <div className=" container">
                        <img className=" w-100" src={img1} alt="" />
                    </div>
                </div>

                <div className=" w-50 trans-typ1">
                    <div className="container">
                        <div className="rid-list">
                            <div className="rid-ar">
                                <p>Ride around</p>
                                <h3>Brrrrm brm</h3>
                            </div>
                            <ul>
                                <li>
                                    <BsCheckLg className="active-rid" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </li>
                                <li>
                                    <BsCheckLg className="active-rid" />
                                    Eusmod tempor incididunt ut labore et dolore magna aliqua.
                                </li>
                                <li>
                                    <BsCheckLg className="active-rid" />
                                    Ut enim ad minim veniam, quis nostrud exercitation ullam
                                </li>
                                <li>
                                    <BsCheckLg className="active-rid" />
                                    Olaboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                                <li>
                                    <BsCheckLg className="active-rid" />
                                    Ut enim ad minim veniam, quis nostrud exercit.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Number />
            <User />
            <AboutDown />
            <ContactFooter />
            <Snav />
        </div>
    );
}



export default About;