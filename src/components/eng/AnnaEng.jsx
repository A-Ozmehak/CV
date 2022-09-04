import annaContent from "../../data/annaContent.json"
import "../../css/contentPage.css"

export const AnnaEng = () => {
    return (
        <div className="grid grid-cols-2 gap-2.5">
            <div className="col-span-2 pt-2">
                <p className="ml-8">{annaContent.contact}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>About me</h3>
                <p>{annaContent.engAbout}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Portfolio</h3>
                <p>{annaContent.portfolio}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Education</h3>
                <p>{annaContent.engEducation1}</p>
                <p>{annaContent.engEducation2}</p>
            </div>
            <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Experiences</h3>
                <p>{annaContent.engJobExperience1}</p>
                <p>{annaContent.engJobExperience2}</p>
                <p>{annaContent.engJobExperience3}</p>
            </div>
            <div className="rounded-lg ml-8 p-8 bg-slate-200 dark:bg-neutral-800">
                <h3>Language</h3>
                <p>{annaContent.engLanguage1}</p>
                <p>{annaContent.engLanguage2}</p>
            </div>
        </div>

    )
}