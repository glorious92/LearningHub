import { useState, useEffect } from "react";
import Sppiner from "../layouts/Sppiner";
import Posts from "./Posts";
const Blog = () => {
  const [data, setData] = useState(null);
  const link = `https://jsonplaceholder.typicode.com/posts`;
  useEffect(() => {
    const getData = async (link) => {
      try {
        const response = await fetch(link);
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData(link);
  }, [link]);

  return !data ? <Sppiner /> : <Posts data={data} />;
};
export default Blog;
