const ToDoList = ({ toDoLists, deleter, toggler }) => {
  return (
    <>
      {toDoLists.length > 0 && (
        <div className="to-do-lists">
          <ul>
            {toDoLists.map((item) => (
              <li
                key={item.id}
                className="lists-row"
                style={{
                  backgroundColor: item.status ? "yellowgreen" : "lightblue",
                }}
              >
                <h2>{item.title} </h2>
                <button onClick={() => toggler(item.id)}> Toggle</button>
                <button onClick={() => deleter(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default ToDoList;
