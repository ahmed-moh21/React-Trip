import React from "react";
import { useCart } from "react-use-cart";
import Button from 'react-bootstrap/Button';
import "./cart.css"



const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h2 className=" lin m-4 text-center">Your Cart is <a className="lin-k" href="#">
    Empty
    <svg viewBox="0 0 70 36">
        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
    </svg>
</a></h2>

    return (
        <>
            <div>
                <Button
                    onClick={() => {
                        let myDiv = document.getElementById("caDi");
                        myDiv.classList.toggle("call-cart-r")
                    }}
                    className=" m-4 trans" variant="outline-success">Cart</Button>
            </div>
            <div id="caDi" className=" call-cart py-4 container">
                <div className=" row justify-content-center">
                    <div className=" col-12">
                        <h5>Cart({totalUniqueItems})  total Items({totalItems})</h5>
                        <table className=" table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{ height: '6rem' }} />
                                            </td>
                                            <td> {item.type}</td>
                                            <td> {item.price} </td>
                                            <td> Quantity ({item.quantity}) </td>
                                            <td
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                className="btn btn-info ms-3"> -</td>

                                            <td
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                className="btn btn-info ms-3"> + </td>

                                            <td
                                                onClick={() => removeItem(item.id)}
                                                className="btn btn-danger ms-3"> Remove Item </td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className=" col-auto m-3">
                        <h3> Total price : {cartTotal} $ </h3>
                    </div>
                    <div className=" col-auto m-2">
                        <button
                            className=" btn btn-danger m-2"
                            onClick={() => emptyCart()}
                        > Clear Cart</button>
                        <button className=" btn btn-primary m-2">
                            Bay Now
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Cart;