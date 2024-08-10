const Cards = ({ data }) => {
  return (
    data &&
    data.map((item) => {
      return (
        <li key={item.id} className="card">
          <span>{item.id}</span>
          <p>{item.title}</p>
        </li>
      );
    })
  );
};
export default Cards;
