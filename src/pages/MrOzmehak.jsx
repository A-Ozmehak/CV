import uk from "../assets/eng-flag.png"
import swe from "../assets/swe-flag.png"
import {useState} from "react";
import {CalleSwe} from "../components/swe/CalleSwe";
import {CalleEng} from "../components/eng/CalleEng";
import {Link} from "react-router-dom"
import useLS from "../hooks/UseLS";


export const MrOzmehak = () => {
    const [showSwe, setShowSwe] = useState(true)
    const [showEng, setShowEng] = useState(false)
    const [showSka, setShowSka] = useState(false)

    const [saveLanguage, setSaveLanguage] = useLS()

    const handleSwedish = () => {
        setShowSwe(true)
        setShowEng(false)
        setSaveLanguage(true)
    }

    const handleEnglish = () => {
        setShowEng(true)
        setShowSwe(false)
        setSaveLanguage(true)
    }

    return (
        <div className="h-screen max-w-screen-xl">
            <div className="text-center">
                    <h1 className={"text-3xl font-bold pt-2 pb-2"}>Calle's CV</h1>
                <button
                    className={"pb-4"}
                    onClick={handleSwedish}
                >
                    <img className="flagImage w-12" src={swe} alt="sweFlag"/>
                </button>
                <button
                    onClick={handleEnglish}
                >
                    <img className="flagImage w-12" src={uk} alt="ukFlag"/>
                </button>
            </div>

            <div>
                {showSwe && (
                    <CalleSwe/>
                )}
                {showEng && (
                    <CalleEng/>
                )}
            </div>

        </div>
    )
}
