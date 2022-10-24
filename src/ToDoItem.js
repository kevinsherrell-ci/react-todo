export default function ToDoItem(props) {
    console.log("TodoItemProps", props);
    const {todo} = props;
    const {title, priority,description, creationDate, completedDate} = todo;
    return (
        <div className="todo-item">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{priority}</p>
            <p>{creationDate}</p>
            {completedDate && <p>{completedDate}</p>}
        </div>
    )
}