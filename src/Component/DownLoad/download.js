import React from "react";
import "./download.css"
import singleimg from "./down_img/single-img-1.png"
import singleimg2 from "./down_img/single-img-4.png"
import singleimg3 from "./down_img/single-img-5.png"

function Download() {
    return (
        <div className="download-page">
            <div className="down1">
                <div className="down-siz img-siz">
                    <img src={singleimg} alt="" />
                </div>
                <div className="down-siz1">
                    <p className="down-p1">Enjoy!</p>
                    <h3>Download services</h3>
                    <p className="down-p2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
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


export default Download;