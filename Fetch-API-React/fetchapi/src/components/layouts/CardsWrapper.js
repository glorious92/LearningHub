import { useState } from "react";
import useGetInfo from "../helpers/useGetInfo";

import Cards from "./Cards";
const CardWrapper = () => {
  const [datas, setDatas] = useState(null);
  const { data, error, loading } = useGetInfo(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  if (error && loading) {
    console.log(error, loading);
    //just use for remove warning
  }
  const getPosts = () => {
    setDatas(data);
  };
  return (
    <div className="wrapper">
      <h1 className="title"> Fetch From Json PlaceHolder</h1>
      <button className="button-get-data" onClick={() => getPosts()}>
        {" "}
        GET POSTS
      </button>
      <ul className="card-wrapper">
        <Cards data={datas} />
      </ul>
    </div>
  );
};

export default CardWrapper;
