import useGetInfo from "./components/helpers/useGetInfo";
import CardsWrapper from "./components/layouts/CardsWrapper";
function App() {
  const { data, error, loading } = useGetInfo(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  if (error && loading) {
    console.log(error, loading);
    //just use for remove warning
  }
  return <CardsWrapper data={data} />;
}

export default App;
