const ToDoList = ({ toDoLists }) => {
  return (
    <>
      {toDoLists.length > 0 && (
        <div className="to-do-lists">
          <ul>
            {toDoLists.map((item) => (
              <li key={item.id * 1}> {item.title} </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default ToDoList;
