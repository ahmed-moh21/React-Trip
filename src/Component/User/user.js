import React from "react";
import "./user.css";
import user from "../../Assert/user.jpg"
import singleImg from "../../Assert/single-img.png"
function User() {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${user})` }}
                className="user-page">
                <div>
                    <div className="user-con">
                        <h4 className="userh4"> 256,00 People Use Brrrrm app service</h4>
                        <img src={singleImg} alt="" />
                    </div>
                    <div className="lorem">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing se eius tempor incididunt ut labore et dol
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;