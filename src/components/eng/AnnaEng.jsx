import annaContent from "../../data/annaContent.json"

export const AnnaEng = () => {
    return (
        <div>
            <p>{annaContent.contact}</p>
            <div>
                <h3>About me</h3>
                <p>{annaContent.engAbout}</p>
            </div>
            <div>
                <h3>Portfolio</h3>
                <p>{annaContent.portfolio}</p>
            </div>
            <div>
                <h3>Education</h3>
                <p>{annaContent.engEducation1}</p>
                <p>{annaContent.engEducation2}</p>
            </div>
            <div>
                <h3>Experiences</h3>
                <p>{annaContent.engJobExperience1}</p>
                <p>{annaContent.engJobExperience2}</p>
                <p>{annaContent.engJobExperience3}</p>
            </div>
            <div>
                <h3>Language</h3>
                <p>{annaContent.engLanguage1}</p>
                <p>{annaContent.engLanguage2}</p>
            </div>
        </div>

    )
}