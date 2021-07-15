import "./MenuItemCard.scss";

const MenuItemCard = (props) => {
  const { title, description, price, popular, picture } = props;

  return (
    <div className="Menu-item-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>
          {price && price + "€"}
          {popular && (
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
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>{" "}
              Populaire
            </span>
          )}
        </span>
      </div>
      <div>{picture && <img src={picture} alt="meal" />}</div>
    </div>
  );
};

export default MenuItemCard;
