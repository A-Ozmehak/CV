import {FlagIcons} from "../components/flagIcons";
import {AnnaInfoSwe} from "../components/swe/annaInfoSwe";
import {AnnaInfoEng} from "../components/eng/annaInfoEng";
import {AnnaInfoSka} from "../components/ska/annaInfoSka";
import {useState} from "react";

export const MrOzmehak = () => {
    const [showSwe, setShowSwe] = useState(true)
    const [showEng, setShowEng] = useState(false)
    const [showSka, setShowSka] = useState(false)
    return (
        <div>
            <header>
                <h1>Calle's CV</h1>
                <FlagIcons />
            </header>
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
        </div>
    )
}