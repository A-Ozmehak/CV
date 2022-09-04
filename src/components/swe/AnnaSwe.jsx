import annaContent from "../../data/annaContent.json"
import "../../css/contentPage.css"

export const AnnaSwe = () => {
    return (
        <div className="grid grid-cols-2 gap-2.5">
            <div className="col-span-2 pt-2">
                <p className="ml-8">{annaContent.contact}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Om Mig</h3>
                <p>{annaContent.sweAbout}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Portfolio</h3>
                    <p>{annaContent.portfolio}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Utbildning</h3>
                <p>{annaContent.sweEducation1}</p>
                <p>{annaContent.sweEducation2}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Erfarenheter</h3>
                <p>{annaContent.sweJobExperience1}</p>
                <p>{annaContent.sweJobExperience2}</p>
                <p>{annaContent.sweJobExperience3}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Språk</h3>
                <p>{annaContent.sweLanguage1}</p>
                <p>{annaContent.sweLanguage2}</p>
            </div>
        </div>
    )
}