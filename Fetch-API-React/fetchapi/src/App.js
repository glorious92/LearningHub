import useGetInfo from "./components/helpers/useGetInfo";
import CardsWrapper from "./components/layouts/CardsWrapper";
function App() {
  const { data, error, loading } = useGetInfo(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  console.log(error, loading);
  return <CardsWrapper data={data} />;
}

export default App;
