import React from "react";
import "./number.css";
import AnimatedNumbers from "react-animated-numbers";


function Number() {

    const [num, setNum] = React.useState(650);
    const [num1, setNum1] = React.useState(99);
    const [num2, setNum2] = React.useState(125);
    const [num3, setNum3] = React.useState(78);


    return (
        <div className="number-sec">

            {/* first section number */}
            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num}
                                fontStyle={{ fontSize: 40 }}
                                configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Ride around</p>
                </div>
            </div>

            {/* second section number */}

            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num1}
                                fontStyle={{ fontSize: 40 }}
                                configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Lorem ipsum</p>
                </div>
            </div>

            {/* therd section number */}

            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num2}
                                fontStyle={{ fontSize: 40 }}
                                configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Congue inermis</p>
                </div>
            </div>

            {/* fource section number */}

            <div className="wrapper">
                <div className="containers">
                    <ul id="countdown">
                        <li id="days">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={num3}
                                fontStyle={{ fontSize: 40 }}
                                configs={[
                                    { mass: 1, tension: 220, friction: 100 },
                                    { mass: 1, tension: 180, friction: 130 },
                                    { mass: 1, tension: 280, friction: 90 },
                                    { mass: 1, tension: 180, friction: 135 },
                                    { mass: 1, tension: 260, friction: 100 },
                                    { mass: 1, tension: 210, friction: 180 },
                                ]}
                            ></AnimatedNumbers>

                        </li>
                    </ul>
                    <p>Nibh doming</p>
                </div>
            </div>

        </div>

    );
}


export default Number