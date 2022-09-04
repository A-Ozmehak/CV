import {useEffect, useState} from "react";

export default function useLS() {
    const [language, setLanguage] = useState(localStorage.language)
    const savedLanguage = language === 'swe' ? 'eng' : 'swe'

    useEffect(() => {
        // const root = window.document.documentElement
        // root.classList.remove(colorTheme)
        // root.classList.add(theme)

        localStorage.setItem('swe', language)
    }, [language, savedLanguage])

    return [savedLanguage, setLanguage]
}