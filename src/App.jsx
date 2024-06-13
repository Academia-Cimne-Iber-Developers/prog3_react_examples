import React from "react";
import appLogo from "./assets/react.svg";

import { TaskList } from "./components/Task";
import { ShoppingList } from "./components/ShoppingList";
import { AlertButton } from "./components/AlertButton";
import WarningButton from "./components/WarningButton";
import ErrorButton from "./components/ErrorButton";
import Counter from "./components/Counter";
import Post from "./components/Post";

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
    function handleClick() {
        alert("Mensaje del componente App");
    }

    return (
        <div className="hero is-fullheight is-flex is-flex-direction-column">
            <NavBar />
            <div className="container">
                {/* <ShoppingList /> */}
                {/* <div
                    style={{ border: "1px solid white" }}
                    onClick={handleClick}
                >
                    <WarningButton
                        message="Primer botón"
                        buttonText="Butón compuesto 1"
                    />
                    <br />
                    <WarningButton
                        message="Segundo botón"
                        buttonText="Butón compuesto 2"
                    />
                </div>
                <WarningButton
                    message="Tercer botón"
                    buttonText="Butón independiente"
                /> */}
                {/* <ErrorButton
                    message="Componente de error"
                    buttonText="Butón de error"
                /> */}
                {/* <Counter initialValue={0} /> */}
                {/* <TaskList /> */}
                <Post postID={1000} />
                <Post postID={15} />
            </div>
            <FooterBar />
        </div>
    );
}

export default App;
