import React from "react";
import "./type.css";
import img1 from "./type-img/icon-1.png";
import img2 from "./type-img/icon-2.png";
import img3 from "./type-img/icon-3.png";
import img4 from "./type-img/icon-4.png";
import img5 from "./type-img/single-img-2.png";
import { BsCheckLg } from "react-icons/bs";


function Type() {

  const data = () => {
    const type = [
      { id: 1, image: img1, typ: "Vespa 967" },
      { id: 2, image: img2, typ: "Scooter SX9m" },
      { id: 3, image: img3, typ: "WideWeel 365x" },
      { id: 4, image: img4, typ: "E Bike 33" }
    ];

    return (
      <div className="con-type">
        {type.map((types) => (
          <div key={types.id} className="wid-typ container">

            <div className=" container type-container">
              <div className="type-img">
                <img src={types.image} alt="" />
              </div>

              <div className="con-type2">
                <h3>{types.typ} </h3>
                <p>
                  Lorem ipsum dolor sit aet si isto consectetur adipcing ipsum dolore
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="type-page">

      <div className="type1">
        <div>
          <p><i>Enjoy your trip!</i></p>
          <span> Viechle types </span>
        </div>
      </div>

      <div className="type2">
        {data()}
      </div>

      <div className="type3">
        <div className=" w-50 trans-typ">
          <div className=" container">
            <img className=" w-100" src={img5} alt="" />
          </div>
        </div>

        <div className=" w-50 trans-typ1">
          <div className="container">
            <div className="rid-list">
              <div className="rid-ar">
                <p>Ride around</p>
                <h3>Brrrrm brm</h3>
              </div>
              <ul>
                <li>
                  <BsCheckLg className="active-rid" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li>
                  <BsCheckLg className="active-rid" />
                  Eusmod tempor incididunt ut labore et dolore magna aliqua.
                </li>
                <li>
                  <BsCheckLg className="active-rid" />
                  Ut enim ad minim veniam, quis nostrud exercitation ullam
                </li>
                <li>
                  <BsCheckLg className="active-rid" />
                  Olaboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <BsCheckLg className="active-rid" />
                  Ut enim ad minim veniam, quis nostrud exercit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default Type;