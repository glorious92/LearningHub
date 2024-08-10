import Cards from "./Cards";
const CardWrapper = ({ data }) => {
  return (
    <ul className="card-wrapper">
      <Cards data={data} />
    </ul>
  );
};

export default CardWrapper;
