import "./MenuItem.scss";

import MenuItemCard from "../MenuItemCard/MenuItemCard";

const MenuItem = (props) => {
  const { name, meals } = props;

  return (
    <div className="Menu-item">
      <h2>{name}</h2>
      <div className="card">
        {meals.map((el, index) => (
          <div>
            <MenuItemCard
              keys={index}
              title={el.title}
              description={el.description}
              price={el.price}
              popular={el.popular}
              picture={el.picture}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
