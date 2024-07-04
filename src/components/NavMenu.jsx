import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";

function NavMenu() {
    const { newTheme } = useContext(ThemeContext);

    const backgroundClassName = "has-background-" + newTheme;

    let textClassName = "has-text-";

    if (newTheme === "dark") {
        textClassName += "light";
    } else {
        textClassName += "dark";
    }

    const className = backgroundClassName + " " + textClassName;

    return (
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className={"navbar-item " + className} href="#home">
                    Home
                </a>
                <a className={"navbar-item " + className} href="#about">
                    About
                </a>
                <a className={"navbar-item " + className} href="#contact">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default NavMenu;
