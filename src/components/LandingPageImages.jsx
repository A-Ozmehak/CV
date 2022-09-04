import dog4 from "../assets/dog4.jpg"
import dog2 from "../assets/dog2.jpg"
import calle from "../assets/calle.jpg"
import "../css/landingpage.css"
import {useState} from "react";
import { Link } from "react-router-dom";

export const LandingPageImages = () => {
    const [isShown, setIsShown] = useState(false)
    const [showSecond, setShowSecond] = useState(false)

    return (
        <div>
            <div>
                <Link to="/calleOzmehak">
                <button
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <img className="rounded-xl" src={calle} alt="calle"/>
                </button>
                </Link>
                {isShown && (
                    <h1>Calle</h1>
                )}
            </div>
            <div>
                <Link to="/annaOzmehak">
                <button
                    onMouseEnter={() => setShowSecond(true)}
                    onMouseLeave={() => setShowSecond(false)}
                >
                    <img className="dogImage" src={dog2} alt="dog2"/>
                </button>
                </Link>
                {showSecond && (
                    <h1>Anna</h1>
                )}
            </div>
        </div>
    )
}