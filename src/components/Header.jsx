import "../css/header.css"
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
    return (
        <header className="landingPageHeader">
            <ThemeSwitcher />
            <h1>Välkommen till Özmehak's CV</h1>
        </header>
    )
}

