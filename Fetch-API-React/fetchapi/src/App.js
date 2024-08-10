import useGetInfo from "./components/helpers/useGetInfo";

function App() {
  const { data, error, loading } = useGetInfo(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  console.log(data, error, loading);
  return (
    <div>
      {data && (
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
      )}
    </div>
  );
}

export default App;
