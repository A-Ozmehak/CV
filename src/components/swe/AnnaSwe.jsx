import annaContent from "../../data/annaContent.json"

export const AnnaSwe = () => {
    return (
        <div>
            <div className="pt-2 mb-3">
                <p className="ml-8">{annaContent.contact}</p>
            </div>
            <div className="flex mb-5">
                <div className="rounded-lg ml-8 mr-5 p-8 bg-slate-200 dark:bg-neutral-800 w-1/2">
                    <h3 className="font-bold mb-1">Om Mig</h3>
                    <p>{annaContent.sweAbout}</p>
                </div>
                <div className="rounded-lg mr-8 p-8 bg-slate-200 dark:bg-neutral-800 h-1/4">
                    <h3 className="font-bold mb-1">Portfolio</h3>
                    <p>{annaContent.portfolio}</p>
                </div>
            </div>
            <div className="flex mb-5">
                <div className="rounded-lg ml-8 mr-5 p-8 bg-slate-200 dark:bg-neutral-800">
                    <h3 className="font-bold mb-1">Utbildning</h3>
                    <p>{annaContent.sweEducation1}</p>
                    <p>{annaContent.sweEducation2}</p>
                </div>
                <div className="rounded-lg p-8 bg-slate-200 dark:bg-neutral-800">
                    <h3 className="font-bold mb-1">Erfarenheter</h3>
                    <p>{annaContent.sweJobExperience1}</p>
                    <p>{annaContent.sweJobExperience2}</p>
                    <p>{annaContent.sweJobExperience3}</p>
                </div>
            </div>
            <div className="flex">
                <div className="rounded-lg p-8 bg-slate-200 dark:bg-neutral-800 ml-8 mb-5">
                    <h3 className="font-bold mb-1">Språk</h3>
                    <p>{annaContent.sweLanguage1}</p>
                    <p>{annaContent.sweLanguage2}</p>
                </div>
            </div>

        </div>

    )
}