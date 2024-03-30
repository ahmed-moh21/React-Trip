import React from "react";
import img from "../../Assert/cor11.jpg";
import "./slider.css";
import img1 from "./slider-img/author-1.png"
import img2 from "./slider-img/author-2.png"
import img3 from "./slider-img/author-3.png"

function Slider() {

    const slidImg = () => {

        const data = [
            { id: 1, imge: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/author-3.png", para: "Dale Vaccaro" },
            { id: 2, imge: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/author-2.png", para: "Diane Powell" },
            { id: 3, imge: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/author-1.png", para: "Joseph Kite" },
            { id: 1, imge: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/author-3.png", para: "Dale Vaccaro" },

        ];

        return (
            <>
                {data.map((item) => (
                    <div key={item.id} className="slid-div">
                        <div>
                            <img src={item.imge} alt="" />
                        </div>
                        <div>
                            <p> <i> {item.para}</i> </p>
                            <span>
                                Lorem ipsum dolor sit amet, dolor es consectetur adipiscing denisotene all Ipsum generators.
                            </span>
                        </div>
                    </div>
                )
                )}</>
        )
    }



    return (

        <div style={{ backgroundImage: `url(${img})` }} className="slider-page">

            <div className="slider-head">
                <p>Enjoy your trip!</p>
                <h3>Viechle types</h3>
            </div>

            <div className="slied">
                <div className=" container">
                    <div className="our-slied">
                        {slidImg()}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Slider;