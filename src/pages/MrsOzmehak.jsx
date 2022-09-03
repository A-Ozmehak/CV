import "../css/header.css"
import uk from "../assets/uk.png"
import swe from "../assets/swe.png"
import skane from "../assets/skane.png"
import {useState} from "react";
import {AnnaSwe} from "../components/swe/AnnaSwe";
import {AnnaEng} from "../components/eng/AnnaEng";
import {AnnaSka} from "../components/ska/AnnaSka";
import {Link} from "react-router-dom"


export const MrsOzmehak = () => {
    const [showSwe, setShowSwe] = useState(true)
    const [showEng, setShowEng] = useState(false)
    const [showSka, setShowSka] = useState(false)

    return (
        <div>
            <header className="landingPageHeader">
                <Link to="/">
                    <h1 className={"text-3xl font-bold underline"}>Anna's CV</h1>
                </Link>
                <button
                    onClick={() => {
                        setShowSwe(true)
                        setShowEng(false)
                        setShowSka(false)
                    }}
                >
                    <img className="flagImage" src={swe} alt="sweFlag"/>
                </button>
                <button
                    onClick={() => {
                        setShowEng(true)
                        setShowSwe(false)
                        setShowSka(false)
                    }}
                >
                    <img className="flagImage" src={uk} alt="ukFlag"/>
                </button>
                <button
                    onClick={() => {
                        setShowSka(true)
                        setShowSwe(false)
                        setShowEng(false)
                    }}
                >
                    <img className="flagImage" src={skane} alt="skaneFlag"/>
                </button>
            </header>

            <div>
                {showSwe && (
                    <AnnaSwe/>
                )}
                {showEng && (
                    <AnnaEng/>
                )}
                {showSka && (
                    <AnnaSka/>
                )}

            </div>
        </div>
    )
}
