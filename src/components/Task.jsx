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

    const tasksList = [
        {
            taskName: "TP 1.1 - Corrección",
            description:
                "Pasar las notas procesadas de ambas comisiones al trabajo práctico 1.1",
            dueDate: "06-07-2024",
            isCompleted: false,
        },
        {
            taskName: "Responder mails",
            description: "Responder mails del correo de programacion3",
            dueDate: "06-10-2024",
            isCompleted: false,
        },
    ];

    return (
        <div className={styles}>
            {/*El componente tiene un título y una lista estática de Task components*/}
            <h1 className="title">{listName}</h1>
            {tasksList.map((task) => (
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
