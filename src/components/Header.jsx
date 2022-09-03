import "../css/header.css"
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
    return (
        <header className="landingPageHeader pb-3 text-2xl">
            <ThemeSwitcher />
            <h1>Välkommen till Özmehak's CV</h1>
        </header>
    )
}

