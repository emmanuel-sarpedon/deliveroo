import "./Menu.scss";
import "../MenuItem/MenuItem.scss";
import "../MenuItemCard/MenuItemCard.scss";
import "../ShoppingCart/ShoppingCart.scss";

import { useState } from "react";

const Menu = (props) => {
  const { categories } = props;

  const [shoppingCart, setShoppingCart] = useState([]);

  const handleClickCard = (title, price) => {
    let newCart = [...shoppingCart];
    const index = newCart.map((el) => el.title).indexOf(title);
    index > -1
      ? newCart[index].quantity++
      : newCart.push({ quantity: 1, title: title, unitPrice: price });
    setShoppingCart(newCart);
  };

  const handleClickIncrement = (index) => {
    let newCart = [...shoppingCart];
    newCart[index].quantity++;
    setShoppingCart(newCart);
  };

  const handleClickDecrement = (index) => {
    let newCart = [...shoppingCart];
    newCart[index].quantity === 1
      ? newCart.splice(index, 1)
      : newCart[index].quantity--;
    setShoppingCart(newCart);
  };

  return (
    <div className="Menu">
      <div>
        {categories
          .filter((el) => el.meals.length > 0)
          .map((el, index) => (
            <div className="Menu-item">
              <h2>{el.name}</h2>
              <div className="card">
                {el.meals.map((el, index) => (
                  <div
                    className="Menu-item-card"
                    onClick={() => handleClickCard(el.title, el.price)}
                  >
                    <div>
                      <h3>{el.title}</h3>
                      <p>{el.description}</p>
                      <span>
                        {el.price && el.price + "€"}
                        {el.popular && (
                          <span
                            style={{
                              color: "#ff8000",
                              display: "inline-block",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#ff8000"
                              class="feather feather-star"
                              style={{
                                width: "20px",
                                height: "20px",
                                marginRight: "5px",
                              }}
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>{" "}
                            Populaire
                          </span>
                        )}
                      </span>
                    </div>
                    <div>
                      {el.picture && <img src={el.picture} alt="meal" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="shopping-cart">
        <button className={shoppingCart.length === 0 && "disable"}>
          Valider mon panier
        </button>
        {shoppingCart.length === 0 ? (
          "Votre panier est vide"
        ) : (
          <div>
            {shoppingCart.map((el, index) => (
              <div className="item" key={index}>
                <span>
                  <span onClick={() => handleClickDecrement(index)}>-</span>
                  {el.quantity}
                  <span onClick={() => handleClickIncrement(index)}>+</span>
                </span>
                <span>{el.title}</span>
                <span>{(el.quantity * el.unitPrice).toFixed(2)} €</span>
              </div>
            ))}
            <div className="subtotal">
              <div>
                Sous-Total :{" "}
                {shoppingCart
                  .map((e) => e.quantity * e.unitPrice)
                  .reduce((a, c) => a + c, 0)
                  .toFixed(2)}{" "}
                €
              </div>
              <div>Frais de livraison : 2,50 €</div>
            </div>

            <div className="total">
              <span>Total : </span>
              <span>
                {shoppingCart
                  .map((e) => e.quantity * e.unitPrice)
                  .reduce((a, c) => a + c, 2.5)
                  .toFixed(2)}
                €
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
