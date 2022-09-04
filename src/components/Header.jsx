import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
    return (
        <header className="pb-3 text-2xl text-center dark:bg-neutral-800 bg-slate-200">
            <ThemeSwitcher />
            <h1>Välkommen till Özmehak's CV</h1>
        </header>
    )
}

