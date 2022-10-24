import ToDoItem from "./ToDoItem";

export default function ToDoListContainer(props){
    const {toDoList} = props;
    console.log("container props", props);
    return(
        <div className={'list-container'}>
            <h1>Todo List</h1>
            {toDoList.map((todo)=>{
                console.log("todo", todo);
                return <ToDoItem todo={todo}/>
            })}
        </div>
    )
}