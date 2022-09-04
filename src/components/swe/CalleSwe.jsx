import calleContent from "../../data/calleContent.json"
import calle1 from "../../assets/calle1.jpg";

export const CalleSwe = () => {
    return (
        <div className="grid grid-cols-2 gap-2.5">
            <div className="col-span-2 pt-2">
                <img className="rounded-xl" src={calle1} alt="calle"/>
                <p>{calleContent.contact}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Om Mig</h3>
                <p>{calleContent.sweAbout}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Portfolio</h3>
                <p>{calleContent.portfolio}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Utbildning</h3>
                <p>{calleContent.sweEducation1}</p>
                <p>{calleContent.sweEducation2}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Erfarenheter</h3>
                <p>{calleContent.sweJobExperience1}</p>
                <p>{calleContent.sweJobExperience2}</p>
                <p>{calleContent.sweJobExperience3}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Språk</h3>
                <p>{calleContent.sweLanguage1}</p>
                <p>{calleContent.sweLanguage2}</p>
            </div>
        </div>
    )
}