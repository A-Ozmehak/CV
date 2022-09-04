import uk from "../assets/eng-flag.png"
import swe from "../assets/swe-flag.png"
import {useState} from "react";
import {AnnaSwe} from "../components/swe/AnnaSwe";
import {AnnaEng} from "../components/eng/AnnaEng";
import {Link} from "react-router-dom"


export const MrsOzmehak = () => {
    const [showSwe, setShowSwe] = useState(true)
    const [showEng, setShowEng] = useState(false)

    return (
        <div className="h-screen max-w-screen-xl">
            <div className="text-center">
                    <h1 className={"text-3xl font-bold pt-2 pb-2"}>Anna's CV</h1>
                <button
                    className={"pb-4"}
                    onClick={() => {
                        setShowSwe(true)
                        setShowEng(false)
                    }}
                >
                    <img className="flagImage w-12" src={swe} alt="sweFlag"/>
                </button>
                <button
                    onClick={() => {
                        setShowEng(true)
                        setShowSwe(false)
                    }}
                >
                    <img className="flagImage w-12" src={uk} alt="ukFlag"/>
                </button>
            </div>

            <div>
                {showSwe && (
                    <AnnaSwe/>
                )}
                {showEng && (
                    <AnnaEng/>
                )}

            </div>
        </div>
    )
}
