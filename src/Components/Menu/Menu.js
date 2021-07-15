import "./Menu.scss";

import MenuItem from "../MenuItem/MenuItem";

const Menu = (props) => {
  const { categories } = props;

  return (
    <div className="Menu">
      {categories
        .filter((el) => el.meals.length > 0)
        .map((el, index) => (
          <MenuItem keys={index} name={el.name} meals={el.meals} />
        ))}
    </div>
  );
};

export default Menu;
