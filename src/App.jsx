import React from "react";
import appLogo from "./assets/react.svg";

<<<<<<< HEAD
function Task() {title, descripcion, dueDate, isC 
    // Ejemplo de estilo en línea
    const taskHeaderStyles = { color: "red", fontSize: "1.5rem" };

    return (
        <div className="box">
            <div className="columns is-vcentered">
                <div className="column is-narrow">
                    <input type="checkbox" className="checkbox" />
                </div>
                <div className="column">
                    {/*Aplicación de estilo en línea mediante objetos*/}
                    <p style={taskHeaderStyles}>
                        <strong>Título de la tarea </strong>
                        <small>3 de Junio de 2021</small>
                    </p>
                </div>
            </div>
            <p>
                Descripción de la tarea: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla nec purus feugiat, molestie ipsum et,
                consequat nibh. Etiam non nisi sit amet purus ultricies semper
                at a nunc. Fusce auctor, justo et facilisis ultrices, felis
                turpis posuere justo, nec iaculis risus dolor in ex.
            </p>
        </div>
    );
}

function TaskList() {
    const styles = "section container";
    /*Comentario*/
    //Comentario
    return (
        <div className={styles}>
            {/*El componente tiene un título y una lista estática de Task components*/}
            <h1 className="title">Lista de tareas</h1>
            <Task />
            <Task />
            <Task />
        </div>
    );
}
=======
import { TaskList } from "./components/Task";
import { ShoppingList } from "./components/ShoppingList";
import { AlertButton } from "./components/AlertButton";
import WarningButton from "./components/WarningButton";
import ErrorButton from "./components/ErrorButton";
import Counter from "./components/Counter";
>>>>>>> 7630faddf5dcbbc2614260307fdd9da7890746d5

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
                <TaskList />
            </div>
            <FooterBar />
        </div>
    );
}

export default App;
