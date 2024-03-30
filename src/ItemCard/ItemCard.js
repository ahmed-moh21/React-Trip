import React from "react";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {

    const {addItem} = useCart();

    return (
        <>
                <div className="card-veh">

                    <div className="card-img">
                        <img className="card-im" src={props.img} alt="" />
                    </div>
                    <div className="card-inf">
                        <h3> {props.type}</h3>
                        <p> {props.price}$ </p>

                        <div id="container">
                            <button
                            onClick={() => addItem(props.item)}
                                class="learn-more">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">Add To Card</span>
                            </button>
                        </div>


                    </div>
                </div>
        </>
    )
}

export default ItemCard;