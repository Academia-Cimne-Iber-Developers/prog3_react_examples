import { useState } from "react";
import tasksData from "../assets/tasks.json";

function Task({
    taskName,
    description,
    dueDate,
    isCompletedValue,
    titleStyle = { color: "red", fontSize: "1.5rem" },
}) {
    // Manejando estados con variables independientes

    //const [isCompleted, setIsCompleted] = useState(isCompletedValue);
    //const [message, setMessage] = useState(null);

    // Manejando estos con un objeto
    const [taskData, setTask] = useState({
        isCompleted: isCompletedValue,
        message: null,
    });

    function handleClick() {
        if (taskData.isCompleted) {
            setTask({ message: null, isCompleted: false });
        } else {
            setTask({ message: "Completado", isCompleted: true });
        }
    }

    return (
        <div className="box">
            <div className="columns is-vcentered">
                <div className="column is-narrow">
                    <input
                        type="checkbox"
                        className="checkbox"
                        defaultChecked={taskData.isCompleted}
                        onClick={handleClick}
                    />
                </div>
                <div className="column">
                    {/*Aplicación de estilo en línea mediante objetos*/}
                    {taskData.isCompleted ? (
                        <del>
                            <p style={titleStyle}>
                                <strong>{taskName} </strong>
                                <small>{dueDate}</small>
                            </p>
                        </del>
                    ) : (
                        <p style={titleStyle}>
                            <strong>{taskName} </strong>
                            <small>{dueDate}</small>
                        </p>
                    )}
                    {taskData.message ? taskData.message : null}
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
}

function TaskList({ listName = "Lista de tareas" }) {
    const styles = "section container";

    // No podemos usar fetch para resolver el problema sin emplear un hook
    // para gestionar el estado de este componente

    // const tasks = fetch("tasks.json")
    //     .then((response) => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //         return data;
    //     });

    // console.log(tasks);

    const tasks = tasksData;

    return (
        <div className={styles}>
            {/*El componente tiene un título y una lista estática de Task components*/}
            <h1 className="title">{listName}</h1>
            {tasks.map((task) => (
                <Task
                    taskName={task.taskName}
                    description={task.description}
                    dueDate={task.dueDate}
                    isCompletedValue={task.isCompleted}
                    key={task.taskName}
                />
            ))}
        </div>
    );
}

export { TaskList };
export { Task };
