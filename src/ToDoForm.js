import {useState} from "react";

export default function ToDoForm(props) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");

    const {handleToDo} = props;
    return (
        <div className="todo-form">
            <label>Title:</label>
            <input type="text" onChange={(e) => {
                setTitle(e.target.value);
                console.log(title);
            }}/>
            <br/>
            <label>Priority:</label>
            <select name="priority" onChange={(e) => {
                setPriority(e.target.value);
            }}>
                <option value=""></option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <br/>
            <label>Description:</label>
            <textarea name="description" cols="30" rows="10" onChange={(e) => {
                setDescription(e.target.value);
            }}></textarea>
            <br/>
            <button onClick={() => {
                const todoObject = {
                    title: title,
                    priority: priority,
                    description: description,
                    creationDate: new Date().toString(),
                    completedDate: null
                }
                handleToDo(todoObject);
            }}>Add ToDo
            </button>
        </div>
    )
}