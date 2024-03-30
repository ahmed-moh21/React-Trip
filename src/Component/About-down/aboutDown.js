import React from "react";
import "./aboutDown.css"
import singleimg from "../../About/about-img/about-img-2.png"
import singleimg2 from "../DownLoad/down_img/single-img-4.png"
import singleimg3 from "../DownLoad/down_img/single-img-5.png"

function AboutDown() {
    return (
        <div className="download-pagee">
            <div className="down1">
                <div className="down-siz img-siz">
                    <img src={singleimg} alt="" />
                </div>
                <div className="down-siz1">
                    <p className="down-p1">Enjoy!</p>
                    <h3>Download services</h3>
                    <p className="down-p2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <div className="down-store">
                        <img src={singleimg2} alt="" />
                        <img src={singleimg3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutDown;