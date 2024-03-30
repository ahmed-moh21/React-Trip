import React from "react";
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BiHomeAlt } from "react-icons/bi";
import { RiEBikeFill, RiContactsLine } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import Logo from "../Assert/logo.png";

function NavBar() {
	return (
		<>
			<Navbar expand="lg">
				<Navbar.Brand href="#home">
					<img className="logo" src={Logo} alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
					<Nav >
						<Nav.Link href="#home">
							<a href="/"> <BiHomeAlt style={{ color: "orange", fontSize: "35px" }} className="nav-icon" /></a>
							<span className="nav-span"> Home </span>
						</Nav.Link>

						<Nav.Link href="#link">
							<a href="/vehicles"> <RiEBikeFill className="nav-icon" /> </a>
							<span className="nav-span"> VEHICLES  </span>
						</Nav.Link>

						<Nav.Link href="#home">
							<a href="/aboutus"> <BsFillChatLeftTextFill className="nav-icon" /> </a>
							<span className="nav-span">ABOUT US </span>
						</Nav.Link>

						<Nav.Link href="#link">
							<a href="/pricing" > <IoIosPricetags className="nav-icon" /> </a>
							<span className="nav-span"> PRICING </span>
						</Nav.Link>

						<Nav.Link href="#home">
							<a href="/contact" > <RiContactsLine className="nav-icon" /> </a>
							<span className="nav-span">  CONTACT  </span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavBar;