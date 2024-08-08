import GetToDo from "./Components/GetToDo.js";
import "./App.css";
import { useState } from "react";
import ToDoList from "./Components/ToDoLists.js";

function App() {
  const [toDoLists, setToDoList] = useState([]);

  const updateList = (newToDo) => {
    const newToDoList = [...toDoLists];
    newToDoList.push({ id: toDoLists.length, title: newToDo, status: false });
    setToDoList(newToDoList);
  };

  return (
    <div className="App">
      <GetToDo updateList={updateList} />
      <ToDoList toDoLists={toDoLists} />
    </div>
  );
}

export default App;
