import React from 'react'
import "./home.css"
import cor11 from "../Assert/cor11.jpg"
import singImg from "../Assert/single-img.png"
import Rent from '../Component/Rent/rent';
import Download from '../Component/DownLoad/download';
import User from '../Component/User/user';
import Type from '../Component/type/type';
import Slider from '../Component/home-slider/slider';
import Snav from '../Component/meny-nav/Snav';
import ContactFooter from '../Component/Footer/contactfooter';
import DarkBottom from '../Component/DarkButtom/darkBottom';


function Home() {

  setTimeout(
    function () {
      let loaders = document.getElementById("dis-for")
      loaders.classList.add("get-for")

      let loaders1 = document.getElementById("dis-for1")
      loaders1.classList.add("get-for1")
    }, 5000);

  setTimeout(
    function () {

      let getO = document.getElementById("home-o")
      getO.classList.add("getO")

      let getO1 = document.getElementById("home-o1")
      getO1.classList.add("getO1")

    }, 6000);


  return (
    <>
     <DarkBottom />
      <div
        style={{ backgroundImage: `url(${cor11})` }}
        className='home-page'>

        <div className='home-cap'>
          <h5 id='dis-for'> Enjoy your ride ! </h5>
          <h4 id='dis-for1' > Sc<div id='home-o'>O</div><div id='home-o1'>O</div>ter Rent </h4>
        </div>
        <div className='singImg'>
          <img src={singImg} alt="" />
        </div>
      </div>
      <Rent />
      <Download />
      <User />
      <Type />
      <Slider />
      <Snav />
      <ContactFooter />
    </>
  );
}


export default Home;