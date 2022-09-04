import annaContent from "../../data/annaContent.json"
import anna from "../../assets/anna200.jpg";

export const AnnaEng = () => {
    return (
        <div>
            <div className="pt-2 mb-3">
                <img className="rounded-xl ml-8" src={anna} alt="anna"/>
                <p className="ml-8">{annaContent.contactNr}</p>
                <p className="ml-8">{annaContent.contactMail}</p>
            </div>
            <div className="flex mb-5">
                <div className="rounded-lg ml-8 mr-5 p-8 bg-slate-200 dark:bg-neutral-800 w-1/2">
                    <h3 className="font-bold mb-1">About me</h3>
                    <p>{annaContent.engAbout}</p>
                </div>
                <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800 h-1/4">
                    <h3 className="font-bold mb-1">Portfolio</h3>
                    <a href="https://github.com/A-Ozmehak">{annaContent.portfolio}</a>
                </div>
            </div>
            <div className="flex mb-5">
                <div className="rounded-lg ml-8 mr-5 p-8 bg-slate-200 dark:bg-neutral-800">
                    <h3 className="font-bold mb-1">Education</h3>
                    <p>{annaContent.engEducation1}</p>
                    <p>{annaContent.engEducation2}</p>
                </div>
                <div className="rounded-lg p-8 bg-slate-200 dark:bg-neutral-800">
                    <h3 className="font-bold mb-1">Experiences</h3>
                    <p>{annaContent.engJobExperience1}</p>
                    <p>{annaContent.engJobExperience2}</p>
                    <p>{annaContent.engJobExperience3}</p>
                </div>
            </div>
            <div className="flex">
                <div className="rounded-lg p-8 bg-slate-200 dark:bg-neutral-800 ml-8 mb-5">
                    <h3 className="font-bold mb-1">Language</h3>
                    <p>{annaContent.engLanguage1}</p>
                    <p>{annaContent.engLanguage2}</p>
                </div>
            </div>

        </div>

    )
}