import React, {useState} from 'react'
import useDarkSide from "../hooks/UseDarkSide"
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export const ThemeSwitcher = () => {
    const [colorTheme, setTheme] = useDarkSide()
    const [darkSide, setDarkSide] = useState( colorTheme === "light" ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    return(
        <>
        <div>
            <DarkModeSwitch
                className={"ml-2 pt-2"}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={56}
                />
        </div>
        </>
    )
}