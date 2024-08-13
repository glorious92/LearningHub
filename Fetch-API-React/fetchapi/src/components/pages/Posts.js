import { useNavigate } from "react-router-dom";
const Posts = ({ data }) => {
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <ul className="post-parent">
      {data.map((post) => {
        return (
          <li key={post.id} onClick={() => onClickHandler(post.id)}>
            <h5>{post.id}</h5>
            <p>{post.title}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Posts;
