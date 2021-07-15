import "./RestaurantInfos.scss";

const RestaurantInfos = (props) => {
  const { name, description, picture } = props;

  return (
    <div className="RestaurantInfos">
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      <img src={picture} alt="illustration"></img>
    </div>
  );
};

export default RestaurantInfos;
