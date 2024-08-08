import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="get-to-do">
        <form>
          <input type="text" placeholder="Enter Item"></input>
          <button> Add To List</button>
        </form>
      </div>
      {/* <div className="to-do-lists">
        <ul>
          <li> Item 1</li>
          <li> Item 2</li>
          <li> Item 3</li>
        </ul>
      </div> */}
    </div>
  );
}

export default App;
