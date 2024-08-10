import GetInfo from "./components/helpers/GetInfo";

function App() {
  const { data, error, loading } = GetInfo(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  console.log(data);
  return (
    <div>
      <ul className="card-wrapper">
        {data.map((item) => {
          return (
            <li key={item.id} className="card">
              <span>{item.id}</span>
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
