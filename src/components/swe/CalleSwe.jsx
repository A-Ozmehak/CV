import calleContent from "../../data/calleContent.json"
import calle1 from "../../assets/calle1.jpg";

export const CalleSwe = () => {
    return (
        <div>
            <div className="pt-2 mb-3">
                <img className="rounded-xl ml-8" src={calle1} alt="calle"/>
                <p className="ml-8">{calleContent.contact}</p>
            </div>
            <div className="flex mb-5">
                <div className="rounded-lg ml-8 mr-5 p-8 bg-slate-200 dark:bg-neutral-800 w-1/2">
                    <h3 className="font-bold mb-1">Om Mig</h3>
                    <p>{calleContent.sweAbout}</p>
                </div>
                <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800 h-1/4">
                    <h3 className="font-bold mb-1">Portfolio</h3>
                    <a href="https://github.com/Ozmehak">{calleContent.portfolio}</a>
                </div>
            </div>
            <div className="flex mb-5">
                <div className="rounded-lg ml-8 mr-5 p-8 bg-slate-200 dark:bg-neutral-800">
                    <h3 className="font-bold mb-1">Utbildning</h3>
                    <p>{calleContent.sweEducation1}</p>
                    <p>{calleContent.sweEducation2}</p>
                </div>
                <div className="rounded-lg p-8 bg-slate-200 dark:bg-neutral-800">
                    <h3 className="font-bold mb-1">Erfarenheter</h3>
                    <p>{calleContent.sweJobExperience1}</p>
                    <p>{calleContent.sweJobExperience2}</p>
                    <p>{calleContent.sweJobExperience3}</p>
                </div>
            </div>
            <div className="flex">
                <div className="rounded-lg p-8 bg-slate-200 dark:bg-neutral-800 ml-8 mb-5">
                    <h3 className="font-bold mb-1">Språk</h3>
                    <p>{calleContent.sweLanguage1}</p>
                    <p>{calleContent.sweLanguage2}</p>
                </div>
            </div>

        </div>
    )
}