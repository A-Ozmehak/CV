import annaContent from "../../data/annaContent.json"

export const AnnaEng = () => {
    return (
        <div>
            <div className="pt-2 mb-3">
                <p className="ml-8">{annaContent.contact}</p>
            </div>
            <div className="flex mb-5">
                <div className="rounded-lg ml-8 mr-5 p-8 bg-slate-200 dark:bg-neutral-800 w-1/2">
                    <h3 className="font-bold mb-1">About me</h3>
                    <p>{annaContent.engAbout}</p>
                </div>
                <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800 h-1/4">
                    <h3 className="font-bold mb-1">Portfolio</h3>
                    <p>{annaContent.portfolio}</p>
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