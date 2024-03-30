import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./darkBottom.css";

function DarkBottom() {

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const darkFun = () =>{
        let myBode = document.body;
        myBode.classList.toggle("mode-dar-k");
        myBode.classList.toggle("mode-dar-p") 
    }
    

    setTimeout(
        function () {
          let Dark = document.getElementById("dark-pa")
          Dark.classList.add("Dark-page1")
        }, 6000);

    return (
        <div
        onClick={darkFun}
         id="dark-pa" className="Dark-page">
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            />
        </div>


    );
}

export default DarkBottom;