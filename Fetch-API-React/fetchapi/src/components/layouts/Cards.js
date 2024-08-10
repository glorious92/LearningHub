const Cards = ({ data }) => {
  const cardClickHandler = (e) => {
    console.log(e.target.getAttribute(`data-id`));
  };

  return (
    data &&
    data.map((item) => {
      return (
        <li
          key={item.id}
          data-id={item.id}
          className="card"
          onClick={(e) => cardClickHandler(e)}
        >
          <span>{item.id}</span>
          <p>{item.title}</p>
        </li>
      );
    })
  );
};
export default Cards;
