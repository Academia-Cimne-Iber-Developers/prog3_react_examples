import React from "react";
import appLogo from "./assets/react.svg";

function Task({
    taskName,
    description,
    dueDate,
    isCompleted,
    titleStyle = { color: "red", fontSize: "1.5rem" },
}) {
    return (
        <div className="box">
            <div className="columns is-vcentered">
                <div className="column is-narrow">
                    <input
                        type="checkbox"
                        className="checkbox"
                        defaultChecked={isCompleted}
                    />
                </div>
                <div className="column">
                    {/*Aplicación de estilo en línea mediante objetos*/}
                    <p style={titleStyle}>
                        <strong>{taskName} </strong>
                        <small>{dueDate}</small>
                    </p>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
}

function TaskList() {
    const styles = "section container";

    const tasks = [
        {
            taskName: "TP 1.1 - Corrección",
            description:
                "Pasar las notas procesadas de ambas comisiones al trabajo práctico 1.1",
            dueDate: new Date("06-07-2024").toDateString(),
            isCompleted: false,
        },
        {
            taskName: "Responder mails",
            description: "Responder mails del correo de programacion3",
            dueDate: new Date("06-10-2024").toDateString(),
            isCompleted: false,
        },
    ];

    return (
        <div className={styles}>
            {/*El componente tiene un título y una lista estática de Task components*/}
            <h1 className="title">Lista de tareas</h1>
            {tasks.map((task) => (
                <Task
                    taskName={task.taskName}
                    description={task.description}
                    dueDate={task.dueDate}
                    isCompleted={task.isCompleted}
                    key={task.taskName}
                />
            ))}
        </div>
    );
}

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
                <TaskList />
            </div>
            <FooterBar />
        </div>
    );
}

export default App;
