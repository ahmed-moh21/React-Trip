import React from "react";
import "./snav.css";
import { BiHomeAlt } from "react-icons/bi";
import { RiEBikeFill, RiContactsLine } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";

function Snav() {

  window.onscroll = function () {
    var myDiv = document.getElementById("doneNav");
    var B = document.body; //IE 'quirks'
    var D = document.documentElement; //IE with doctype
    D = (D.clientHeight) ? D : B;

    if (D.scrollTop >= 700) {
      myDiv.classList.add("show");
    } else {
      myDiv.classList.remove("show");
    }
  };

  return (
    <>
      <div className="smal-nav">
        <div id="doneNav" className="done-nav">

          <input class="menu-checkbox" id="menu" type="checkbox" name="menu" />

          <nav class="menu">

            <label class="menu-dots" for="menu">
              <span class="menu-dot"></span>
              <span class="menu-dot"></span>
              <span class="menu-dot"></span>
            </label>

            <ul class="menu-items">

              <li class="menu-item">
                <a href="/"> <BiHomeAlt /> </a>
                {/*  <BiHomeAlt /> */}
              </li>

              <li class="menu-item">
                <a href="/vehicles"> <RiEBikeFill /> </a>
                {/*  <RiEBikeFill /> */}
              </li>

              <li class="menu-item">
                <a href="/contact" > <RiContactsLine /> </a>
                {/* <RiContactsLine /> */}
              </li>

              <li class="menu-item">
                <a href="/aboutus"> <BsFillChatLeftTextFill /> </a>
                {/* <BsFillChatLeftTextFill /> */}
              </li>

              <li class="menu-item">
                <a href="/pricing" > <IoIosPricetags /> </a>
                {/*  <IoIosPricetags /> */}
              </li>

              <li class="menu-item no-f">
                <IoIosPricetags />
              </li>

            </ul>
            <label for="menu" class="menu-closer-overlay"></label>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Snav;