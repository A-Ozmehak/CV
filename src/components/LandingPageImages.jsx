import dog2 from "../assets/dog2.jpg"
import calle from "../assets/calle.jpg"
import {useState} from "react";
import {Link} from "react-router-dom";

export const LandingPageImages = () => {
    const [isShown, setIsShown] = useState(false)
    const [showSecond, setShowSecond] = useState(false)

    return (
        <div className="flex justify-center">
            <div className="mt-12 bg-slate-200 dark:bg-neutral-800">
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
            <div
                className="h-20 w-1/4 mt-12 bg-slate-200 dark:bg-neutral-800 self-center flex place-items-center justify-center">
                {showSecond && (
                    <h2>Anna</h2>
                )}
                {isShown && (
                    <h2>Calle</h2>
                )}

            </div>
            <div className="mt-12 bg-slate-200 dark:bg-neutral-800">
                <Link to="/annaOzmehak">
                    <button
                        onMouseEnter={() => setShowSecond(true)}
                        onMouseLeave={() => setShowSecond(false)}
                    >
                        <img className="rounded-xl" src={calle} alt="dog2"/>

                    </button>
                </Link>
                {showSecond && (
                    <h1>Anna</h1>
                )}
            </div>
        </div>
    )
}