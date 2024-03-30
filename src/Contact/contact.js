import React from "react";
import "./contact.css";
import img from "./Contact-img/contact-img-1-1536x530.jpg";
import FormExample from "./Contact-img/form";
import { BiMessageSquare, BiPhoneCall } from "react-icons/bi";
import { RiHomeSmileFill } from "react-icons/ri";
import ContactFooter from "../Component/Footer/contactfooter";

function Contact() {
    return (
       <>
        <div className="contact-page">
            <div style={{ backgroundImage: `url(${img})` }} className="con-map"></div>

            <div className=" form-sec ">
                <div className=" w-50 form-con">
                    <FormExample />
                </div>
                <div className=" w-50 coninf">
                    <div className="con-inf">
                        <p> <i> Ride around </i> </p>
                        <h3>Send Us a message</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing </span>
                        <span> <RiHomeSmileFill className="fa-for" />Sessamee Street 3347 New York </span>
                        <span> <BiMessageSquare className="fa-for" /> bridge@example.com</span>
                        <span> <BiPhoneCall className="fa-for" /> 	+665 896 3359 </span>
                    </div>
                </div>
            </div>
        </div>
        <ContactFooter />
       </>
    );
}


export default Contact;
