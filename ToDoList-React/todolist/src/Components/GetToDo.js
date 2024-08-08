import { useState } from "react";

const GetToDo = ({ updateList }) => {
  const [todo, setToDo] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    updateList(todo);
    // console.log("done");
    setToDo("");
  };

  const getItemHandler = (e) => {
    setToDo(e.target.value);
  };

  return (
    <div className="get-to-do">
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Item"
          value={todo}
          onChange={(e) => getItemHandler(e)}
        ></input>
        <button> Add To List</button>
      </form>
    </div>
  );
};
export default GetToDo;
