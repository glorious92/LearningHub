import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const link = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    if (id) {
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
    }
  }, [link, id]);

  return (
    <div className="post-card">
      <h1>{data && data.title}</h1>
      <p>{data && data.body}</p>
    </div>
  );
};
export default Post;
