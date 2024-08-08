import { useState } from "react";

const GetToDo = ({ updateList }) => {
  const [toDo, setToDo] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    toDo !== "" && updateList(toDo);
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
          value={toDo}
          onChange={(e) => getItemHandler(e)}
        ></input>
        <button> Add To List</button>
      </form>
    </div>
  );
};
export default GetToDo;
