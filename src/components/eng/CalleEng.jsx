import calleContent from "../../data/calleContent.json"
import "../../css/contentPage.css"
import calle1 from "../../assets/calle1.jpg";

export const CalleEng = () => {
    return (
        <div className="grid grid-cols-2 gap-2.5">
            <div className="col-span-2 pt-2">
                <img className="rounded-xl ml-8" src={calle1} alt="calle"/>
                <p className="ml-8">{calleContent.contact}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>About me</h3>
                <p>{calleContent.engAbout}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Portfolio</h3>
                <p>{calleContent.portfolio}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Education</h3>
                <p>{calleContent.engEducation1}</p>
                <p>{calleContent.engEducation2}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Experiences</h3>
                <p>{calleContent.engJobExperience1}</p>
                <p>{calleContent.engJobExperience2}</p>
                <p>{calleContent.engJobExperience3}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Language</h3>
                <p>{calleContent.engLanguage1}</p>
                <p>{calleContent.engLanguage2}</p>
            </div>
        </div>
    )
}