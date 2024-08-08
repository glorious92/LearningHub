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

  const toggler = (itemId) => {
    const newToDoList = [...toDoLists];
    newToDoList.map((item) => {
      if (item.id === itemId) {
        item.status = !item.status;
      }
    });
    setToDoList(newToDoList);
  };
  const deleter = (itemId) => {
    const newToDoList = toDoLists.filter((item) => item.id !== itemId);
    setToDoList(newToDoList);
  };

  return (
    <div className="App">
      <GetToDo updateList={updateList} />
      <ToDoList toDoLists={toDoLists} toggler={toggler} deleter={deleter} />
    </div>
  );
}

export default App;
