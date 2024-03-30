import React from "react";
import "./vehicles.css";
import vehiclesTitle from "./vehicles-img/vehicles-title.jpg";
import ItemCard from "../ItemCard/ItemCard";
import datd from "../dummy-data";
import Cart from "../Cart/cart";
import { CartProvider } from "react-use-cart";

function Vehicles() {
    return (
        <CartProvider>
            <div className="vehicles-page">
               
                <div style={{ backgroundImage: `url(${vehiclesTitle})` }} className="vehicle-head">
                    <p> <i> Enjoy your ride! </i> </p>
                    <h2> Rent vehicles </h2>
                </div>


                <div className="vehicles-con">
                    <div className="card-con container">
                        {datd.productData.map((item, index) => {
                            return (
                                <ItemCard
                                    img={item.img}
                                    type={item.type}
                                    price={item.price}
                                    item={item}
                                    key={index} />
                            )
                        })}

                    </div>
                </div>
                <Cart />
            </div>
        </CartProvider>
    );
}




export default Vehicles;