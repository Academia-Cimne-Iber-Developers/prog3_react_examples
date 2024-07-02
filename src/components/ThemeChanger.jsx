import useTheme from "../hooks/useTheme";

function ThemeChanger() {
    const [theme, toggleTheme] = useTheme();

    return (
        <div
            className={`section ${
                theme === "light"
                    ? "has-background-light has-text-black"
                    : "has-background-black has-text-light"
            }`}
        >
            <h2 className="">Tema Actual: {theme}</h2>
            <button
                className={`button  ${
                    theme === "light" ? "is-dark" : "is-light"
                }`}
                onClick={toggleTheme}
            >
                Cambiar Tema
            </button>
        </div>
    );
}

export default ThemeChanger;
