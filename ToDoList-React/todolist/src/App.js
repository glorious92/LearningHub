import GetToDo from "./Components/GetToDo.js";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [toDoLists, setToDoList] = useState([]);

  const updateList = (newToDo) => {
    const newToDoList = [...toDoLists];
    newToDoList.push({ id: toDoLists.length, title: newToDo, status: false });
    setToDoList(newToDoList);
  };

  useEffect(() => {
    toDoLists.length > 0 && console.log(toDoLists);
  }, [toDoLists]);

  return (
    <div className="App">
      <GetToDo updateList={updateList} />

      {toDoLists.length > 0 && (
        <div className="to-do-lists">
          <ul>
            {toDoLists.map((item) => (
              <li key={item.id * 1}> {item.title} </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
