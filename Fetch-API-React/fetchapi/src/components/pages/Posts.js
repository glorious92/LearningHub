const Posts = ({ data }) => {
  return (
    <ul className="post-parent">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <h5>{post.id}</h5>
            <p>{post.title}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Posts;
