import { useState } from "react";
import { IoIosInformationCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";


const Topbar = () => {
    const [showInfo, setShowInfo] = useState(false);
    const showDesc = () => {
        if (showInfo === false) {
            document.getElementsByClassName("descContainer")[0].style.display="block";
            setShowInfo(true);
        } else {
            document.getElementsByClassName("descContainer")[0].style.display="none";
            setShowInfo(false);
        }
    }
    return (
        <div className="topBar">
            <div className="header">
                <h2>SUTD Gym Tracker</h2>
                <button className="infoButton" onClick={() => showDesc()}><h2>{(showInfo === false) ? <IoIosInformationCircleOutline />: <IoIosCloseCircleOutline/>}</h2></button>
            </div>
            <div className="descContainer">
                <p>A tracker that provides analytics on the number of people in the gym in SUTD. Developed by SUTD students with ReactJS (Frontend), Google Firebase (Backend), and ESP32 (Hardware).</p>
                <a href="https://github.com/matteolee72/sutd_gym_tracker" target="_blank" rel="noopener">Github Repo</a>
            </div>
        </div>
    );
}

export default Topbar;