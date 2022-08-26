import "../css/header.css"
import uk from "../assets/uk.png"
import swe from "../assets/swe.png"
import skane from "../assets/skane.png"
import {useState} from "react";
import {AnnaInfoSwe} from "./swe/annaInfoSwe";
import {AnnaInfoEng} from "./eng/annaInfoEng";
import {AnnaInfoSka} from "./ska/annaInfoSka";


export const FlagIcons = () => {
    const [showSwe, setShowSwe] = useState(true)
    const [showEng, setShowEng] = useState(false)
    const [showSka, setShowSka] = useState(false)
    return (
        <header className="landingPageHeader">
            <button
                onClick={() => setShowEng(true)}
            >
                <img className="flagImage" src={uk} alt="ukFlag"/>
            </button>
            <button
                onClick={() => setShowSwe(true)}

            >
                <img className="flagImage" src={swe} alt="sweFlag"/>
            </button>
            <button
                onClick={() => setShowSka(true)}

            >
                <img className="flagImage" src={skane} alt="skaneFlag"/>
            </button>
            <div>
                {showSwe && (
                    <AnnaInfoSwe />
                )}
                {showEng && (
                    <AnnaInfoEng />
                )}
                {showSka && (
                    <AnnaInfoSka />
                )}
            </div>

        </header>
    )
}