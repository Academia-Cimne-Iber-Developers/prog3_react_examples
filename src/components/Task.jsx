import tasksData from "../assets/tasks.json";

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
                    isCompleted={task.isCompleted}
                    key={task.taskName}
                />
            ))}
        </div>
    );
}

export { TaskList };
export { Task };
