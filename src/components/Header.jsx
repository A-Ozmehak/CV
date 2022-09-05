import { ThemeSwitcher } from "./ThemeSwitcher";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="pb-3 text-center dark:bg-neutral-800 bg-slate-200">
            <ThemeSwitcher />
            <Link to="/">
                <h1 className="text-4xl mb-10">Välkommen till Özmehak's CV</h1>
            </Link>
        </header>
    )
}

