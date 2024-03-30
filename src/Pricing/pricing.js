import React from "react";
import "./pricing.css";
import img from "../Assert/user.jpg";



function Pricing() {

    const priceDisplay = () => {
        const data = [
            { id: 1, name: "ExtraVouchers", price: "59" },
            { id: 1, name: "Extra Sale Vouchers", price: "125" },
            { id: 1, name: "ExtraVouchers", price: "99" },
            { id: 1, name: "ExtraVouchers", price: "77" },
        ];
        return (
            <>
                {data.map((item) => (
                    <div key={item.id} className="pric-con">
                        <p className="tit"><i>{item.name}</i></p>
                        <div className="price">
                            <span className="pr1">$</span>
                            <span className="pr2">{item.price}</span>
                        </div>
                        <div className="catsh">
                            <p className="lor">Lorem ipsum dolor sit</p>
                            <button className="pric-but">PURCHASE</button>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            <div className="pricing-page">
                <div style={{ backgroundImage: `url(${img})` }} className="pricehead-inf">
                    <p> <i> Enjoy your ride! </i> </p>

                    <h1 data-heading="i">Pricing </h1>

                </div>

                <div className="containerr">

                    <div className="con-tai">
                        {priceDisplay()}
                    </div>

                </div>

            </div>

        </>
    );
}

export default Pricing;
