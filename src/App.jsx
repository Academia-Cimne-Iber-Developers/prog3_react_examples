import React from "react";
import appLogo from "./assets/react.svg";

import { TaskList } from "./components/Task";
import { ShoppingList } from "./components/ShoppingList";
import { AlertButton } from "./components/AlertButton";
import WarningButton from "./components/WarningButton";

function FooterBar() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <div className="content has-text-centered">
                    <a className="icon" href="https://facebook.com">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="icon" href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="icon" href="https://instagram.com">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <p>&copy; 2024 TODO App. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

function NavMenu() {
    return (
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="#home">
                    Home
                </a>
                <a className="navbar-item" href="#about">
                    About
                </a>
                <a className="navbar-item" href="#contact">
                    Contact
                </a>
            </div>
        </div>
    );
}

function NavBar() {
    return (
        <header>
            <nav
                className="navbar"
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
                        <p className="column">TODO App</p>
                    </div>
                </div>
                <NavMenu />
            </nav>
        </header>
    );
}

function App() {
    return (
        <div className="hero is-fullheight is-flex is-flex-direction-column">
            <NavBar />
            <div className="container">
                <WarningButton message="Saludos comisión CN" />
            </div>
            <FooterBar />
        </div>
    );
}

export default App;
