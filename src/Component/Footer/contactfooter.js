import React from "react";
import "./contactfooter.css";
import img from "../../Assert/logo.png"
import img2 from "../../Assert/single-img-3-300x137.png"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoMdCall, IoIosArrowForward } from "react-icons/io";



function ContactFooter() {
  return (
    <div className="contactFoo_page">
      <div className="fo-1">
        <img className="co-or coor" src={img} alt="" />
        <span>
          Lorem ipsum dolor sit amet, consectetu adipiscing elit.
        </span>
        <div>
          <span> <AiFillInstagram className="co-or co-wi" /> </span>
          <span> <FaFacebookF className="co-or co-wi" /> </span>
          <span> <AiOutlineTwitter className="co-or co-wi" /> </span>
        </div>
      </div>



      <div className="fo-1">
        <p>24/7h Returns</p>
        <span>Lorem ipsum dolor sit amet, consectetu adipiscing elit. </span>
        <span> <IoMdCall className="co-or" /> +665 896 3359</span>
        <span> <IoMdCall className="co-or" /> +665 896 5358 </span>
      </div>


      <div className="fo-1">
        <p> Custumer Info </p>
        <span> <IoIosArrowForward /> Lorem ipsum dolor sit amet</span>
        <span> <IoIosArrowForward /> Komod tempor incididunt ut</span>
        <span> <IoIosArrowForward /> Labore et dolore magna</span>
      </div>


      <div className="fo-1">
        <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default ContactFooter;
