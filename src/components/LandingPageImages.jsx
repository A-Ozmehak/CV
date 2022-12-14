import calle from "../assets/calle.jpg"
import {useState} from "react";
import {Link} from "react-router-dom";
import anna from "../assets/anna400.jpg"

export const LandingPageImages = () => {
    const [isShown, setIsShown] = useState(false)
    const [showSecond, setShowSecond] = useState(false)

    return (
        <div className="flex justify-center">
            <div className="mt-32 bg-slate-200 dark:bg-neutral-800">
                <Link to="/calleOzmehak">
                    <button
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        <img className="rounded-xl" src={calle} alt="calle"/>
                    </button>
                </Link>

            </div>
            <div
                className="h-20 w-1/4 mt-32 bg-slate-200 dark:bg-neutral-800 self-center flex place-items-center justify-center">
                {showSecond && (
                    <h2 className="text-3xl">Anna</h2>
                )}
                {isShown && (
                    <h2 className="text-3xl">Calle</h2>
                )}

            </div>
            <div className="mt-32 bg-slate-200 dark:bg-neutral-800">
                <Link to="/annaOzmehak">
                    <button
                        onMouseEnter={() => setShowSecond(true)}
                        onMouseLeave={() => setShowSecond(false)}
                    >
                        <img className="rounded-xl" src={anna} alt="anna"/>

                    </button>
                </Link>

            </div>
        </div>
    )
}