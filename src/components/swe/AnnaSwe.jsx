import annaContent from "../../data/annaContent.json"

export const AnnaSwe = () => {
    return (
        <div>
            <p>{annaContent.contact}</p>
            <div>
                <h3>Om Mig</h3>
                <p>{annaContent.sweAbout}</p>
            </div>
            <div>
                <h3>Portfolio</h3>
                    <p>{annaContent.portfolio}</p>
            </div>
            <div>
                <h3>Utbildning</h3>
                <p>{annaContent.sweEducation1}</p>
                <p>{annaContent.sweEducation2}</p>
            </div>
            <div>
                <h3>Erfarenheter</h3>
                <p>{annaContent.sweJobExperience1}</p>
                <p>{annaContent.sweJobExperience2}</p>
                <p>{annaContent.sweJobExperience3}</p>
            </div>
            <div>
                <h3>Språk</h3>
                <p>{annaContent.sweLanguage1}</p>
                <p>{annaContent.sweLanguage2}</p>
            </div>
        </div>
    )
}