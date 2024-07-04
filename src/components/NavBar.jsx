import appLogo from "../assets/react.svg";
import NavMenu from "./NavMenu";
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";

function NavBar({ appName }) {
    const { theme } = useContext(ThemeContext);

    const backgroundClassName = "has-background-" + theme;

    let textClassName = "has-text-";

    if (theme === "dark") {
        textClassName += "light";
    } else {
        textClassName += "dark";
    }

    const className = backgroundClassName + " " + textClassName;
    const newTheme = "dark";

    return (
        <header>
            <nav
                className={"navbar " + className}
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <div className="columns is-vcentered">
                        <a className="navbar-item column" href="/">
                            <img
                                src={appLogo}
                                alt="App Logo"
                                className="image is-64x64"
                            />
                        </a>
                        <p className="column">{appName}</p>
                    </div>
                </div>
                <ThemeContext.Provider value={{ newTheme }}>
                    <NavMenu />
                </ThemeContext.Provider>
            </nav>
        </header>
    );
}

export default NavBar;
