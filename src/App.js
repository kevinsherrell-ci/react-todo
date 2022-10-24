import { useState } from "react";
import "./App.css";
import ToDoListContainer from "./ToDoListContainer";
import ToDoForm from "./ToDoForm";

const App = () => {
    const [toDoList, setToDoList] = useState([{
        title: "Implement ToDo List",
        priority: "High",
        isComplete: false,
        description: "Implement the todo list application",
        creationDate: new Date().toString(),
        completedDate: null
    }]);
    const handleToDo = (todo)=>{
        setToDoList([...toDoList, todo]);
    }
  return (
      <div className="App-header">
          <ToDoForm handleToDo={handleToDo}/>
          <ToDoListContainer toDoList={toDoList}/>
      </div>
  );
}

export default App;

