import React from "react";
import "./rent.css"
import Card from 'react-bootstrap/Card'


function Rent() {

    const Users = () => {
        const data = [
            { id: 1, image: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/process-img-1.png", step: "Choose Viechle" },
            { id: 2, image: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/process-img-2.png", step: "Order Online" },
            { id: 3, image: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/process-img-3.png", step: "Online Payments" },
            { id: 4, image: "https://bridge322.qodeinteractive.com/wp-content/uploads/2020/01/process-img-4.png", step: "24/7h Returns" }
        ];

        return (
            <div className="users">
                {data.map((user) => (
                    <Card key={user.id} className="text-center ">
                        <Card.Img className="img-rent" src={user.image} />
                        <Card.Body>
                            <Card.Title className="ren-st">{user.step}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    };

    return (
        <div className="rent-page">
            <div className="ren-inf">
                <p className="inf-1"><i>Enjoy your trip!</i></p>
                <h2>How to rent a scooter?</h2>
                <p className="inf-2">Lorem ipsum dolor sit amet, co ctetur adipiscing se eius tempor incididunt ut labore et dol</p>
            </div>

            <div className="ren-inf2">
                {Users()}
                <div className="dooted"></div>
            </div>
        </div>
    );
}


export default Rent;